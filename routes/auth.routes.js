const {Router} = require('express')
const User = require('../models/User')
const router = Router()
const config = require('config')

const bсrypt = require('bcryptjs')

const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')

router.post(
    '/register',
    [
        check('email', 'Некорректный email'),
        check('password', 'Минимальная длинна пароля 3 символа')
            .isLength({min: 3})
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Введены некорректные данные при регистрации'
                })
            }

            const {email, password, nickname} = req.body

            const candidate = await User.findOne({email})

            if (candidate) {
                return res.status(400).json({message: 'Такой пользователь уже существует'})
            }

            const hashedPassword = await bсrypt.hash(password, 4)
            const user = new User({email, password: hashedPassword, nickname})

            await user.save()

           return res.status(200).json({message: 'Пользователь создан'})

        } catch (e) {
            console.log(e)
            res.status(500).json({message: e})
        }
    })

router.post(
    '/login',
    async (req, res) => {
        try {
            const {email, password} = req.body

            const user = await User.findOne({email})

            if (!user) {
                return res.status(404).json({message: 'Пользователь не найден'});
            }

            const isMatch = bсrypt.compareSync(password, user.password)

            if(!isMatch){
                return res.status(400).json({message: 'Неверный пароль, попробуйте снова'})
            }

            const token = jwt.sign(
                {
                    userId: user.id,
                    userEmail: user.email,
                    userPassword: password
                },
                config.get('jwtSecret'),
                {expiresIn: '1h'}
            )

            return res.status(200).send({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    nickname: user.nickname,
                    avatar: user.avatar
                }
            })

        } catch (e) {
            console.log(e)
            res.send({message: e})
        }
    })


module.exports = router
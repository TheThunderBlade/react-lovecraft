const {Router} = require('express')
const User = require('../models/User')

const {check, validationResult} = require('express-validator')

const router = Router()

router.post(
    '/setUserImage',
    [
        check('avatar', 'Введите корректный URL картинки').isURL()
    ],
    async (req, res) => {
        try{
            const errors = validationResult(req)

            if(!errors.isEmpty()){
                return res.status(400).json({
                    message: errors.array().map(item => item.msg)
                })
            }

            const {email, avatar} = req.body

            const user = await User.findOneAndUpdate({email}, {$set: {avatar}}, {upsert: true})

            if (!user) {
                return res.status(404).json({message: 'Пользователь не найден'});
            }

            return res.status(200).json({message: 'Фотография профиля успешно заменена'})
        }catch (e) {
            console.log(e)
            res.status(500).json({message: e})
        }
    }
)

module.exports = router
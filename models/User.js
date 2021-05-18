const {Schema, model, Types} = require('mongoose')

const schema = Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    nickname: {type: String, required: true},
    avatar: {type: String}
})

module.exports = model('User', schema)
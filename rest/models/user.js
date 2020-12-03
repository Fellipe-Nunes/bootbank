const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    cpf: {
        type: String
    },
    celular: {
        type: String
    },
    password:{
        type: String
    },
    status: {
        type: String
    }
}, { autoCreate: true })

module.exports = mongoose.model('User', UserSchema)
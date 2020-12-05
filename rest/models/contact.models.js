const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    name: {
        type: String
    },
    cpf: {
        type: String
    },
    account: {
        type: String
    },
    status: {
        type: String
    },
    userId: {
        type: String
    }
}, { autoCreate: true })

module.exports = mongoose.model('Contact', ContactSchema)
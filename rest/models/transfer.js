const mongoose = require('mongoose')

const TransferSchema = new mongoose.Schema({
    contactId: {
        type: String
    },
    reason: {
        type: String
    },
    contact: {
        type: String
    },
    valueTransfer: {
        type: String
    },
    dateTransfer: {
        type: String
    },
    userId: {
        type: String
    }
}, { autoCreate: true })

module.exports = mongoose.model('Transfer', TransferSchema)
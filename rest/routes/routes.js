module.exports = (app) => {

    const notes = require('../api/note.api')

    //Create new note
    app.post('/rest/api/note', notes.create)

    // Retrieve all notes 
    app.get('/rest/api/note', notes.findAll)

    // Retrieve a single Note with noteId
    app.get('/rest/api/note/:noteId', notes.findOne)

    // Update a Note with noteId
    app.put('/rest/api/note/:noteId', notes.update)

    // Delete a Note with noteId
    app.delete('/rest/api/note/:noteId', notes.delete)


    const contacts = require('../api/contact.api')

    // Create a new Contact
    app.post('/rest/api/contact', contacts.create)

    // Retrieve all Contact
    app.get('/rest/api/contact', contacts.findAll)

    // Retrieve a single Contact with contactId
    app.get('/rest/api/contact/:contactId', contacts.findOne)

    // Update a Contact with contactId
    app.put('/rest/api/contact/:contactId', contacts.update)

    // Delete a Contact with contactId
    app.delete('/rest/api/contact/:contactId', contacts.delete)


    const transfers = require('../api/transfer.api')

    // Create a new Transfer
    app.post('/rest/api/transfer', transfers.create)

    // Retrieve all Transfer
    app.get('/rest/api/transfer', transfers.findAll)

    // Retrieve a single Transfer with transferId
    app.get('/rest/api/transfer/:transferId', transfers.findOne)

    // Update a Transfer with transferId
    app.put('/rest/api/transfer/:transferId', transfers.update)

    // Delete a Transfer with transferId

    app.delete('/rest/api/transfer/:transferId', transfers.delete)

    // Retrieve a Transfer with contactId AND valueTransfer
    app.get('/rest/api/checkTransfer/:contactId&:valueTransfer', transfers.findOneCheck)


    const users = require('../api/user.api')

    // Create a new user
    app.post('/rest/api/user', users.create)

    // Retrieve all user
    app.get('/rest/api/user', users.findAll)

    // Retrieve a single user with userId
    app.get('/rest/api/user/:userId', users.findOne)

    // Update a user with userId
    app.put('/rest/api/user/:userId', users.update)

    // Delete a user with userId
    app.delete('/rest/api/user/:userId', users.delete)

    // Retrieve a single user with cpf
    app.get('/rest/usersCpf/:cpf', users.findOneCpf)

    // Retrieve a single user with auth
    app.get('/rest/usersAuth/:cpf&:password', users.findOneAuth)
}
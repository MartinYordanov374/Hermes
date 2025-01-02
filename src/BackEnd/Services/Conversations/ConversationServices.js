const {CreateConversation} = require('./CreateConversation')
const {DeleteConversation} = require('./DeleteConversation')
const {GetConversationByParticipants} = require('./GetConversationByParticipants')

//TODO: Wrapp all of the functions below in a try-catch statements
module.exports = {
    CreateConversation,
    DeleteConversation,
    GetConversationByParticipants
}
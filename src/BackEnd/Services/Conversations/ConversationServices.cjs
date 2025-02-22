const {CreateConversation} = require('./CreateConversation.cjs')
const {DeleteConversation} = require('./DeleteConversation.cjs')
const {GetConversationByParticipants} = require('./GetConversationByParticipants.cjs')

//TODO: Wrapp all of the functions below in a try-catch statements
module.exports = {
    CreateConversation,
    DeleteConversation,
    GetConversationByParticipants
}
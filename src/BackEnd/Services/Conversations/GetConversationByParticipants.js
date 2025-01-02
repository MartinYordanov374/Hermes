const ConversationModel = require("../../Mongo/Schemas/Conversation")

const GetConversationByParticipants = async(senderUserId, receiverUserId) => {
    let targetConversation = await ConversationModel.find(
        {$and: [{SenderID: senderUserId}, {ReceiverID: receiverUserId}], 
        $or: [{SenderID: receiverUserId}, {ReceiverID: senderUserId}]}
        
    )
    if(targetConversation)
    {
        return targetConversation
    }
    else
    {
        // TODO: Create conversation if conversation does not exist already
        return false
    }
}

module.exports = {GetConversationByParticipants}
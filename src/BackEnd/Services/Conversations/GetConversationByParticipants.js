const ConversationModel = require("../../Mongo/Schemas/Conversation")

const GetConversationByParticipants = async(senderUserId, receiverUserId) => {
    let targetConversation = await ConversationModel.findOne({
        $or: [
            { SenderID: senderUserId, ReceiverID: receiverUserId },
            { SenderID: receiverUserId, ReceiverID: senderUserId }
        ]
    });
    if(targetConversation)
    {
        return targetConversation
    }
    else
    {
        // TODO: Create conversation if conversation does not exist already
        return null
    }
}

module.exports = {GetConversationByParticipants}
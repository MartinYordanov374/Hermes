const { GetConversationByParticipants } = require("./GetConversationByParticipants.cjs")
const ConversationModel = require("../../Mongo/Schemas/Conversation.cjs")

const CreateConversation = async(senderUserId, receiverUserId) => {
  //TODO: Check if both users exist before creating a convo
  let targetConversation = await GetConversationByParticipants(senderUserId, receiverUserId);
  if(!targetConversation)
  {
    let newConvo = await ConversationModel({
        SenderID: senderUserId, 
        ReceiverID: receiverUserId,
        CreationDate: Date.now()
    })
    await newConvo.save()
    return {status: 200, message: 'Successfully created conversation!'}
  }
  else
  {
    return {status:200, message: 'This conversation already exists', targetConversation}
  }
}

module.exports = {CreateConversation}
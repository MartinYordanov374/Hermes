const { Schema, default: mongoose } = require("mongoose");


const ConversationSchema = new Schema({
   SenderID: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
   },
   ReceiverID: {
     type: mongoose.Types.ObjectId,
     ref: 'User'
   },
   CreationDate: {
        type: Date,
        default: Date.now
    },
   Messages: {
        type: [mongoose.Types.ObjectId],
        ref: 'Message'
   },
   HiddenFrom: [{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'User'
 }],
})

const Conversation = mongoose.model("Conversation", ConversationSchema);

module.exports = Conversation
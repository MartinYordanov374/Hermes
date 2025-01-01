const { Schema, default: mongoose } = require("mongoose");


const ConversationSchema = new Schema({
   Participants: {
        type: [mongoose.Types.ObjectId],
        ref: 'User',
   },
   CreationDate: {
        type: Date,
        default: Date.now
    },
   Messages: {
        type: [mongoose.Types.ObjectId],
        ref: 'Message'
   }
})

const Conversation = mongoose.model("Conversation", ConversationSchema);

module.exports = Conversation
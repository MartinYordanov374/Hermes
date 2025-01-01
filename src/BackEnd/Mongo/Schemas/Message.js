const { Schema, default: mongoose } = require("mongoose");


const MessageSchema = new Schema({
    SenderID:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    ReceiverID:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    ConversationID:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Conversation'
    },
    Content:{
        type: String,
        maxLength: 5000,
        required: true
    },
    TimeStamp: {
        type: Date,
        default: Date.now
    }
})

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message
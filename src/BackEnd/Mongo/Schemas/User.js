const { Schema, mongoose } = require("mongoose");


const UserSchema = new Schema({
    Username: {
        required: true,
        type: String
    },
    Password: {
        required: true,
        type: String
    },
    ProfilePicture: {
        required: false,
        type: Buffer,
        default: null //TODO: Add a default profile picture after MVP
    }
})

const User = mongoose.model("User", UserSchema);

module.exports = User
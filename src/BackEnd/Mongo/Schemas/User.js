const { Schema } = require("mongoose");


const UserSchema = new Schema({
    Username: {
        required: true,
        type: String
    },
    Password: {
        required: true,
        type: String
    }
})

const User = mongoose.model("User", UserSchema);

module.exports = User
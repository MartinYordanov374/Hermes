const UserModel = require('../../Mongo/Schemas/User')
const bcrypt = require('bcrypt')
const salt_rounds = 10 //process.env.SALT_ROUNDS
const ChangePassword = async(username, newPassword) => {
    //TODO: Add password validations, check if user exists before updating
    let updatedUser = await UserModel.findOne({Username: username.toLowerCase()})
    updatedUser.Password = await bcrypt.hash(newPassword, salt_rounds)
    await updatedUser.save()
    return {status: 200, message: 'Password updated successfully!'}
}


module.exports = {
    ChangePassword
}


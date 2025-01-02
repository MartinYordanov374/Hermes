let UserModel = require('../../Mongo/Schemas/User')
const DeleteUser = async(username) => {
    await UserModel.findOneAndDelete({Username: username})
    return {status: 200, message: 'Profile deleted successfully!'}
}

module.exports = {DeleteUser}
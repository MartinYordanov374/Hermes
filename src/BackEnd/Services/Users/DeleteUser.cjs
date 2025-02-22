let UserModel = require('../../Mongo/Schemas/User.cjs')
const DeleteUser = async(userId) => {
    await UserModel.findByIdAndDelete(userId)
    return {status: 200, message: 'Profile deleted successfully!'}
}

module.exports = {DeleteUser}
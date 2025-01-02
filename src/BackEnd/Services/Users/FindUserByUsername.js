const UserModel = require('../../Mongo/Schemas/User')

const FindUserByUsername = async (username) => {
    let targetUser = await UserModel.findOne({Username: username})
    if(targetUser)
    {
        return {message: 'This username is already taken!', status: 409, DoesUserExist: true, UserObject: targetUser}
    }
    else
    {
        return {message: 'This username is free.', DoesUserExist: false, targetUser}
    }
    
};
  
module.exports = {FindUserByUsername}
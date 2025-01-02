const UserModel = require('../../Mongo/Schemas/User')
const { FindUserByUsername } = require('./FindUserByUsername')
const bcrypt = require('bcrypt')
const LoginUser = async(username, password) => {
    let targetUser = await FindUserByUsername(username)
    if(targetUser.DoesUserExist == true)
    {
        if(await bcrypt.compare(password, targetUser.UserObject.Password))
        {
            return {message: 'log in successful', status: 200, loginSuccess: true,  userId: targetUser.UserObject._id}
        }
        else
        {
            return {message: 'log in failed', status: 401, loginSuccess: false}
        }
    }
    else
    {
        return {message: 'This user does not exist', status: 404, loginSuccess: false}
    }
}

module.exports = {LoginUser}
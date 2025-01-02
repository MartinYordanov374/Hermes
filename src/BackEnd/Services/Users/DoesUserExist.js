const UserModel = require('../../Mongo/Schemas/User')

const DoesUserExist = async (username) => {
    let foundEntries = await UserModel.findOne({Username: username})
    if(foundEntries)
    {
        return {message: 'This username is already taken!', status: 409, DoesUserExist: true}
    }
    else
    {
        return {message: 'This username is free.', DoesUserExist: false}
    }
    
};
  
module.exports = {DoesUserExist}
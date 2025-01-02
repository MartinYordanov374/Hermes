const {RegisterUser} = require('./RegisterUser')
const {FindUserByUsername} = require('./FindUserByUsername')
const {LoginUser} = require('./LoginUser')
const {DeleteUser} = require('./DeleteUser')
const {ChangePassword} = require('./ChangePassword')
//TODO: Wrapp all of the functions below in a try-catch statements
module.exports = {
    RegisterUser,
    FindUserByUsername,
    LoginUser,
    DeleteUser,
    ChangePassword
}
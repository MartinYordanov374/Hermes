const {RegisterUser} = require('./RegisterUser.cjs')
const {FindUserByUsername} = require('./FindUserByUsername.cjs')
const {LoginUser} = require('./LoginUser.cjs')
const {DeleteUser} = require('./DeleteUser.cjs')
const {ChangePassword} = require('./ChangePassword.cjs')
//TODO: Wrapp all of the functions below in a try-catch statements
module.exports = {
    RegisterUser,
    FindUserByUsername,
    LoginUser,
    DeleteUser,
    ChangePassword
}
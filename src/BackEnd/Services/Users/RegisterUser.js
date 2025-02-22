const salt_rounds = 9

const bcrypt = require('bcryptjs')

const UserModel = require('../../Mongo/Schemas/User')

const RegisterUser = async (username, password, confirmationPassword) => {
    //TODO: Add password regex to enforce stronger passwords
    if (password !== confirmationPassword) 
    {
      return { status: 403, message: "Passwords don't match" }
    } 
    else 
    {
      const hashedPassword = await bcrypt.hash(password, salt_rounds);
  
      const newUser = await UserModel({
        Username: username,
        Password: hashedPassword,
      });

      await newUser.save();
  
      return { status: 200, message: "User registered successfully!" }
    }
  };
  
module.exports = {RegisterUser}
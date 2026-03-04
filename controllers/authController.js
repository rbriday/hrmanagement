const User = require("../models/userSchema");


let registrationController =async (req, res) => {
    const {username, email, password} = req.body;

    let existingUser = await User.findOne({email : email});
    if(existingUser){
        return res.status(400).json({
            success : false,
            message : "Email Alreday Exists",
        })
    }
    
    let createUser = new User({
        username : username,
        email : email,
        password : password,
    })
    createUser.save();

    res.send({
        id : createUser._id,
        username : createUser.username,
        email : createUser.email
    })
  
}

module.exports = {registrationController}
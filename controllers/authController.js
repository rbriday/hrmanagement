const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");

let registrationController = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    let existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email Alreday Exists",
      });
    }
// async await bcrypt password
//    bcrypt.hash(password, 10, async function (err, hash) {
//     if(err){
//         console.log(err)
//         return res.status(500).json({
//             success : false,
//             message: "server error"
//         })
//     }
//     let createUser = new User({
//       username: username,
//       email: email,
//       password:hash,
//     });
//     await createUser.save();
//     res.send({
//       id: createUser._id,
//       username: createUser.username,
//       email: createUser.email,
//     });
    
//   });


// bcryptPassword variabl 

let bcryptPass = await bcrypt.hash(password, 10);

    let createUser = new User({
      username: username,
      email: email,
      password: bcryptPass,
    });

    await createUser.save();

    res.send({
      id: createUser._id,
      username: createUser.username,
      email: createUser.email,
    });
  } 
  catch (erro) {
    console.log(erro)
    return res.status(500).json({
        success : false,
        massage : "Server Error"
    })
  }
};

module.exports = { registrationController };


let mongoose = require('mongoose')
let {Schema} = mongoose;

let userSchema = new Schema({
    username : {
        type : String,
        required :  [true, "username required"]
    },
    email : {
        type : String,
        required : [true, "email required"],
        lowercase : true,
        trim : true,
        unique : true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Please enter a valid email address"]
    },
    password : {
        type : String,
        required : [true, "password required"],
        min : [6, "too low"],
        max : [8, "too high"],
        // match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "Please enter a valid email address"]
    },
    photo : {
        type : String
    },
    nid : {
        type : Number,
        min : [10, "too low"],
        max : [17, "to high"]
    },
    address : {
        type:String
    }

})

module.exports = mongoose.model("User",userSchema )


import mongoose from 'mongoose'

const userSchema = new mongoose.Schema
({
    name:{
        type:String,
        required:[true,'Please enter a username'],
        trim:true,
    },
    email:{
        type : String ,  //email is a string data type in mongoDB
        required: true,
        unique: true,   //this will ensure that the value of this field must be unqiue across all documents
    },
    password:{
        type:String,    //password is also a string datatype
        required:true,
    },
    phone: {
        type: Number,//phone number is an integer datatype
        minlength: [10],//min length for phone numbers should not be less than ten digits
        required:true,
    },
    address:{
        type:String,
        required: true,
    },
    role:{
        type:Number,
        default:0,
    }

}, {timestamps:true} )
export default mongoose.model('users')
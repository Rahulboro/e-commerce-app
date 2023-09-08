import usermodel from '../models/userModel.js'
import { hashpassword } from '../utils/authUtils.js';
import JWT from 'jsonwebtoken';
export const registerControler = async(req,res) => {
    try {
        const {name,email,password,phone,address}= req.body     
        //validation
        if(!name){
            return res.send({error:"name is required"})
        } 
        if(!email){
            return res.send({error:"email is required"})
        } 
        if(!password){
            return res.send({error:"password is required"})
        } 
        if(!phone){
            return res.send({error:"phone is required"})
        } 
        if(!address){
            return res.send({error:"address is required"})
        } 
        //check email exist or not
        const userexisting = await usermodel.findOne({email})
        if (userexisting){
            return res.send(200).send({
                success:true,
                message:'User already Registered  '
            })
        }
        //create new user and save in database
        const hashedPassword = await hashpassword(password)
        // save 
        const newuser = await new usermodel({name,email,address,password:hashedPassword}).save()

        res.status(201).send({
            success:true,
            message:'User Register Successfully',
            newuser 
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message: "Error in registration",
            error
        })
    }
};
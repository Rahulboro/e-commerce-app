import usermodel from "../models/userModel.js";
import { comparingPassword, hashpassword } from "../utils/authUtils.js";
import JWT from "jsonwebtoken";
export const registerControler = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validation
    if (!name) {
      return res.send({ error: "name is required" });
    }
    if (!email) {
      return res.send({ error: "email is required" });
    }
    if (!password) {
      return res.send({ error: "password is required" });
    }
    if (!phone) {
      return res.send({ error: "phone is required" });
    }
    if (!address) {
      return res.send({ error: "address is required" });
    }
    //check email exist or not
    const userexisting = await usermodel.findOne({ email });
    if (userexisting) {
      return res.send(200).send({
        success: true,
        message: "User already Registered  ",
      });
    }
    //create new user and save in database
    const hashedPassword = await hashpassword(password);
    // save
    const newuser = await new usermodel({
      name,
      email,
      address,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      newuser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in ujjal registration",
      error,
    });
  }
};

// post login

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid Email or Password",
      });
    }
    const existinguser = await usermodel.findOne({ email });
    if (!existinguser) {
      return res
        .status(404)
        .send({ success: false, message: "Email Not Found" });
    }
    const match = await comparingPassword(password, user.password);
    if (!match) {
      return res
        .status(200)
        .send({ success: false, message: "Wrong password" });
    }
    // creating token
    const token = JWT.sign({ _id: user._id }, process.env.JWTSECRET, {
      expiresIn: "36h",
    });
    res.status(200).send({
      success: true,
      message: "Login successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Login",
      error,
    });
  }
};

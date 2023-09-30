import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";
//Routes protecting function
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(req.headers.authorization, process.env.JWTSECRET);
    next();
  } catch (error) {
    console.log(error);
  }
};

// admin
export const adminis = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (!user.role !== 1)
      return res.status(401).send({
        success: false,
        message: "unathorize acess",
      });
  } catch (error) {
    console.log(error);
  }
};

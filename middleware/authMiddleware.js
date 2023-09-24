import JWT from "jsonwebtoken";
//Routes protecting function
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(req.headers.authorization, process.env.JWTSECRET);
    next();
  } catch (error) {
    console.log(error);
  }
};

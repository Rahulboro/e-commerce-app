import JWT from 'jsonwebtoken'
//Routes protecting function 
export const requireSignIn = async (req,res,next ) => {
    const decode = JWT.verify(req.bo)
}
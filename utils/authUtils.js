import bcrypt from 'bcrypt';

export const hashpassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        return hashedPassword
    } catch (error) {
        console.log(error)        
    }
};

export const comparingPassword = async (password, hashedPassword) ={
    return bcrypt.compare(password, hashedPassword);
};
import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`connected to database ${connect.connection.host}`);
  } catch (error) {
    console.log(`error in mongodb ${error}`);
  }
};
export default connectToDb;

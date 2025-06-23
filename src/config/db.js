import dotenv from 'dotenv'
import mongoose from 'mongoose';


dotenv.config();

const connectDB = async () => {

  try {
    // const conn = await mongoose.connect(process.env.MONGO_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    mongoose.connection.on('connected', ()=> console.log
    ("Database Connected"))
    await mongoose.connect(`${process.env.MONGO_URI}`)
    
  } catch (error) {
    console.log("Db is not working");
  }
};

export default connectDB;
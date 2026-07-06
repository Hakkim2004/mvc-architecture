import mongoose from "mongoose";

const connectDB = () => {
    try {

        const mongoURL = process.env.MONGO_URL;

        mongoose.connect(mongoURL);

        console.log("Database Connection Success");


    } catch (error){
        console.error("Database Connection Faild", error.message)
    }
}


export default connectDB;
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectToMongoDB = async () => {
    try {
        // Log the MONGO_DB_URI to ensure it is being read correctly
        console.log("MONGO_DB_URI:", process.env.MONGO_DB_URI);

        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
    }
};

export default connectToMongoDB;

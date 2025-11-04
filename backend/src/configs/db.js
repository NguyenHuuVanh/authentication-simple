import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB_URL = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    mongoose.connect(DB_URL).then(() => {
      console.log("MongoDB connected successfully!");
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectDB;

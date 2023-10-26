import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const startConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected 🍃");
  } catch (err) {
    console.error(err);
  }
};

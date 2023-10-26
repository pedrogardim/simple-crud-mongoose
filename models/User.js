import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: { required: true, unique: true, lowercase: true, type: String },
  password: { required: true, type: String },
  creditCards: [Object],
});

export default mongoose.model("User", userSchema);

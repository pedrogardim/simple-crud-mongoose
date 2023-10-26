import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  title: String,
  description: String,
  images: [String],
  category: [String],
  isVegan: Boolean,
  price: Number,
});

export default mongoose.model("Product", productSchema);

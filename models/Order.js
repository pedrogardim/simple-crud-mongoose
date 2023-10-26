import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
  userId: Schema.Types.ObjectId,
  products: [
    {
      productId: Schema.Types.ObjectId,
      quantity: Number,
      orderPrice: Number,
    },
  ],
});

export default mongoose.model("Order", orderSchema);

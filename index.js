import express from "express";
import { startConnection } from "./db/index.js";
import Order from "./models/Order.js";
import userRouter from "./routes/userRouter.js";

const app = express();

app.use(express.json());

app.use("/user", userRouter);

app.post("/order", async (req, res) => {
  const user = await Order.create(req.body);
  res.send(user);
});

startConnection().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});

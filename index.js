import mongoose from "mongoose";
import express from "express";
import { startConnection } from "./db/index.js";

const app = express();

app.use(express.json());

startConnection().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});

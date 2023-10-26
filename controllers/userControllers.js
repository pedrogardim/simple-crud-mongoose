import mongoose from "mongoose";
import User from "../models/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const user = await User.find({});
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};

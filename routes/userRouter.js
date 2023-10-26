import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
} from "../controllers/userControllers.js";

const router = Router();

router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);
router.post("/user", createUser);

export default router;

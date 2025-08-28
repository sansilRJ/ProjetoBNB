import { Router } from "express";
import { connectDb } from "../../config/db.js";
import User from "./model.js";
import bcrypt from "bcryptjs";


const router = Router();
const bcryptSalt = bcrypt.genSaltSync();

router.get("/users", async (req, res) => {
  connectDb();

  try {
    const userDoc = await User.find();
    res.json(userDoc);
  } catch (error) {
    res.status(500).json(userDoc);
  }
});

router.post("/users", async (req, res) => {
  connectDb();

  const { name, email, password } = req.body;
  const encryptedPassword = bcrypt.hashSync(password, bcryptSalt);
  try {
    const newuserDoc = await User.create({
      name,
      email,
      password: encryptedPassword,
    });
    res.json(newuserDoc);
  } catch (error) {
    res.status(500).json(error);
  }
});


export default router
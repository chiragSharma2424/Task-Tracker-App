import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();
import userModel from "../models/user-model.js";

async function userMiddleware(req, res, next) {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        msg: "Unauthorized. Please login first.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        msg: "User not found. Unauthorized.",
      });
    }

    req.user = user; 
    next();

  } catch (err) {
    console.log("Auth middleware error:", err.message);

    return res.status(401).json({
      msg: "Invalid or expired token",
    });
  }
}

export default userMiddleware;
import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// =====================================
// ADMIN LOGIN
// =====================================

export const loginAdmin = async (
  req,
  res
) => {
  try {

    const { email, password } =
      req.body;

    // VALIDATION
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message:
          "Email and password required",
      });
    }

    // FIND ADMIN
    const admin = await Admin.findOne({
      email: email.toLowerCase(),
    });

    // INVALID EMAIL
    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // CHECK PASSWORD
    const isMatch =
      await bcrypt.compare(
        password,
        admin.password
      );

    // INVALID PASSWORD
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // GENERATE TOKEN
    const token = jwt.sign(
      {
        id: admin._id,
        email: admin.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // RESPONSE
    res.status(200).json({
      success: true,
      token,
      admin: {
        id: admin._id,
        email: admin.email,
      },
    });

  } catch (error) {

    console.log(
      "LOGIN ERROR:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
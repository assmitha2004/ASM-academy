import jwt from "jsonwebtoken";

// =====================================
// PROTECT ADMIN
// =====================================

const protectAdmin = (
  req,
  res,
  next
) => {
  try {

    const authHeader =
      req.headers.authorization;

    // CHECK HEADER
    if (
      !authHeader ||
      !authHeader.startsWith("Bearer ")
    ) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    // TOKEN
    const token =
      authHeader.split(" ")[1];

    // VERIFY TOKEN
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.admin = decoded;

    next();

  } catch (error) {

    console.log(
      "AUTH ERROR:",
      error
    );

    res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

export default protectAdmin;
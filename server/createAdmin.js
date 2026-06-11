import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

import Admin from "./models/Admin.js";

dotenv.config();

// CONNECT DATABASE
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  });

// CREATE ADMIN
const createAdmin = async () => {

  try {

    // DELETE OLD ADMINS
    await Admin.deleteMany({});

    // HASH PASSWORD
    const hashedPassword =
      await bcrypt.hash(
        process.env.ADMIN_PASSWORD,
        10
      );

    // CREATE ADMIN
    const admin =
      await Admin.create({
        email:
          process.env.ADMIN_EMAIL,
        password:
          hashedPassword,
      });

    console.log(
      "NEW ADMIN CREATED"
    );

    console.log(admin);

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);
  }
};

createAdmin();
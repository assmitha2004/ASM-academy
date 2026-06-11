import bcrypt from "bcryptjs";
import Admin from "../models/Admin.js";

const createAdmin = async () => {

  try {

    const existingAdmin =
      await Admin.findOne({
        email:
          process.env.ADMIN_EMAIL,
      });

    // ADMIN EXISTS
    if (existingAdmin) {
      console.log(
        "Admin already exists"
      );
      return;
    }

    // HASH PASSWORD
    const hashedPassword =
      await bcrypt.hash(
        process.env.ADMIN_PASSWORD,
        10
      );

    // CREATE ADMIN
    await Admin.create({
      email:
        process.env.ADMIN_EMAIL,
      password: hashedPassword,
    });

    console.log(
      "Admin created successfully"
    );

  } catch (error) {

    console.log(
      "CREATE ADMIN ERROR:",
      error
    );
  }
};

export default createAdmin;
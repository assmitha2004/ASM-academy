import express from "express";

import {
  getCountries,
  addCountry,
  deleteCountry,
  updateCountry,
} from "../controllers/countryController.js";
import protectAdmin from "../middleware/authMiddleware.js";

const router = express.Router();

// PUBLIC
router.get(
  "/",
  getCountries
);

// ADMIN
router.post(
  "/",
  protectAdmin,
  addCountry
);

router.delete(
  "/:id",
  protectAdmin,
  deleteCountry
);

router.put(
  "/:id",
  protectAdmin,
  updateCountry
);

export default router;
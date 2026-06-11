import express from "express";

import {
  getAllInquiries,
  exportInquiriesExcel,
  deleteInquiry,
} from "../controllers/adminController.js";

import protectAdmin from "../middleware/authMiddleware.js";

const router = express.Router();

// =====================================
// ALL ROUTES PROTECTED
// =====================================

router.get(
  "/",
  protectAdmin,
  getAllInquiries
);

router.get(
  "/export/excel",
  protectAdmin,
  exportInquiriesExcel
);

router.delete(
  "/:id",
  protectAdmin,
  deleteInquiry
);

export default router;
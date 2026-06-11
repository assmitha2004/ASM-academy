import Inquiry from "../models/Inquiry.js";
import XLSX from "xlsx";

// =====================================
// GET ALL INQUIRIES
// =====================================

export const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({
      createdAt: -1,
    });

    res.status(200).json(inquiries);

  } catch (error) {
    console.log("GET INQUIRIES ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// =====================================
// EXPORT INQUIRIES EXCEL
// =====================================

export const exportInquiriesExcel = async (req, res) => {
  try {

    // =====================================
    // FETCH DATA
    // =====================================

    const inquiries = await Inquiry.find().sort({
      createdAt: -1,
    });

    // =====================================
    // CREATE WORKBOOK
    // =====================================

    const workbook = XLSX.utils.book_new();

    // =====================================
    // ALL INQUIRIES SHEET
    // =====================================

    const allInquiriesData = inquiries.map((item, index) => ({
      "S.No": index + 1,
      Name: item.name || "",
      "Class Type": item.classType || "",
      Level: item.level || "",
      Country: item.country || "",
      WhatsApp: item.whatsapp || "",
      Email: item.email || "",
      Date: item.createdAt
        ? new Date(item.createdAt).toLocaleString()
        : "",
    }));

    const allSheet = XLSX.utils.json_to_sheet(
      allInquiriesData
    );

    // COLUMN WIDTH
    allSheet["!cols"] = [
      { wch: 8 },
      { wch: 25 },
      { wch: 20 },
      { wch: 15 },
      { wch: 20 },
      { wch: 20 },
      { wch: 30 },
      { wch: 25 },
    ];

    XLSX.utils.book_append_sheet(
      workbook,
      allSheet,
      "All Inquiries"
    );

    // =====================================
    // COUNTRY-WISE SHEETS
    // =====================================

    const uniqueCountries = [
      ...new Set(
        inquiries
          .map((item) => item.country)
          .filter(Boolean)
      ),
    ];

    uniqueCountries.forEach((country) => {

      const countryData = inquiries
        .filter((item) => item.country === country)
        .map((item, index) => ({
          "S.No": index + 1,
          Name: item.name || "",
          "Class Type": item.classType || "",
          Level: item.level || "",
          WhatsApp: item.whatsapp || "",
          Email: item.email || "",
          Date: item.createdAt
            ? new Date(item.createdAt).toLocaleString()
            : "",
        }));

      const countrySheet =
        XLSX.utils.json_to_sheet(countryData);

      // COLUMN WIDTH
      countrySheet["!cols"] = [
        { wch: 8 },
        { wch: 25 },
        { wch: 20 },
        { wch: 15 },
        { wch: 20 },
        { wch: 30 },
        { wch: 25 },
      ];

      // EXCEL SHEET NAME LIMIT = 31 CHARS
      const safeSheetName = country
        .substring(0, 31)
        .replace(/[\\/?*[\]:]/g, "");

      XLSX.utils.book_append_sheet(
        workbook,
        countrySheet,
        safeSheetName
      );
    });

    // =====================================
    // GENERATE BUFFER
    // =====================================

    const excelBuffer = XLSX.write(workbook, {
      type: "buffer",
      bookType: "xlsx",
    });

    // =====================================
    // RESPONSE HEADERS
    // =====================================

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=inquiries.xlsx`
    );

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    // =====================================
    // SEND FILE
    // =====================================

    return res.send(excelBuffer);

  } catch (error) {

    console.log("EXPORT EXCEL ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Excel Export Failed",
    });
  }
};
// =====================================
// DELETE INQUIRY
// =====================================

export const deleteInquiry = async (
  req,
  res
) => {
  try {

    await Inquiry.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Inquiry deleted",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Delete failed",
    });
  }
};

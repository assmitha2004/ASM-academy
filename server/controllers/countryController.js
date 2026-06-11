import Country from "../models/Country.js";

// =====================================
// GET COUNTRIES
// =====================================

export const getCountries =
  async (req, res) => {

    try {

      const countries =
        await Country.find().sort({
          name: 1,
        });

      res.status(200).json(
        countries
      );

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

// =====================================
// ADD COUNTRY
// =====================================

export const addCountry =
  async (req, res) => {

    try {

      const country =
        await Country.create({
          name: req.body.name,
          currency:
            req.body.currency,
          onePrice:
            req.body.onePrice,
          duoPrice:
            req.body.duoPrice,
        });

      res.status(201).json({
        success: true,
        country,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        message: "Add country failed",
      });
    }
  };

// =====================================
// DELETE COUNTRY
// =====================================

export const deleteCountry =
  async (req, res) => {

    try {

      await Country.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        success: true,
        message: "Country deleted",
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        message: "Delete failed",
      });
    }
  };

// =====================================
// UPDATE COUNTRY
// =====================================

export const updateCountry =
  async (req, res) => {

    try {

      const updatedCountry =
        await Country.findByIdAndUpdate(
          req.params.id,
          {
            name: req.body.name,
            currency:
              req.body.currency,
            onePrice:
              req.body.onePrice,
            duoPrice:
              req.body.duoPrice,
          },
          {
            new: true,
          }
        );

      res.status(200).json({
        success: true,
        updatedCountry,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        message: "Update failed",
      });
    }
  };
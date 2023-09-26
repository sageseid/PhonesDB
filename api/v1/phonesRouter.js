const express = require("express")
const phones_model = require("./phonesModel")


const router = express.Router();


router.get("/filter", async (req, res) => {
  try {
    // Define filters based on query parameters
    const filters = {};

    if (req.query.title) {
      filters.title = req.query.title;
    }

    if (req.query.releaseDate) {
      // Convert releaseDate to a valid date object (e.g., "2018, 08" to Date)
      const releaseDate = new Date(req.query.releaseDate);
      filters.releaseDate = { $gte: releaseDate };
    }

    if (req.query.priceMin && req.query.priceMax) {
      filters.price = { $gte: parseInt(req.query.priceMin), $lte: parseInt(req.query.priceMax) };
    }

    if (req.query.os) {
      filters.os = req.query.os;
    }

    if (req.query.screenRes) {
        // Convert the query parameter into an array of screen resolutions
        const screenResolutions = Array.isArray(req.query.screenRes)
          ? req.query.screenRes
          : [req.query.screenRes];
      
        // Add the screenRes filter to the filters object
        filters.screenRes = screenResolutions;
      }

    if (req.query.cam1Min && req.query.cam1Max) {
      filters.cam1 = { $gte: parseInt(req.query.cam1Min), $lte: parseInt(req.query.cam1Max) };
    }

    if (req.query.batterymAHMin && req.query.batterymAHMax) {
      filters.batterymAH = { $gte: parseInt(req.query.batterymAHMin), $lte: parseInt(req.query.batterymAHMax) };
    }

    if (req.query.storageGB) {
        // Convert the query parameter into an array of storage 
        const storageGigaByte = Array.isArray(req.query.storageGB)
          ? req.query.storageGB
          : [req.query.storageGB];
      
        // Add the storage filter to the filters object
        filters.storageGB = storageGigaByte;
      }

  

    // Retrieve filtered data from the database
    const filteredPhones = await phones_model.getfilteredPhones(filters);

    res.status(200).json(filteredPhones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;

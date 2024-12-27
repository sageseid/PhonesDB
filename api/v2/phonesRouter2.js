const express = require("express");
const phones_model = require("./phonesModal2");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "phones2 router is working" });
});


router.get("/filter", async (req, res) => {
  try {
    const filters = {};
    
    if (req.query.releaseDate) {
      filters.releaseDate = req.query.releaseDate;
    }
    if (req.query.priceMin && req.query.priceMax) {
      filters.price = { $gte: parseInt(req.query.priceMin), $lte: parseInt(req.query.priceMax) };
    }
    if (req.query.os) {
      filters.os = req.query.os;
    }
    if (req.query.screenRes) {
      filters.screenRes = Array.isArray(req.query.screenRes) ? req.query.screenRes : [req.query.screenRes];
    }
    if (req.query.cam1Min && req.query.cam1Max) {
      filters.cam1MP = { $gte: parseInt(req.query.cam1Min), $lte: parseInt(req.query.cam1Max) };
    }
    if (req.query.cam2Min && req.query.cam2Max) {
      filters.cam2MP = { $gte: parseInt(req.query.cam2Min), $lte: parseInt(req.query.cam2Max) };
    }
    if (req.query.cam1vidMin && req.query.cam1vidMax) {
      filters.cam1vidP = { $gte: parseInt(req.query.cam1vidMin), $lte: parseInt(req.query.cam1vidMax) };
    }
    if (req.query.cam2vidMin && req.query.cam2vidMax) {
      filters.cam2vidP = { $gte: parseInt(req.query.cam2vidMin), $lte: parseInt(req.query.cam2vidMax) };
    }
    if (req.query.batterymAHMin && req.query.batterymAHMax) {
      filters.batterymAH = { $gte: parseInt(req.query.batterymAHMin), $lte: parseInt(req.query.batterymAHMax) };
    }
    if (req.query.storageGB) {
      filters.storageGB = Array.isArray(req.query.storageGB) ? req.query.storageGB : [req.query.storageGB];
    }
    if (req.query.ramGB) {
      filters.ramGB = Array.isArray(req.query.ramGB) ? req.query.ramGB : [req.query.ramGB];
    }
    if (req.query.usb) {
      filters.usb = req.query.usb;
    }
    if (req.query.memoryslot) {
      filters.memoryslot = req.query.memoryslot === 'true';
    }
    if (req.query.wirelesscharging) {
      filters.wirelesscharging = req.query.wirelesscharging === 'true';
    }
    if (req.query.fingerprint) {
      filters.fingerprint = req.query.fingerprint === 'true';
    }

    const filteredPhones = await phones_model.getfilteredPhones(filters);
    res.status(200).json(filteredPhones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
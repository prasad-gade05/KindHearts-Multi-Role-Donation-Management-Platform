const express = require("express");
const router = express.Router();
const Institute = require("../models/Institute");

router.post("/", async (req, res) => {
  try {
    // Create institute object only with fields that are provided in req.body
    const instituteData = {};

    // List of all possible fields
    const fields = [
      "name",
      "email",
      "phone",
      "address",
      "description",
      "category",
      "itemName",
      "quantity",
      "urgency",
      "specifications",
      "expectedDeliveryDate",
      "requesterName",
      "designation",
      "department",
      "contactNumber",
      "alternateContact",
      "institutionId",
      "deliveryAddress",
      "landmark",
      "city",
      "state",
      "pincode",
      "preferredDeliveryTime",
      "identityType",
      "identityNumber",
      "identityProof",
      "institutionLetter",
      "purpose",
      "beneficiaryCount",
      "previousDonations",
      "previousDonationDetails",
      "specialRequirements",
      "termsAccepted",
    ];

    // Only add fields that are present in req.body
    fields.forEach((field) => {
      if (req.body[field] !== undefined) {
        instituteData[field] = req.body[field];
      }
    });

    const institute = new Institute(instituteData);
    await institute.save();
    res.status(201).json({ success: true, institute });
  } catch (error) {
    console.error("Error registering institute request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const institutes = await Institute.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, institutes });
  } catch (error) {
    console.error("Error fetching institute requests:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

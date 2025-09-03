const Shop = require("../models/Shop");

const createShop = async (req, res) => {
  try {
    const { name, location, owner } = req.body;

    if (!name || !location || !owner) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const shop = new Shop({ name, location, owner });
    await shop.save();

    res.status(201).json({ success: true, shop });
  } catch (error) {
    console.error("Error creating shop:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getShops = async (req, res) => {
  try {
    const shops = await Shop.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, shops });
  } catch (error) {
    console.error("Error fetching shops:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createShop, getShops };

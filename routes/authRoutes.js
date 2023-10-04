// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Rute untuk login
router.post("/login", authController.login);

module.exports = router;

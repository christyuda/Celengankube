const express = require("express");
const router = express.Router();
const penggunaController = require("../controllers/penggunaController");

// Rute untuk mendapatkan semua data pengguna
router.get("/", penggunaController.getAllPengguna);

// Rute untuk membuat pengguna baru
router.post("/buat", penggunaController.buatPengguna);

// Rute untuk mendapatkan informasi pengguna berdasarkan ID
router.get("/:userId", penggunaController.getInfoPengguna);

// Rute untuk memperbarui informasi pengguna berdasarkan ID
router.put("/:userId", penggunaController.perbaruiInfoPengguna);

module.exports = router;

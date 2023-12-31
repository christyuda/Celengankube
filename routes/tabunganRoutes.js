const express = require("express");
const router = express.Router();
const tabunganController = require("../controllers/tabunganController");

// Rute untuk mendapatkan semua tabungan
router.get("/", tabunganController.getAll);
// Rute untuk menambahkan catatan tabungan baru
router.post("/tambah", tabunganController.tambahTabungan);

// Rute untuk mendapatkan semua catatan tabungan berdasarkan ID pengguna
router.get("/:userId", tabunganController.getTabungan);

// Rute untuk menghapus catatan tabungan berdasarkan ID
router.delete("/:tabunganId", tabunganController.hapusTabungan);

// Rute untuk memperbarui catatan tabungan berdasarkan ID
router.put("/:tabunganId", tabunganController.perbaruiTabungan);

module.exports = router;

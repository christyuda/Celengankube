const express = require("express");
const router = express.Router();
// const tabunganController = require("../controllers/tabunganController");
const pengeluaranController = require("../controllers/pengeluaranController");

// Rute untuk mendapatkan semua pengeluaran
router.get("/", pengeluaranController.getAll);
// Rute untuk menambahkan catatan tabungan baru
router.post("/tambah", pengeluaranController.tambahTabungan);

// Rute untuk mendapatkan semua catatan tabungan berdasarkan ID pengguna
router.get("/:userId", pengeluaranController.getTabungan);

// Rute untuk menghapus catatan tabungan berdasarkan ID
router.delete("/:pengeluaranId", pengeluaranController.hapusTabungan);

// Rute untuk memperbarui catatan tabungan berdasarkan ID
router.put("/:pengeluaranId", pengeluaranController.perbaruiTabungan);

module.exports = router;

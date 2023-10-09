const express = require("express");
const router = express.Router();
const pengeluaranController = require("../controllers/pengeluaranController");

// Rute untuk mendapatkan semua pengeluaran
router.get("/", pengeluaranController.getAll);
// Rute untuk menambahkan catatan tabungan baru
router.post("/tambah", pengeluaranController.tambahPengeluaran);

// Rute untuk mendapatkan semua catatan tabungan berdasarkan ID pengguna
router.get("/:userId", pengeluaranController.getPengeluaran);

// Rute untuk menghapus catatan tabungan berdasarkan ID
router.delete("/:pengeluaranId", pengeluaranController.hapusPengeluaran);

// Rute untuk memperbarui catatan tabungan berdasarkan ID
router.put("/:pengeluaranId", pengeluaranController.perbaruiPengeluaran);

module.exports = router;

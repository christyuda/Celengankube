const mongoose = require("mongoose");

const pengeluaranSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pengguna", // Referensi ke model Pengguna
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  // Informasi tambahan tentang catatan pengeluaran (opsional)
});

const Pengeluaran = mongoose.model("Pengeluaran", pengeluaranSchema);

module.exports = Pengeluaran;

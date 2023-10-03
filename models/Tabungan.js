const mongoose = require("mongoose");

const tabunganSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pengguna", // Referensi ke model Pengguna
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
  },
});

const Tabungan = mongoose.model("Tabungan", tabunganSchema);

module.exports = Tabungan;

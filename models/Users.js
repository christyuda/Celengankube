const mongoose = require("mongoose");

const penggunaSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  profile: {
    fullName: String,
    dateOfBirth: Date,
  },
  balance: {
    type: Number,
    default: 0, // Saldo awal adalah 0
  },
});

const Pengguna = mongoose.model("Pengguna", penggunaSchema);

module.exports = Pengguna;

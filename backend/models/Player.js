// backend/models/Player.js
const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // Ensure player names are unique
  },
  wins: {
    type: Number,
    default: 0,
  },
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;

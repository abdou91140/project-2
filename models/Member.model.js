const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
  name: { type: String, required: true },
  firstname: { type: String, required: true },
  image: { type: String },
  role: { type: String, enum: ["Driver", "Navigator"] },
});

module.exports = mongoose.model("Member", memberSchema);

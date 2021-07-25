const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "Member" }],
  description: { type: String },
  type: { enum: ["Social", "Health", "Sales", "Sports", "Culture", "Other"] },
  frontEnd: [String],
  backEnd: [String],
  link: { type: String },
  avatar: ["https://api.multiavatar.com/Starcrasher.png"],
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;

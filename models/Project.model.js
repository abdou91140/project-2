const { Schema, model } = require("mongoose");
const menberSchema = require("Member.model.js");
const projectSchema = new Schema({
  members: [menberSchema],
  description: { type: String },
  type: { enum: ["Social", "Health", "Sales", "Sports", "Culture", "Other"] },
  technologies: { type: String },
  link: { type: String },
  avatar: ["https://api.multiavatar.com/Starcrasher.png"],
});

const Project = model("Project", projectSchema);

module.exports = Project;

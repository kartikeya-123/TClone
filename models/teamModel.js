//Imports
const mongoose = require("mongoose");
const validator = require("validator");
const User = require("./userModel");

//Team Schema
const teamSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: [true, "A team should have a name"],
    },
    Owner: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Team must have a owner"],
    },
    Members: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    Description: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    privacy: {
      type: Boolean,
      default: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

teamSchema.index({ name: "text", email: "text" });

const Team = mongoose.model("Team", teamSchema);
module.exports = Team;

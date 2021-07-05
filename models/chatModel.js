const mongoose = require("mongoose");

const chatMessageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  userName: {
    type: String,
    required: true,
  },
  userImage: {
    type: String,
    required: true,
  },
  teamId: {
    type: mongoose.Schema.ObjectId,
    ref: "Team",
    // required: [true, "Chat Message must have a team"],
  },
  roomId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Chat = mongoose.model("Chat", chatMessageSchema);
module.exports = Chat;

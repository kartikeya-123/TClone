const mongoose = require("mongoose");

const teamMeetingSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: [true, "A team meeting should have a room Id"],
  },
  teamId: {
    type: mongoose.Schema.ObjectId,
    ref: "Team",
    required: [true, "Meeting must have a team"],
  },
  startedBy: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  endedAt: {
    type: Date,
  },
  chatMessages: [
    {
      userName: {
        type: String,
        required: true,
      },
      userImage: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});

const TeamMeeting = mongoose.model("TeamMeeting", teamMeetingSchema);
module.exports = TeamMeeting;

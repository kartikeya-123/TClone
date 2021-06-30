const User = require("./../models/userModel");
const Team = require("./../models/teamModel");
const Chat = require("./../models/chatModel");

const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const ObjectId = require("mongoose").Types.ObjectId;
//Get My teams as member
exports.getMyTeamsAsMember = catchAsync(async (req, res, next) => {
  const userId = req.user.id;
  if (!userId) {
    return next(new AppError("The id of the user is not present", 404));
  }

  const myTeams = await Team.find({ Members: userId }).populate({
    path: "Owner",
    ref: "User",
    select: "name email image",
  });
  // console.log(myTeams);
  res.status(200).json({
    status: "Success",
    data: myTeams,
  });
});

//Get my teams as owner

exports.getMyTeamsAsOwner = catchAsync(async (req, res, next) => {
  const userId = req.user.id;
  if (!userId) {
    return next(new AppError("The id of the user is not present", 404));
  }

  const myTeams = await Team.find({ Owner: userId }).populate({
    path: "Owner",
    ref: "User",
    select: "name email image",
  });

  res.status(200).json({
    status: "Success",
    data: myTeams,
  });
});

//Create a new Team
exports.createTeam = catchAsync(async (req, res, next) => {
  const teamData = req.body;

  const requiredData = ["Name", "Description"];
  let dataMissed = [];

  for (let required of requiredData) {
    if (!teamData[required]) {
      dataMissed.push(required);
    }
  }

  if (dataMissed.length > 0) {
    res.status(404).json({
      status: "Failed",
      requiredData: dataMissed,
    });
    next();
  } else {
    let memberIds;
    teamData.Owner = req.user.id;

    const newTeam = await Team.create(teamData).populate({
      path: "Owner",
      ref: "User",
      select: "name image",
    });

    if (!newTeam) {
      return next(new AppError("Some error happened", 403));
    }

    await User.findOneAndUpdate(req.user.id, {
      $push: { teamsOwned: newTeam._id },
    });

    res.status(200).json({
      status: "Success",
      data: newTeam,
    });
  }
});

exports.getTeam = catchAsync(async (req, res, next) => {
  if (!req.params.teamId) {
    return next(new AppError("Team Id is not present", 404));
  }
  const team = await Team.findById(req.params.teamId).populate({
    path: "Owner",
    ref: "User",
    select: "name email image",
  });

  if (!team) {
    return next(new AppError("Internal server error", 403));
  }

  res.status(200).json({
    status: "success",
    data: team,
  });
});

// Add members to a team
exports.addMembersToTeam = catchAsync(async (req, res, next) => {
  if (!req.params.teamId) {
    return next(new AppError("Team Id is not present", 404));
  }

  const team = await Team.findById(req.params.teamId);

  if (!team) {
    return next(new AppError("Internal server error", 403));
  }

  // Things to consider
  // If team is private only team owner can add
  // If team is public members of the team can add

  if (team.privacy) {
    //Team is private
    // Only team owner can add

    if (team.Owner != req.user.id) {
      return next(
        new AppError("Sorry you are not granted this permission", 404)
      );
    }
  } else {
    //Team is public
    //Group members can add another members
    if (!team.Members.includes(req.user._id) && team.Owner != req.user.id) {
      return next(
        new AppError("Sorry you are not granted this permission", 404)
      );
    }
  }

  const memberIds = req.body;
  console.log(req.body);
  if (memberIds.length === 0) {
    return next(new AppError("Atleast one member should be present", 404));
  }
  let notification = {
    messsage: `Added into a new team ${team.Name} by ${req.user.name}`,
    notificationType: "New Team",
    teamId: team.id,
  };
  await User.updateMany(
    { _id: { $in: memberIds } },
    {
      $push: { teamsEnrolled: team.id, notifications: notification },
      notificationsSeen: false,
    }
  );

  for (let member of memberIds) {
    if (!team.Members.includes(member)) team.Members.push(member);
  }

  await team.save({ runValidators: true, new: true });

  res.status(200).json({
    status: "success",
    data: team,
  });
});

exports.startTeamCall = async (data) => {
  try {
    const { teamId, roomId } = data;
    const team = await Team.findById(teamId);
    if (!team) {
      return new AppError("No team found", 404);
    }

    if (team.callActive) {
      return new AppError("Team is already in call", 404);
    }
    team.callActive = true;
    team.roomId = roomId;
    await team.save({ runValidators: true });
  } catch (err) {
    return err;
  }
};

exports.sendMessage = catchAsync(async (chatMessage) => {
  const newMessage = await Chat.create(chatMessage);

  if (!newMessage) {
    return new AppError("All required fields are not present", 404);
  }
});

exports.getAllChatMessagesByTeam = catchAsync(async (req, res, next) => {
  const teamId = req.params.teamId;
  if (!teamId) return next(new AppError("No team ID provided!", 400));

  const team = await Team.findById(teamId);
  if (!team.Members.includes(req.user._id) && !team.Owner === req.user._id) {
    return next(new AppError("You are not allowed to view this team!", 401));
  }

  const chatMessages = await Chat.find({ teamId: teamId });

  res.status(200).json({
    status: "success",
    data: { results: chatMessages.length, chatMessages },
  });
});

exports.meetingNotification = async ({ teamId, teamName, owner, ownerId }) => {
  if (!teamId) {
    return new AppError("Team Id is not mentioned", 404);
  }
  console.log(teamId);
  const notification = {
    message: `A new meeting started in ${teamName} by ${owner}`,
    notificationType: "New Meeting",
    teamId: teamId,
  };
  console.log(ownerId);
  await User.updateMany(
    {
      _id: { $ne: ownerId },
      $or: [
        { teamsEnrolled: ObjectId(teamId) },
        { teamsOwned: ObjectId(teamId) },
      ],
    },
    { $push: { notifications: notification }, notificationsSeen: false }
  );

  const users = await User.find({
    _id: { $ne: ownerId },
    $or: [
      { teamsEnrolled: ObjectId(teamId) },
      { teamsOwned: ObjectId(teamId) },
    ],
  }).select("email");
  console.log(users);
  return users;
};

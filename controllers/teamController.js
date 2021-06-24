const User = require("./../models/userModel");
const Team = require("./../models/teamModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

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
    if (req.body.members) {
      memberIds = await User.find({ email: { $in: req.body.members } }).select(
        "_id"
      );
      memberIds = memberIds.map((user) => user._id);
      teamData.Members = memberIds;
    }
    teamData.Owner = req.user.id;

    const newTeam = await Team.create(teamData).populate({
      path: "Owner",
      ref: "User",
      select: "name image",
    });

    if (!newTeam) {
      return next(new AppError("Some error happened", 403));
    }

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
    if (team.Owner !== req.user.id) {
      return next(
        new AppError("Sorry you are not granted this permission", 404)
      );
    }
  } else {
    //Team is public
    //Group members can add another members
    if (!team.Members.includes(req.user.id)) {
      return next(
        new AppError("Sorry you are not granted this permission", 404)
      );
    }
  }

  const { memberIds } = req.body;

  if (memberIds.length === 0) {
    return next(new AppError("Atleast one member should be present", 404));
  }

  for (let member of memberIds) {
    if (!team.Members.includes(member)) team.Members.push(member);
  }

  await team.save({ runValidators: true, new: true });

  res.status(200).json({
    status: "success",
    data: team,
  });
});

const User = require("./../models/userModel");
const Team = require("./../models/teamModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const { sendEmail } = require("../utils/sendEmail");

exports.aboutMe = catchAsync(async (req, res, next) => {
  if (!req.user) {
    return next(new AppError("This user is not present", 401));
  }
  res.status(200).json({
    status: "suceess",
    data: {
      user: req.user,
    },
  });
});

// exports.getNotifications = catchAsync(async (req, res, next) => {
//   if (!req.user) {
//     return next(new AppError("This user is not present", 401));
//   }
//   req.user.notificationsSeen = true;
//   await req.user.save();
//   res.status(200).json({
//     status: "suceess",
//     data: {
//       notifications: req.user.notifications,
//     },
//   });
// });

exports.getProfile = catchAsync(async (req, res, next) => {
  let user = await User.findOne({ _id: req.query.id })
    .populate({
      path: "teamsEnrolled",
      model: "Team",
    })
    .lean();

  if (!user) {
    return next(new AppError("This user is not present", 400));
  }
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

exports.updateProfile = catchAsync(async (req, res, next) => {
  if (req.body.email || req.body.name) {
    return next(
      new AppError("Sorry you are not allowed to change name and email", 401)
    );
  }

  const updateUser = await User.findByIdAndUpdate(req.user._id, req.body, {
    new: true,
    runValidators: true,
  }).populate({
    path: "teamsEnrolled",
    model: "Team",
  });

  res.status(200).json({
    status: "success",
    data: {
      user: updateUser,
    },
  });
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
  let roles = ["user"];

  const docs = await User.find({ role: { $in: roles } })
    .select("name email image ")
    .sort({ name: 1 })
    .lean();

  res.status(200).json({
    status: "success",
    results: docs.length,
    data: {
      docs,
    },
  });
});

exports.seenNotifications = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.user._id, {
    notificationsSeen: true,
  });
  res.status(200).json({
    status: "success",
    notifications: user.notifications,
  });
});

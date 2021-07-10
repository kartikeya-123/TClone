const express = require("express");
const authController = require("../controllers/authController");
const teamController = require("../controllers/teamController");
const fileController = require("../controllers/fileController");
const router = express.Router();

router.use(authController.verifyJwtToken, authController.loggedInUser);

router.get("/memberTeams", teamController.getMyTeamsAsMember);
router.get("/ownerTeams", teamController.getMyTeamsAsOwner);
router.get("/chat-room/:teamId", teamController.getAllChatMessagesByTeam);
router.get("/getTeam/:teamId", teamController.getTeam);
router.get("/files/:teamId", teamController.getAllFiles);
router.get("/file/open/:filename", fileController.getFile);

router.post("/createTeam", teamController.createTeam);
router.post("/addMember/:teamId", teamController.addMembersToTeam);
router.post(
  "/submitFile/:teamId",
  fileController.uploadFile,
  teamController.submitFile
);

router.patch("/leaveTeam/:teamId", teamController.leaveTeam);
router.patch("/deleteTeam/:teamId", teamController.deleteTeam);
module.exports = router;

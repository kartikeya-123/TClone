const express = require("express");
const authController = require("../controllers/authController");
const teamController = require("../controllers/teamController");
const router = express.Router();

router.use(authController.verifyJwtToken, authController.loggedInUser);

router.get("/memberTeams", teamController.getMyTeamsAsMember);

router.get("/ownerTeams", teamController.getMyTeamsAsOwner);

router.get("/getTeam/:teamId", teamController.getTeam);
router.post("/createTeam", teamController.createTeam);
router.post("/addMember/:teamId", teamController.addMembersToTeam);

module.exports = router;

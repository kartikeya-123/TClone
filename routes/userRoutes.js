const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const router = express.Router();

router.use(authController.verifyJwtToken, authController.loggedInUser);

router.get("/", userController.getAllUsers);

router.get("/profile", userController.aboutMe);

//Other's profile
router.get("/other", userController.getProfile);

router.get("/otherUsers/:teamId", userController.getOutsideUsers);
router.patch("/profile", userController.updateProfile);

router.get("/notifications", userController.getNotifications);

module.exports = router;

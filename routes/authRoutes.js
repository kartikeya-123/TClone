const express = require("express");
const authController = require("./../controllers/authController");
const router = express.Router();

router.get("/status", authController.getLoginStatus);
router.post("/login", authController.googleLogin);
router.post("/testLogin", authController.testLogin);
router.post("/logout", authController.logout);

module.exports = router;

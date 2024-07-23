const express = require("express");

const router = express.Router();

const vansController = require("../../controllers/vanActions");
const hostsController = require("../../controllers/hostActions");
const authController = require("../../controllers/authActions");
const { getHostByEmail, verifyToken } = require("../../services/auth");

router.post("/login", getHostByEmail, authController.login);
router.get("/verify-auth", verifyToken, authController.loginSuccess);
router.get("/logout", verifyToken, authController.logout);
router.get("/vans", vansController.browse);
router.get("/vans/:id", vansController.read);
router.get("/host/vans", verifyToken, hostsController.browseVans);
router.get("/auth/verify", verifyToken, ({ res }) => res.sendStatus(200));

module.exports = router;

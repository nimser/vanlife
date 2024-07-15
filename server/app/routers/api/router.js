const express = require("express");

const router = express.Router();

const vansController = require("../../controllers/vanActions");
const hostsController = require("../../controllers/hostActions");
const authController = require("../../controllers/authActions");
const { verifyHost, verifyToken } = require("../../services/auth");

router.post("/login", verifyHost, authController.login);
router.get("/vans", vansController.browse);
router.get("/vans/:id", vansController.read);
router.get("/host/vans", verifyToken, hostsController.browseVans);
router.get("/hosts/:host_id/vans/:van_id", hostsController.readVan);

module.exports = router;

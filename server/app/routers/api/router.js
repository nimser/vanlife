const express = require("express");

const router = express.Router();

const vansController = require("../../controllers/vanActions");
const hostsController = require("../../controllers/hostActions");

router.get("/vans", vansController.browse);
router.get("/vans/:id", vansController.read);
router.get("/hosts/:host_id/vans", hostsController.browseVans);
router.get("/hosts/:host_id/vans/:van_id", hostsController.readVan);

module.exports = router;

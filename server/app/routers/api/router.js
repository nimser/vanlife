const express = require("express");

const router = express.Router();

const vansController = require("../../controllers/vanActions");

router.get("/vans", vansController.browse);

module.exports = router;

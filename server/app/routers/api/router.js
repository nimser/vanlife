const express = require("express");

const router = express.Router();

const vansController = require("../../controllers/vanActions");

router.get("/vans", vansController.browse);
router.get("/vans/:id", vansController.read);

module.exports = router;

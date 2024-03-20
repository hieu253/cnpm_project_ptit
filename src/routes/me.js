var express = require("express");
var router = express.Router();
var meController = require("../app/controllers/MeController");

router.get("/stored/cats", meController.storedCats);

module.exports = router;

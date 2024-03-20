var express = require("express");
var router = express.Router();
var catController = require("../app/controllers/CatController");

router.get("/create", catController.create);
router.post("/store", catController.store);
router.get("/:id/edit", catController.edit);
router.put("/:id/", catController.update);
router.delete("/:id/", catController.delete);
router.get("/:slug", catController.show);
module.exports = router;

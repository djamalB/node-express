const express = require("express");
const router = express.Router();
const brandsController = require("../controllers/brandsController");

router.get("/", brandsController.getBrands);

router.post("/", brandsController.createBrand);

router.delete("/", brandsController.deleteBrands);

module.exports = router;

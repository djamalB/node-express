const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");


router.get("/", productsController.getProducts);


router.get("/:id", productsController.getProductById);

router.post("/", productsController.createProduct);

router.delete("/:id", productsController.deleteProductById);

module.exports = router;
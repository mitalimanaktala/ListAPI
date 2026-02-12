import express from "express";
import {listProductsController ,createProductController, searchProductsController} from "../controller/product.controller.js";

const router = express.Router();

router.get("/", listProductsController);
router.post("/", createProductController);
router.get("/search", searchProductsController);

export default router;
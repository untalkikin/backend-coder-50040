import { Router } from "express";
import CartManager from "../CartManager.js";

const cartManager = new CartManager("carrito.json")
const router = Router();

//Rutas

router.post("/", (req, res) => {});
router.get("/:cid", (req, res) => {});
router.get("/:cid/product/:pid", (res, req) => {})

export default router;
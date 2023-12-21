import express from 'express';
import { addCart, getCart, removeCart } from '../controllers/CartController.js';


const router = express.Router();
router.get("/",getCart);
router.post("/",addCart);
router.delete("/:id",removeCart);

export default router;
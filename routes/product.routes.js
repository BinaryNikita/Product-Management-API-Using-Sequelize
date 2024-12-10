import express from "express";
import {viewProduct, addProduct, deleteProduct,  updateProductAction} from "../controller/product.controller.js";
import { isLoggedIn } from "../middleware/auth.js";
const router = express.Router();


router.get('/view-product', viewProduct);
router.post('/add-product', addProduct);
router.delete('/:p_id', deleteProduct);
router.put('/:p_id', updateProductAction);

export default router;
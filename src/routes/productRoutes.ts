import { Router } from 'express';
import { addProduct, listProducts } from '../controllers/ProductController';

const router = Router();

router.post('/products', addProduct);
router.get('/products', listProducts)

export default router;
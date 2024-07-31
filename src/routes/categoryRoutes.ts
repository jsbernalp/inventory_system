import { Router } from 'express';
import { addCategory, deleteCategoryHandler, listCategories, updateCategoryHandler } from '../controllers/categoryController';

const router = Router();

router.post('/categories', addCategory);
router.get('/categories', listCategories);
router.put('/categories/:id', updateCategoryHandler);
router.delete('/categories/:id', deleteCategoryHandler);

export default router;

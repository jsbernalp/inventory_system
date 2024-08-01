
import { Request, Response } from 'express';
import { getCategoryById } from '../services/categoryService';
import { createProduct, getAllProducts } from '../services/productService';

export const addProduct = async (req: Request, res: Response) => {
    try {
        const { name, price, categoryId } = req.body;
        const category = await getCategoryById(categoryId)
        const product = await createProduct({ name, price, category });
        console.log('Response to client:', product);
        res.status(201).json(product);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ message: errorMessage });
    }
};

export const listProducts = async (req: Request, res: Response) => {
    try {
        const users = await getAllProducts();
        res.status(200).json(users);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ message: errorMessage });
    }
};


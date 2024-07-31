import { Request, Response } from 'express';
import { createCategory, deleteCategory, getAllCategories, updateCategory } from '../services/categoryService';

export const addCategory = async (req: Request, res: Response) => {
    try {
        const user = await createCategory(req.body);
        console.log('Response to client:', user);
        res.status(201).json(user);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ message: errorMessage });
    }
};

export const listCategories = async (req: Request, res: Response) => {
    try {
        const users = await getAllCategories();
        res.status(200).json(users);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ message: errorMessage });
    }
};

export const updateCategoryHandler = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { categoryName } = req.body;

    try {
        const categoryId = parseInt(id, 10);
        const category = await updateCategory(categoryId, categoryName);
        res.status(200).json(category);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ message: errorMessage });
    }
};

export const deleteCategoryHandler = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const categoryId = parseInt(id, 10);
        const category = await deleteCategory(categoryId);
        res.status(200).json(category);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ message: errorMessage });
    }
};
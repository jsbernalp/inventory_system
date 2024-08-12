import { Category } from '../models/Category';
import dataSource from '../config/dataSource';
import { HttpError } from '../utils/HttpError';

const categoryRepository = dataSource.getRepository(Category);

export const createCategory = async (userData: Partial<Category>) => {
  try {
    const upperCaseName = userData.categoryName?.toUpperCase();
    const existingCategory = await categoryRepository.findOne({ where: { categoryName: upperCaseName } });

    if (existingCategory) {
      throw new HttpError(400, `La categoría "${upperCaseName}" ya existe.`);
    }

    const newCategory = categoryRepository.create({ categoryName: upperCaseName });
    await categoryRepository.save(newCategory);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Error creating category: ${errorMessage}`);
  }
};

export const getAllCategories = async () => {
  try {
    return await categoryRepository.find();
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Error retrieving categories: ${errorMessage}`);
  }
};

export const updateCategory = async (id: number, name: string) => {
  const categoryRepository = dataSource.getRepository(Category);

  try {
    const category = await categoryRepository.findOneBy({ id });
    if (!category) {
      throw new Error(`Category with id ${id} not found`);
    }

    category.categoryName = name;
    await categoryRepository.save(category);
    return category;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Error creating category: ${errorMessage}`);
  }
};


export const deleteCategory = async (id: number) => {
  const categoryRepository = dataSource.getRepository(Category);

  try {
    const result = await categoryRepository.delete(id);
    if (result.affected === 0) {
      throw new Error(`Category with id ${id} not found`);
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Error deleting category: ${errorMessage}`);
  }
};

export const getCategoryById = async (id: number) => {
  const categoryRepository = dataSource.getRepository(Category);

  try {
    const category = await categoryRepository.findOneBy({ id });
    if (!category) {
      throw new Error(`Category with id ${id} not found`);
    }
    return category
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Error getting the category: ${errorMessage}`);
  }
} 

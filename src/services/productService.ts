import { Product } from '../models/Product';
import dataSource from '../config/dataSource';

const productRepository = dataSource.getRepository(Product);

export const createProduct = async (product: Partial<Product>) => {
  try {
    const newProduct = productRepository.create(product);
    return await productRepository.save(newProduct);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Error creating Product: ${errorMessage}`);
  }
};

export const getAllProducts = async () => {
  try {
    return await productRepository.find({
      relations: ['category']
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Error getting all products: ${errorMessage}`);
  }
};
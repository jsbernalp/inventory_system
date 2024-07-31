import { User } from '../models/User';
import dataSource from '../config/dataSource';

const userRepository = dataSource.getRepository(User);

export const createUser = async (userData: Partial<User>) => {
  try {
    const user = userRepository.create(userData);
    return await userRepository.save(user);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Error creating user: ${errorMessage}`);
  }
};

export const getAllUsers = async () => {
  try {
    return await userRepository.find();
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Error retrieving users: ${errorMessage}`);
  }
};

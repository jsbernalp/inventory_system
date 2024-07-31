import { Request, Response } from 'express';
import { createUser, getAllUsers } from '../services/userService';

export const addUser = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    console.log('Response to client:', user);
    res.status(201).json(user);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ message: errorMessage });
  }
};

export const listUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ message: errorMessage });
  }
};

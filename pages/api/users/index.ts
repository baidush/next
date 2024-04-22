// src/pages/api/users/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { UserRepository } from '../../../src/repositories/UserRepository';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const userRepository = new UserRepository();

    try {
        if (req.method === 'GET') {
            const users = await userRepository.findAllUsers();
            res.status(200).json(users);
        } else if (req.method === 'POST') {
            const { name, email } = req.body;
            const newUser = await userRepository.createUser(name, email);
            res.status(201).json(newUser);
        } else {
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

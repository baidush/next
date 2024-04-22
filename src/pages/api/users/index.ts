import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import redis from '../../../lib/redis';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const cachedUsers = await redis.get('users');
    if (cachedUsers) return res.status(200).json(JSON.parse(cachedUsers));

    const users = await prisma.user.findMany();
    await redis.set('users', JSON.stringify(users), 'EX', 3600); // Cache for 1 hour
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const { name, email } = req.body;
    const newUser = await prisma.user.create({
      data: { name, email },
    });
    await redis.del('users'); // Invalidate cache
    res.status(201).json(newUser);
  }
}

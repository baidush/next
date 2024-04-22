// src/repositories/UserRepository.ts
import { PrismaClient } from '@prisma/client';
import redis from '../lib/redis';

export class UserRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async findAllUsers(): Promise<any[]> {
        const cachedUsers = await redis.get('users');
        if (cachedUsers) {
            return JSON.parse(cachedUsers);
        }

        const users = await this.prisma.user.findMany();
        await redis.set('users', JSON.stringify(users), 'EX', 3600); // Cache for 1 hour
        return users;
    }

    async createUser(name: string, email: string): Promise<any> {
        const newUser = await this.prisma.user.create({
            data: { name, email },
        });
        await redis.del('users'); // Invalidate cache
        return newUser;
    }
}

import Redis, { RedisOptions } from 'ioredis';
require('dotenv').config(); // This loads the .env file at the application startup


const redisOptions: RedisOptions = {
    host: process.env.REDIS_URL,
};

const redis = new Redis("redis://localhost:6379");  // Correct format
export default redis;

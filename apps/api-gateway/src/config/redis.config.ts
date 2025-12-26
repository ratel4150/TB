import { ClientOptions, Transport } from '@nestjs/microservices';

export const redisClientOptions: ClientOptions = {
  transport: Transport.REDIS,
  options: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
  },
};

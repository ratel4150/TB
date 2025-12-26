"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisClientOptions = void 0;
const microservices_1 = require("@nestjs/microservices");
exports.redisClientOptions = {
    transport: microservices_1.Transport.REDIS,
    options: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6379', 10),
    },
};
//# sourceMappingURL=redis.config.js.map
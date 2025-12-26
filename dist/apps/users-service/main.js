"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const logger = new common_1.Logger('Bootstrap');
    try {
        const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
            transport: microservices_1.Transport.REDIS,
            options: {
                host: process.env.REDIS_HOST || 'localhost',
                port: parseInt(process.env.REDIS_PORT || '6379', 10),
            },
            logger,
        });
        await app.listen();
        logger.log('✅ Users Service (Redis) listening');
    }
    catch (error) {
        if (error instanceof Error) {
            logger.error(`❌ Failed to start Users Service: ${error.message}`, error.stack);
        }
        else {
            logger.error('❌ Failed to start Users Service with unknown error', String(error));
        }
        process.exit(1);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map
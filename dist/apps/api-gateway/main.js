"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: process.env.NODE_ENV === 'production'
            ? ['error', 'warn', 'log']
            : ['error', 'warn', 'log', 'debug', 'verbose'],
        bufferLogs: true,
    });
    app.enableCors({
        origin: 'http://localhost:3000',
        credentials: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type, Authorization',
    });
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    const port = process.env.GATEWAY_PORT || 4000;
    await app.listen(port);
    const logger = new common_1.Logger('NestApplication');
    logger.log(`🚀 Gateway GraphQL listo en http://localhost:${port}/graphql`);
}
bootstrap();
//# sourceMappingURL=main.js.map
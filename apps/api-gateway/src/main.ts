import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger:
      process.env.NODE_ENV === 'production'
        ? ['error', 'warn', 'log']
        : ['error', 'warn', 'log', 'debug', 'verbose'],
    bufferLogs: true,
  });

  // Habilitar CORS ANTES de iniciar el servidor
  app.enableCors({
    origin: 'http://localhost:3000', // tu frontend
    credentials: true,               // si necesitas enviar cookies/tokens
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const port = process.env.GATEWAY_PORT || 4000;
  await app.listen(port);

  const logger = new Logger('NestApplication');
  logger.log(`🚀 Gateway GraphQL listo en http://localhost:${port}/graphql`);
}
bootstrap();

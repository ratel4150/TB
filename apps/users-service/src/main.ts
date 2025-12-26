import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap(): Promise<void> {
  // Crear logger con contexto
  const logger = new Logger('Bootstrap');

  try {
    // Configurar microservicio con Redis
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      {
        transport: Transport.REDIS,
        options: {
          host: process.env.REDIS_HOST || 'localhost',
          port: parseInt(process.env.REDIS_PORT || '6379', 10),
        },
        logger, // Pasamos el logger al microservicio
      }
    );

    await app.listen();

    logger.log('✅ Users Service (Redis) listening');
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error(`❌ Failed to start Users Service: ${error.message}`, error.stack);
    } else {
      logger.error('❌ Failed to start Users Service with unknown error', String(error));
    }
    process.exit(1);
  }
}

bootstrap();

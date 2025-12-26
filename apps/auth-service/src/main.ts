import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  // 1. Primero crea el logger instance
  const logger = new Logger('Bootstrap');

  try {
    // 2. Configura el microservicio con el logger
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      {
        transport: Transport.REDIS,
        options: {
          host: process.env.REDIS_HOST || 'localhost',
          port: parseInt(process.env.REDIS_PORT || '6379', 10),
        },
        // 3. Pasa el logger directamente aquí
        logger: logger,
      }
    );

    // 4. NO uses app.useLogger() en microservicios - es diferente a las apps HTTP
    // En su lugar, el logger ya está configurado en el paso anterior

    await app.listen();
    
    logger.log('✅ Auth Service (Redis) listening');
    
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error(`❌ Failed to start Auth Service: ${error.message}`, error.stack);
    } else {
      logger.error('❌ Failed to start Auth Service with unknown error', String(error));
    }
    process.exit(1);
  }
}

bootstrap();
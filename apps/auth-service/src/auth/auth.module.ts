import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthController } from './auth.controller';

@Module({
  
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

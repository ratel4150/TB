import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ cmd: 'auth.login' })
  async login(@Payload() data: { email: string; password: string }) {
    return this.authService.login(data.email, data.password);
  }

  

  @MessagePattern({ cmd: 'auth.refresh' })
  async refresh(@Payload() data: { refreshToken: string }) {
    return this.authService.refreshToken(data.refreshToken);
  }

  @MessagePattern({ cmd: 'auth.logout' })
  async logout(@Payload() data: { refreshToken: string }) {
    return this.authService.logout(data.refreshToken);
  }

  @MessagePattern({ cmd: 'auth.userinfo' })
  async userInfo(@Payload() data: { accessToken: string }) {
    return this.authService.userInfo(data.accessToken);
  }

  @MessagePattern({ cmd: 'auth.me' })
  async me(@Payload() data: { accessToken: string }) {
    return this.authService.me(data.accessToken);
  }

   @MessagePattern({ cmd: 'auth.signup' })
  async signup(@Payload() data: { email: string; password: string; name: string }) {
    return this.authService.signup(data);
  }
}

import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Inject, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { LoginInput, AuthResponse, SignupInput, SignupResponse } from '../dto/auth.dto';
import { Public, Roles } from 'nest-keycloak-connect';

@Resolver()
export class AuthResolver {
   private readonly logger = new Logger(AuthResolver.name);
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientProxy,
  ) {}

  // 📌 Login
 @Mutation(() => AuthResponse)
@Public()
async login(@Args('input') input: LoginInput): Promise<AuthResponse> {
  this.logger.log(`Login attempt for user: ${input.email}`);
  
  try {
    const result = await firstValueFrom(
      this.authClient.send<AuthResponse>({ cmd: 'auth.login' }, input),
    );
    
    this.logger.log(`Login successful for user: ${input.email}`);
        this.logger.log(`${result}`);
    return result;
  } catch (error) {
    // Verificación de tipo segura
    if (error instanceof Error) {
      this.logger.error(`Login failed for user: ${input.email}`, error.stack);
      throw new Error(error.message); // O maneja el error como prefieras
    } else {
      this.logger.error(`Unknown error type during login for user: ${input.email}`, error);
      throw new Error('Unknown error occurred');
    }
  }
}


 // 📌 Signup - Nuevo método
@Mutation(() => SignupResponse)
@Public()
async signup(@Args('input') input: SignupInput): Promise<SignupResponse> {
  this.logger.debug(`Signup request: ${input}`);
  this.logger.debug(`Signup request: email=${input.email}, password=${input.password}, name=${input.name}`);

  this.logger.debug(`Signup request: ${JSON.stringify(input)}`);

  return await firstValueFrom(
    this.authClient.send<SignupResponse>({ cmd: 'auth.signup' }, input),
  );
}



  // 📌 Refresh Token
  @Mutation(() => AuthResponse)
    @Public()
  async refreshToken(@Args('refreshToken') refreshToken: string): Promise<AuthResponse> {
    return await firstValueFrom(
      this.authClient.send<AuthResponse>({ cmd: 'auth.refresh' }, { refreshToken }),
    );
  }

  // 📌 Logout
  @Mutation(() => Boolean)
  @Roles({ roles: ['user', 'admin'] }) // requiere estar logueado
  async logout(@Args('refreshToken') refreshToken: string): Promise<boolean> {
    return await firstValueFrom(
      this.authClient.send<boolean>({ cmd: 'auth.logout' }, { refreshToken }),
    );
  }
}

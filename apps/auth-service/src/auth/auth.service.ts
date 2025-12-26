import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { keycloakConfig } from '../common/keycloak.config';
import fetch from 'node-fetch';
import { ClientProxy, ClientProxyFactory, RpcException, Transport } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name); // <-- Añade el logger aquí
  private readonly tokenUrl = `${keycloakConfig.baseUrl}/realms/${keycloakConfig.realm}/protocol/openid-connect/token`;
  private readonly userInfoUrl = `${keycloakConfig.baseUrl}/realms/${keycloakConfig.realm}/protocol/openid-connect/userinfo`;
  private readonly logoutUrl = `${keycloakConfig.baseUrl}/realms/${keycloakConfig.realm}/protocol/openid-connect/logout`;
    private readonly kcAdminUrl = `${keycloakConfig.baseUrl}/admin/realms/${keycloakConfig.realm}`;
  private usersClient: ClientProxy;

  constructor() {
    this.usersClient = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6379', 10),
      },
    });
    this.logger.log('AuthService initialized'); // <-- Log de inicialización
  }




  async signup(input:any) {
    const { email, password, name } = input;
 const sanitizedUsername = name
  .toLowerCase()
  .replace(/[^a-z0-9._-]/g, ''); // elimina todo excepto letras, números, ., _, -


this.logger.log(`Signup data: email=${email}, username=${sanitizedUsername}, password=${password}`);

    try {
      // 1. Crear usuario en Keycloak
      const kcRes = await fetch(`${this.kcAdminUrl}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await this.getAdminToken()}`,
        },
        body: JSON.stringify({
          username: sanitizedUsername,
          email,
          enabled: true,
          credentials: [{ type: 'password', value: password, temporary: false }],
        }),
      });
        this.logger.log(`este es kcRESs: ${JSON.stringify(kcRes, null, 2)}`);

      if (!kcRes.ok) {
        const errText = await kcRes.text();
        this.logger.error(`Keycloak signup error: ${errText}`);
        throw new RpcException('Failed to register in Keycloak');
      }

      this.logger.log(`User ${email} created in Keycloak`);

      // 2. Registrar usuario en UserService
      const user = await firstValueFrom(
        this.usersClient.send({ cmd: 'users.create' }, {  email, 
    username: name,   // Usa "name" como username
    password   }),
      );

      this.logger.log(`User ${email} created in UserService DB`);

      // 3. Retornar respuesta final
      return {
        success: true,
        message: 'User successfully registered',
        user:user,
      };
    } catch (err) {
  if (err instanceof Error) {
    this.logger.error(`Signup error: ${err.message}`, err.stack);
    throw new RpcException(err.message);  // importante
  } else {
    this.logger.error(`Unknown error: ${JSON.stringify(err)}`);
    throw new RpcException('Unknown signup error');
  }
}
  }

  private async getAdminToken(): Promise<string> {
  const params = new URLSearchParams();
  params.append('client_id', keycloakConfig.clientId); // ej: "admin-cli" o tu cliente confidencial
  params.append('client_secret', keycloakConfig.clientSecret);
  params.append('grant_type', 'client_credentials');

  const res = await fetch(
    `${keycloakConfig.baseUrl}/realms/${keycloakConfig.realm}/protocol/openid-connect/token`,
    { method: 'POST', body: params },
  );

  if (!res.ok) {
    const errorText = await res.text();
    this.logger.error(`Failed to get admin token: ${errorText}`);
    throw new UnauthorizedException('Cannot get admin token');
  }

  const data = await res.json();
  return data.access_token;
}

 async login(email: string, password: string) {
  this.logger.debug(`Attempting login for user: ${email}`); // Log de inicio

  const params = new URLSearchParams();
  params.append('client_id', keycloakConfig.clientId);
  params.append('client_secret', keycloakConfig.clientSecret);
  params.append('grant_type', 'password');
  params.append('username', email);
  params.append('password', password);

  try {
    const res = await fetch(this.tokenUrl, {
      method: 'POST',
      body: params,
    });

    if (!res.ok) {
      const errorText = await res.text(); // leer el error solo una vez
      this.logger.warn(
        `Failed login attempt for user: ${email}, response: ${errorText}`,
      );
      throw new UnauthorizedException('Invalid credentials');
    }

    // leer el body una sola vez
    const data = await res.json();

    this.logger.log(`Successful login for user: ${email}`);
    this.logger.debug(`Keycloak token response: ${JSON.stringify(data)}`);

    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresIn: data.expires_in,
      refreshExpiresIn: data.refresh_expires_in,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      this.logger.error(
        `Login error for user ${email}: ${error.message}`,
        error.stack,
      );
    } else {
      this.logger.error(
        `Unknown login error for user ${email}`,
        String(error),
      );
    }
    throw error;
  }
}









  async refreshToken(refreshToken: string) {
    this.logger.debug('Attempting token refresh');
    
    const params = new URLSearchParams();
    params.append('client_id', keycloakConfig.clientId);
    params.append('client_secret', keycloakConfig.clientSecret);
    params.append('grant_type', 'refresh_token');
    params.append('refresh_token', refreshToken);

    try {
      const res = await fetch(this.tokenUrl, { method: 'POST', body: params });
      
      if (!res.ok) {
        this.logger.warn('Invalid refresh token attempt');
        throw new UnauthorizedException('Invalid refresh token');
      }

      this.logger.log('Token refreshed successfully');
      return res.json();
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.logger.error(`Refresh token error: ${error.message}`, error.stack);
      }
      throw error;
    }
  }

  async logout(refreshToken: string) {
    this.logger.debug(`Attempting logout for token: ${refreshToken.substring(0, 10)}...`); // Log parcial por seguridad
    
    const params = new URLSearchParams();
    params.append('client_id', keycloakConfig.clientId);
    params.append('client_secret', keycloakConfig.clientSecret);
    params.append('refresh_token', refreshToken);

    try {
      const res = await fetch(this.logoutUrl, { method: 'POST', body: params });
      
      if (!res.ok) {
        this.logger.warn('Failed logout attempt');
        throw new UnauthorizedException('Failed to logout');
      }

      this.logger.log('Logout successful');
      return { success: true };
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.logger.error(`Logout error: ${error.message}`, error.stack);
      }
      throw error;
    }
  }

  async userInfo(accessToken: string) {
    this.logger.debug('Fetching user info');
    
    try {
      const res = await fetch(this.userInfoUrl, {
        method: 'GET',
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (!res.ok) {
        this.logger.warn('Invalid access token for user info');
        throw new UnauthorizedException('Invalid access token');
      }

      return res.json();
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.logger.error(`User info error: ${error.message}`, error.stack);
      }
      throw error;
    }
  }

  async me(accessToken: string) {
    this.logger.debug('Fetching user profile');
    
    try {
      const kcUser = await this.userInfo(accessToken);

      const profile = await firstValueFrom(
        this.usersClient.send({ cmd: 'users.findOne' }, { id: kcUser.sub }),
      ).catch((error) => {
        this.logger.warn(`User profile not found for ID: ${kcUser.sub}`, error.stack);
        return null;
      });

      this.logger.log(`Retrieved profile for user: ${kcUser.sub}`);
      return { ...kcUser, profile };
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.logger.error(`Me endpoint error: ${error.message}`, error.stack);
      }
      throw error;
    }
  }
}
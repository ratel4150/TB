import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';
import { redisClientOptions } from './config/redis.config';
import { KeycloakConnectModule, ResourceGuard, RoleGuard, AuthGuard } from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';
import { UserResolver } from './graphql/resolvers/user.resolver';
import { IncomingMessage } from 'http';
import { AuthResolver } from './graphql/resolvers/auth.resolver';
import { MenuResolver } from './graphql/resolvers/menu.resolver';
import { ProductResolver } from './graphql/resolvers/product.resolver';
  
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      context: ({ req }: { req: IncomingMessage }) => ({ req }),
    }),
    ClientsModule.register([
      { name: 'USERS_SERVICE', ...redisClientOptions },
      { name: 'AUTH_SERVICE', ...redisClientOptions },
      { name: 'MENUS_SERVICE', ...redisClientOptions }, // 👈 añadimos el MENUS_SERVICE
       { name: 'PRODUCTS_SERVICE', ...redisClientOptions }, // 👈 AQUÍ SE AGREGA
    ]),
    KeycloakConnectModule.registerAsync({
      useFactory: () => ({
        authServerUrl: process.env.KEYCLOAK_AUTH_SERVER_URL!,
        realm: process.env.KEYCLOAK_REALM!,
        clientId: process.env.KEYCLOAK_CLIENT_ID!,
        secret: process.env.KEYCLOAK_CLIENT_SECRET!,
      }),
    }),
  ],
  providers: [
    UserResolver,  AuthResolver, MenuResolver,   ProductResolver, // 👈 AGREGADO
  /*   { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_GUARD, useClass: ResourceGuard },
    { provide: APP_GUARD, useClass: RoleGuard }, */
  ],
})
export class AppModule {}

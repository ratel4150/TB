"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const config_1 = require("@nestjs/config");
const microservices_1 = require("@nestjs/microservices");
const redis_config_1 = require("./config/redis.config");
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
const core_1 = require("@nestjs/core");
const user_resolver_1 = require("./graphql/resolvers/user.resolver");
const auth_resolver_1 = require("./graphql/resolvers/auth.resolver");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: true,
                playground: true,
                context: ({ req }) => ({ req }),
            }),
            microservices_1.ClientsModule.register([
                { name: 'USERS_SERVICE', ...redis_config_1.redisClientOptions },
                { name: 'AUTH_SERVICE', ...redis_config_1.redisClientOptions },
            ]),
            nest_keycloak_connect_1.KeycloakConnectModule.registerAsync({
                useFactory: () => ({
                    authServerUrl: process.env.KEYCLOAK_AUTH_SERVER_URL,
                    realm: process.env.KEYCLOAK_REALM,
                    clientId: process.env.KEYCLOAK_CLIENT_ID,
                    secret: process.env.KEYCLOAK_CLIENT_SECRET,
                }),
            }),
        ],
        providers: [
            user_resolver_1.UserResolver, auth_resolver_1.AuthResolver,
            { provide: core_1.APP_GUARD, useClass: nest_keycloak_connect_1.AuthGuard },
            { provide: core_1.APP_GUARD, useClass: nest_keycloak_connect_1.ResourceGuard },
            { provide: core_1.APP_GUARD, useClass: nest_keycloak_connect_1.RoleGuard },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
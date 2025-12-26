"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keycloakConfig = void 0;
exports.keycloakConfig = {
    realm: process.env.KEYCLOAK_REALM || 'demo-realm',
    clientId: process.env.KEYCLOAK_CLIENT_ID || 'nest-gateway',
    clientSecret: process.env.KEYCLOAK_CLIENT_SECRET || 'GdoJxiOhwtE1SVTYW5I8SkCU5QNVQpev',
    baseUrl: process.env.KEYCLOAK_BASE_URL || 'http://localhost:8080',
};
//# sourceMappingURL=keycloak.config.js.map
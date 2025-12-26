export const keycloakConfig = {
  realm: process.env.KEYCLOAK_REALM || 'demo-realm',
  clientId: process.env.KEYCLOAK_CLIENT_ID || 'nest-gateway',
  clientSecret: process.env.KEYCLOAK_CLIENT_SECRET || 'GdoJxiOhwtE1SVTYW5I8SkCU5QNVQpev',
  baseUrl: process.env.KEYCLOAK_BASE_URL || 'http://localhost:8080',
};
/* KEYCLOAK_REALM=demo-realm
KEYCLOAK_AUTH_SERVER_URL=http://localhost:8080
KEYCLOAK_CLIENT_ID=nest-gateway
KEYCLOAK_CLIENT_SECRET=GdoJxiOhwtE1SVTYW5I8SkCU5QNVQpev */
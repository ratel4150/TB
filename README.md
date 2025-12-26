# NestJS Microservices Starter: GraphQL + Keycloak + Redis + MongoDB

## Quickstart
1. Instala dependencias (desde la raíz): `npm install`
2. Levanta la infraestructura: `docker compose up -d`
3. Configura Keycloak en http://localhost:8080 (crea realm, cliente confidencial y copia el secret al `.env`)
4. Dev servers:
   - `npm run dev:users`
   - `npm run dev:auth`
   - `npm run dev:gateway` -> http://localhost:4000/graphql

## Notas
- El Auth Service es un placeholder para integrar flujos contra Keycloak (brokers, service account, etc.).
- El Users Service usa MongoDB + Mongoose y expone handlers Redis.
- El Gateway GraphQL consume los microservicios por Redis y protege con Keycloak (roles).
# TB

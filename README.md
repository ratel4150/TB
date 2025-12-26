<h1 align="center">NestJS Microservices Starter</h1>
<p align="center">
  <strong>GraphQL · Keycloak · Redis · MongoDB</strong>
</p>

<p align="center">
  Arquitectura base de microservicios con NestJS, enfocada en escalabilidad,
  seguridad y observabilidad, utilizando GraphQL como API Gateway y Keycloak
  como proveedor de identidad.
</p>

<hr/>

<h2>📑 Índice</h2>
<ul>
  <li><a href="#descripcion-general">Descripción General</a></li>
  <li><a href="#arquitectura">Arquitectura</a></li>
  <li><a href="#estructura-del-proyecto">Estructura del Proyecto</a></li>
  <li><a href="#stack-tecnologico">Stack Tecnológico</a></li>
  <li><a href="#flujo-del-sistema">Flujo del Sistema</a></li>
  <li><a href="#servicios">Servicios</a></li>
  <li><a href="#seguridad">Seguridad y Autorización</a></li>
  <li><a href="#observabilidad">Observabilidad</a></li>
  <li><a href="#escalabilidad">Escalabilidad</a></li>
  <li><a href="#quick-start">Quick Start</a></li>
  <li><a href="#buenas-practicas">Buenas Prácticas</a></li>
  <li><a href="#roadmap">Roadmap</a></li>
  <li><a href="#conclusiones">Conclusiones</a></li>
</ul>

<hr/>

<h2 id="descripcion-general">📌 Descripción General</h2>
<p>
Este proyecto implementa una arquitectura de microservicios desacoplada,
donde un <strong>API Gateway GraphQL</strong> centraliza el acceso a los servicios.
La autenticación y autorización se gestionan mediante <strong>Keycloak</strong>,
permitiendo control de acceso basado en roles (RBAC).
</p>

<hr/>

<h2 id="arquitectura">🏗️ Arquitectura</h2>

<pre>
Client
  │
  ▼
GraphQL API Gateway
  │
  ├── Redis Transport
  │     ├── Users Service ── MongoDB
  │     └── Auth Service  ── Keycloak
  │
  └── Keycloak (JWT / Roles)
</pre>

<p><strong>Principios:</strong></p>
<ul>
  <li>Separación de responsabilidades</li>
  <li>Bajo acoplamiento</li>
  <li>Seguridad centralizada</li>
  <li>Escalabilidad horizontal</li>
</ul>

<hr/>

<h2 id="estructura-del-proyecto">📂 Estructura del Proyecto</h2>

<pre>
nestjs-ms-keycloak-redis-gql-mongo/
├─ apps/
│  ├─ api-gateway/
│  ├─ users-service/
│  └─ auth-service/
│
├─ libs/
│  └─ common/
│
├─ docker-compose.yml
├─ .env.example
└─ README.md
</pre>

<hr/>

<h2 id="stack-tecnologico">⚙️ Stack Tecnológico</h2>

<table>
  <tr><th>Componente</th><th>Tecnología</th></tr>
  <tr><td>Backend</td><td>NestJS</td></tr>
  <tr><td>API Gateway</td><td>GraphQL (Apollo)</td></tr>
  <tr><td>Auth</td><td>Keycloak (OAuth2 / OIDC)</td></tr>
  <tr><td>Mensajería</td><td>Redis</td></tr>
  <tr><td>Base de Datos</td><td>MongoDB + Mongoose</td></tr>
  <tr><td>Logs</td><td>Winston + Elasticsearch</td></tr>
  <tr><td>Métricas</td><td>Prometheus + Grafana</td></tr>
</table>

<hr/>

<h2 id="flujo-del-sistema">🔄 Flujo del Sistema</h2>

<ol>
  <li>El cliente realiza una petición GraphQL</li>
  <li>El Gateway valida el JWT con Keycloak</li>
  <li>Se verifican roles y permisos</li>
  <li>La petición se envía por Redis</li>
  <li>El microservicio procesa la solicitud</li>
  <li>La respuesta vuelve al Gateway</li>
</ol>

<hr/>

<h2 id="servicios">📦 Servicios</h2>

<h3>🌐 API Gateway</h3>
<ul>
  <li>Punto único de entrada</li>
  <li>Esquema GraphQL centralizado</li>
  <li>Guards de seguridad</li>
  <li>Interceptores globales</li>
</ul>

<h3>👤 Users Service</h3>
<ul>
  <li>Gestión de usuarios</li>
  <li>Persistencia en MongoDB</li>
  <li>Cache con Redis</li>
</ul>

<h3>🔐 Auth Service</h3>
<ul>
  <li>Integración con Keycloak</li>
  <li>Validación de tokens</li>
  <li>Preparado para brokers y social login</li>
</ul>

<hr/>

<h2 id="seguridad">🔐 Seguridad y Autorización</h2>

<ul>
  <li>OAuth2 / OpenID Connect</li>
  <li>JWT emitidos por Keycloak</li>
  <li>Control de acceso por roles (RBAC)</li>
  <li>Guards personalizados en NestJS</li>
</ul>

<hr/>

<h2 id="observabilidad">📊 Observabilidad</h2>

<ul>
  <li>Logging estructurado con Winston</li>
  <li>Centralización en Elasticsearch</li>
  <li>Métricas expuestas a Prometheus</li>
  <li>Dashboards en Grafana</li>
</ul>

<hr/>

<h2 id="escalabilidad">📈 Escalabilidad</h2>

<ul>
  <li>Escalado independiente por servicio</li>
  <li>Nuevos microservicios sin afectar al Gateway</li>
  <li>Nuevos roles sin cambios de código</li>
  <li>Preparado para Kubernetes</li>
</ul>

<hr/>

<h2 id="quick-start">🚀 Quick Start</h2>

<pre>
npm install
docker compose up -d
npm run dev:users
npm run dev:auth
npm run dev:gateway
</pre>

<p>
GraphQL Playground:<br/>
<a href="http://localhost:4000/graphql">http://localhost:4000/graphql</a>
</p>

<hr/>

<h2 id="buenas-practicas">🧠 Buenas Prácticas</h2>

<ul>
  <li>Arquitectura modular</li>
  <li>Validación de DTOs</li>
  <li>Configuración por entorno</li>
  <li>Seguridad desde el diseño</li>
</ul>

<hr/>

<h2 id="roadmap">🛣️ Roadmap</h2>

<ul>
  <li>OpenTelemetry (Tracing)</li>
  <li>GraphQL Federation</li>
  <li>Rate limiting</li>
  <li>Kubernetes + Helm</li>
</ul>

<hr/>

<h2 id="conclusiones">🧾 Conclusiones</h2>

<p>
Este repositorio proporciona una base sólida y extensible para aplicaciones
backend modernas, combinando seguridad enterprise, escalabilidad real y
observabilidad desde el diseño.
</p>

<hr/>

<p align="center">
  <strong>MIT License</strong>
</p>


<h1 align="center">Enterprise Microservices Architecture</h1>
<h3 align="center">NestJS · GraphQL · Keycloak · Redis · MongoDB · Kubernetes</h3>

<p align="center">
Documento de arquitectura enterprise y whitepaper técnico que describe el diseño,
implementación y evolución de una plataforma backend basada en microservicios,
orientada a escalabilidad, seguridad y observabilidad.
</p>

<hr/>

<h2>📑 Índice General</h2>
<ol>
  <li>Resumen Ejecutivo (Abstract)</li>
  <li>Introducción</li>
  <li>Planteamiento del Problema</li>
  <li>Preguntas de Investigación</li>
  <li>Objetivos</li>
  <li>Hipótesis</li>
  <li>Marco Teórico</li>
  <li>Decisiones Arquitectónicas</li>
  <li>Arquitectura del Sistema</li>
  <li>Estructura del Proyecto</li>
  <li>Diagramas (UML / C4 / PlantUML)</li>
  <li>Metodología</li>
  <li>Métricas Experimentales</li>
  <li>Seguridad</li>
  <li>Observabilidad</li>
  <li>Despliegue en Kubernetes</li>
  <li>Plan de Pruebas</li>
  <li>Escalabilidad y Nuevos Servicios</li>
  <li>Limitaciones</li>
  <li>Conclusiones</li>
</ol>

<hr/>

<h2>1️⃣ Resumen Ejecutivo (Abstract)</h2>
<p>
Este documento presenta el diseño y la implementación de una arquitectura de
microservicios basada en NestJS, utilizando GraphQL como API Gateway, Keycloak
como proveedor de identidad, Redis como capa de mensajería y MongoDB como
sistema de persistencia distribuido.
</p>
<p>
El objetivo principal es demostrar cómo una arquitectura cloud-native,
desacoplada y orientada a dominios puede resolver problemas de escalabilidad,
seguridad y mantenibilidad presentes en sistemas monolíticos tradicionales.
</p>
<p>
La solución propuesta incorpora prácticas de observabilidad, control de acceso
basado en roles, cache distribuido y despliegue preparado para Kubernetes,
sirviendo como base para sistemas empresariales modernos.
</p>

<hr/>

<h2>2️⃣ Introducción</h2>
<p>
Las aplicaciones empresariales modernas requieren arquitecturas flexibles,
seguras y altamente escalables. El crecimiento de usuarios, la necesidad de
integraciones y la demanda de alta disponibilidad hacen inviable el uso de
arquitecturas monolíticas tradicionales.
</p>
<p>
Este proyecto propone una arquitectura de microservicios alineada con principios
cloud-native, separando responsabilidades y permitiendo la evolución independiente
de cada componente.
</p>

<hr/>

<h2>3️⃣ Planteamiento del Problema</h2>

<h4>Problema Central</h4>
<p>
¿Cómo diseñar una arquitectura backend que permita escalar funcionalidad,
usuarios y seguridad sin incrementar el acoplamiento ni la complejidad operativa?
</p>

<h4>Justificación</h4>
<p>
La adopción de microservicios reduce el riesgo técnico, mejora la resiliencia
y facilita el crecimiento organizacional y tecnológico.
</p>

<h4>Pertinencia</h4>
<p>
Relevante a nivel académico, profesional y empresarial, aplicable a sistemas
financieros, plataformas SaaS y soluciones cloud.
</p>

<h4>Delimitación</h4>
<p>
El estudio se centra en el backend, sin abordar interfaces frontend ni despliegues
productivos en nubes comerciales.
</p>

<hr/>

<h2>4️⃣ Preguntas de Investigación</h2>
<ul>
  <li>¿Cómo impacta GraphQL como Gateway en la escalabilidad?</li>
  <li>¿Qué ventajas aporta Keycloak frente a auth embebido?</li>
  <li>¿Cómo Redis mejora la comunicación entre servicios?</li>
</ul>

<hr/>

<h2>5️⃣ Objetivos</h2>

<h4>Objetivo General</h4>
<p>
Diseñar e implementar una arquitectura enterprise de microservicios segura,
escalable y observable.
</p>

<h4>Objetivos Específicos</h4>
<ul>
  <li>Implementar autenticación centralizada</li>
  <li>Desacoplar servicios por dominio</li>
  <li>Garantizar observabilidad y monitoreo</li>
</ul>

<hr/>

<h2>6️⃣ Hipótesis</h2>
<p>
El uso de una arquitectura basada en microservicios, combinada con GraphQL,
Keycloak y Redis, mejora significativamente la escalabilidad y mantenibilidad
del sistema frente a enfoques monolíticos.
</p>

<hr/>

<h2>7️⃣ Marco Teórico</h2>
<ul>
  <li>Arquitectura de Microservicios</li>
  <li>Domain-Driven Design (DDD)</li>
  <li>OAuth2 / OpenID Connect</li>
  <li>Event-driven Architecture</li>
  <li>Cloud-Native Computing</li>
</ul>

<hr/>

<h2>8️⃣ Decisiones Arquitectónicas</h2>
<table>
<tr><th>Decisión</th><th>Justificación</th></tr>
<tr><td>GraphQL</td><td>Reducir over-fetching y centralizar acceso</td></tr>
<tr><td>Keycloak</td><td>Auth enterprise y RBAC dinámico</td></tr>
<tr><td>Redis</td><td>Baja latencia y desacoplamiento</td></tr>
<tr><td>MongoDB</td><td>Flexibilidad y escalado horizontal</td></tr>
</table>

<hr/>

<h2>9️⃣ Arquitectura del Sistema</h2>
<pre>
Client
  │
GraphQL API Gateway
  │
Redis Transport Layer
  │
Users | Auth | Products | Payments
  │
MongoDB / External Services
</pre>

<hr/>

<h2>🔟 Estructura del Proyecto</h2>
<pre>
apps/
 ├ api-gateway
 ├ users-service
 ├ auth-service
 ├ products-service
 └ payments-service
libs/
 └ common
</pre>

<hr/>

<h2>1️⃣1️⃣ Diagramas UML / C4 / PlantUML</h2>

<h4>Ejemplo PlantUML</h4>
<pre>
@startuml
Client --> Gateway
Gateway --> UsersService
Gateway --> AuthService
@enduml
</pre>

<hr/>

<h2>1️⃣2️⃣ Metodología</h2>
<p>
Investigación aplicada con enfoque mixto, combinando diseño arquitectónico
y simulación experimental.
</p>

<hr/>

<h2>1️⃣3️⃣ Métricas Experimentales (Simuladas)</h2>
<table>
<tr><th>Métrica</th><th>Resultado</th></tr>
<tr><td>Latencia promedio</td><td>120ms</td></tr>
<tr><td>Throughput</td><td>3,000 req/min</td></tr>
<tr><td>Cache hit rate</td><td>85%</td></tr>
</table>

<hr/>

<h2>1️⃣4️⃣ Seguridad</h2>
<ul>
  <li>JWT firmados</li>
  <li>RBAC dinámico</li>
  <li>Guards en Gateway</li>
</ul>

<hr/>

<h2>1️⃣5️⃣ Observabilidad</h2>
<ul>
  <li>Winston + ELK</li>
  <li>Prometheus metrics</li>
  <li>Grafana dashboards</li>
</ul>

<hr/>

<h2>1️⃣6️⃣ Despliegue en Kubernetes</h2>
<pre>
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-gateway
spec:
  replicas: 3
</pre>

<hr/>

<h2>1️⃣7️⃣ Plan de Pruebas</h2>
<ul>
  <li>Unitarias</li>
  <li>Integración</li>
  <li>Contrato</li>
  <li>Carga</li>
</ul>

<hr/>

<h2>1️⃣8️⃣ Escalabilidad y Nuevos Servicios</h2>
<p>
El sistema permite agregar servicios como Payments, Notifications o Analytics
sin modificar el Gateway central.
</p>

<hr/>

<h2>1️⃣9️⃣ Limitaciones</h2>
<ul>
  <li>No incluye frontend</li>
  <li>Métricas simuladas</li>
</ul>

<hr/>

<h2>2️⃣0️⃣ Conclusiones</h2>
<p>
La arquitectura propuesta cumple con estándares enterprise modernos,
demostrando que NestJS es viable para sistemas distribuidos complejos,
seguros y escalables.
</p>

<hr/>

<p align="center"><strong>MIT License</strong></p>


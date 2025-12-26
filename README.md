<h1 align="center">Arquitectura de Microservicios con NestJS</h1>

<p align="center">
  <strong>GraphQL · Keycloak · Redis · MongoDB · Kubernetes</strong><br/>
  Documento Técnico · Arquitectónico · Académico
</p>

<p align="center">
  Este repositorio presenta una arquitectura backend moderna basada en microservicios,
  diseñada bajo principios de ingeniería de software, sistemas distribuidos y
  seguridad enterprise, aplicable tanto a contextos académicos como productivos.
</p>

<hr/>

<h2>📑 Índice General</h2>
<ul>
  <li><a href="#introduccion">Introducción</a></li>
  <li><a href="#planteamiento-problema">Planteamiento del Problema</a></li>
  <li><a href="#preguntas-investigacion">Preguntas de Investigación</a></li>
  <li><a href="#objetivos">Objetivos</a></li>
  <li><a href="#hipotesis">Hipótesis</a></li>
  <li><a href="#marco-teorico">Marco Teórico</a></li>
  <li><a href="#arquitectura">Arquitectura del Sistema</a></li>
  <li><a href="#estructura">Estructura del Proyecto</a></li>
  <li><a href="#uml">Diagramas UML</a></li>
  <li><a href="#c4">Diagramas C4</a></li>
  <li><a href="#plantuml">Diagramas PlantUML</a></li>
  <li><a href="#metodologia">Metodología</a></li>
  <li><a href="#metricas">Métricas Experimentales</a></li>
  <li><a href="#seguridad">Seguridad</a></li>
  <li><a href="#observabilidad">Observabilidad</a></li>
  <li><a href="#kubernetes">Despliegue en Kubernetes</a></li>
  <li><a href="#testing">Plan de Pruebas</a></li>
  <li><a href="#escalabilidad">Escalabilidad y Nuevos Servicios</a></li>
  <li><a href="#conclusiones">Conclusiones</a></li>
</ul>

<hr/>

<h2 id="introduccion">1. Introducción</h2>
<p>
La evolución de los sistemas de software ha impulsado la adopción de arquitecturas
distribuidas como respuesta a los problemas de escalabilidad, mantenibilidad y
seguridad presentes en sistemas monolíticos. Este proyecto propone una arquitectura
de microservicios utilizando NestJS, integrando GraphQL como API Gateway, Keycloak
como proveedor de identidad y Redis como mecanismo de comunicación eficiente.
</p>

<hr/>

<h2 id="planteamiento-problema">2. Planteamiento del Problema</h2>
<p>
Muchas aplicaciones backend carecen de una arquitectura sólida, lo que provoca
acoplamiento excesivo, dificultad para escalar, problemas de seguridad y baja
observabilidad. Estas limitaciones impactan negativamente en la evolución del sistema
y en su confiabilidad.
</p>

<p><strong>Justificación:</strong>  
Diseñar una arquitectura modular y escalable permite reducir riesgos técnicos
y mejorar la calidad del software.
</p>

<p><strong>Delimitación:</strong>  
El estudio se centra exclusivamente en la arquitectura backend.
</p>

<hr/>

<h2 id="preguntas-investigacion">3. Preguntas de Investigación</h2>
<ul>
  <li>¿Cómo diseñar una arquitectura backend escalable basada en microservicios?</li>
  <li>¿Qué beneficios ofrece GraphQL frente a REST?</li>
  <li>¿Cómo centralizar la seguridad con Keycloak?</li>
</ul>

<hr/>

<h2 id="objetivos">4. Objetivos</h2>

<h3>Objetivo General</h3>
<p>
Diseñar e implementar una arquitectura de microservicios segura, escalable y observable.
</p>

<h3>Objetivos Específicos</h3>
<ul>
  <li>Implementar un API Gateway GraphQL</li>
  <li>Integrar autenticación y autorización con Keycloak</li>
  <li>Desacoplar dominios en microservicios independientes</li>
</ul>

<hr/>

<h2 id="hipotesis">5. Hipótesis</h2>
<p>
La adopción de una arquitectura de microservicios con GraphQL y Keycloak
mejora significativamente la escalabilidad, seguridad y mantenibilidad del sistema.
</p>

<hr/>

<h2 id="marco-teorico">6. Marco Teórico</h2>
<ul>
  <li>Arquitectura de Microservicios</li>
  <li>Domain-Driven Design (DDD)</li>
  <li>Sistemas Distribuidos y Teorema CAP</li>
  <li>Seguridad Zero Trust</li>
</ul>

<hr/>

<h2 id="arquitectura">7. Arquitectura del Sistema</h2>

<pre>
Client
  |
GraphQL API Gateway
  |
Redis Transport
  |
Microservices (Users, Products, Menus, Payments)
  |
MongoDB
</pre>

<hr/>

<h2 id="estructura">8. Estructura del Proyecto</h2>

<pre>
apps/
 ├─ api-gateway
 ├─ users-service
 ├─ products-service
 ├─ menus-service
 ├─ payments-service
 └─ auth-service
libs/
 └─ common
</pre>

<hr/>

<h2 id="uml">9. Diagramas UML</h2>

<pre>
Client -> Gateway -> Redis -> Services -> Database
</pre>

<hr/>

<h2 id="c4">10. Diagramas C4</h2>

<pre>
[Client] -> [Gateway] -> [Microservices] -> [Infrastructure]
</pre>

<hr/>

<h2 id="plantuml">11. Diagramas PlantUML</h2>

<pre>
@startuml
Client --> Gateway
Gateway --> Redis
Redis --> PaymentsService
PaymentsService --> ExternalProvider
@enduml
</pre>

<hr/>

<h2 id="metodologia">12. Metodología</h2>
<p>
Investigación aplicada con enfoque mixto, basada en la construcción
y evaluación de un prototipo funcional.
</p>

<hr/>

<h2 id="metricas">13. Métricas Experimentales Simuladas</h2>

<table>
  <tr><th>Métrica</th><th>Resultado</th></tr>
  <tr><td>Latencia promedio</td><td>120 ms</td></tr>
  <tr><td>Throughput</td><td>950 req/s</td></tr>
  <tr><td>Error rate</td><td>&lt; 1%</td></tr>
</table>

<hr/>

<h2 id="seguridad">14. Seguridad</h2>
<ul>
  <li>OAuth2 / OpenID Connect</li>
  <li>JWT</li>
  <li>Control de acceso basado en roles</li>
</ul>

<hr/>

<h2 id="observabilidad">15. Observabilidad</h2>
<ul>
  <li>Logs centralizados</li>
  <li>Métricas Prometheus</li>
  <li>Dashboards Grafana</li>
</ul>

<hr/>

<h2 id="kubernetes">16. Despliegue en Kubernetes</h2>

<pre>
Ingress -> Gateway Pods -> Service Pods -> MongoDB / Redis
</pre>

<p>
Se utilizan Deployments, StatefulSets, HPA y Secrets para garantizar
alta disponibilidad y escalabilidad.
</p>

<hr/>

<h2 id="testing">17. Plan de Pruebas</h2>

<table>
  <tr><th>Tipo</th><th>Herramienta</th></tr>
  <tr><td>Unitarias</td><td>Jest</td></tr>
  <tr><td>Integración</td><td>Supertest</td></tr>
  <tr><td>Carga</td><td>K6</td></tr>
</table>

<hr/>

<h2 id="escalabilidad">18. Escalabilidad y Nuevos Servicios</h2>

<ul>
  <li>Payments Service</li>
  <li>Billing Service</li>
  <li>Notifications Service</li>
  <li>Audit Service</li>
</ul>

<p>
Cada servicio escala de forma independiente y mantiene su propia base de datos.
</p>

<hr/>

<h2 id="conclusiones">19. Conclusiones</h2>
<p>
La arquitectura propuesta demuestra ser una solución robusta, escalable y alineada
con las mejores prácticas modernas. Su diseño modular permite evolución continua,
integración de nuevos servicios y despliegue en entornos cloud-native,
constituyéndose como una base sólida tanto para proyectos académicos
como para sistemas empresariales.
</p>

<hr/>

<p align="center">
  <strong>MIT License · Arquitectura Profesional · Documento Final</strong>
</p>

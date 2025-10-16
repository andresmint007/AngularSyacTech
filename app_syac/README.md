# Angular Frontend - SYAC Pedidos

Este proyecto Angular utiliza **componentes standalone** y está configurado para consumir una API generada con ASP.NET Core utilizando arquitectura hexagonal.

## 📦 Generación automática de servicios con OpenAPI

Se utiliza `ng-openapi-gen` para generar automáticamente los servicios (clients) a partir de un archivo OpenAPI/Swagger (`api.json`).

### Comando utilizado:

```bash
npm install ng-openapi-gen --save-dev
npx ng-openapi-gen --input ./api.json --output src/app/apia

Se crea un angular con componetnes standalone, se usa el sigueitne comando para poder hacer un sacffold de los servicios gracias al npm install ng-openapi-gen --save-dev

npx ng-openapi-gen --input ./api.json --output src/app/apia


Adicionalmente en la ruta para acceder es : http://localhost:4200/pedidos y se configuro para que la URL base del api fuese: https://localhost:7102 / en el archivo ApiConfiguration que contiene
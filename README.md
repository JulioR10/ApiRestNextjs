# Proyecto de API REST con MongoDB, Express.js y Next.js
Este proyecto consiste en una API REST que utiliza MongoDB como base de datos, Express.js como servidor y Next.js como framework de frontend.

## Creación del proyecto
Para crear el proyecto se han seguido los siguientes pasos:

1. Crea una carpeta para el proyecto completo y entra en ella:
```
mkdir mi-proyecto
cd mi-proyecto
```
2. Crea dos carpetas, una para el frontend y otra para el backend:
```
mkdir front
mkdir back
```
3. Inicializa un proyecto Next.js en la carpeta front:
```
npx create-next-app front
```
4. Entra en la carpeta del backend y crea un archivo package.json con el siguiente contenido:
```
cd back
npm init -y
```
5. Instala las dependencias necesarias en el backend (Express):
```
npm install express
```
6. Crea un archivo index.js en la carpeta del backend con el siguiente contenido:
```
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hola desde el backend' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
```
7. En la raíz del proyecto, crea un archivo Dockerfile en la carpeta front con el siguiente contenido:
```
# front/Dockerfile
FROM node:alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

CMD ["npm", "start"]
```
8. Crea un archivo Dockerfile en la carpeta back con el siguiente contenido:
```
# back/Dockerfile
FROM node:alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . .

CMD ["node", "index.js"]
```
9. En la raíz del proyecto, crea un archivo docker-compose.yml y agrega el servicio de MongoDB a tu archivo docker-compose.yml:
```
version: "3.9"

services:
  frontend:
    build: ./front
    ports:
      - "3000:3000"
    depends_on:
      - backend

  backend:
    build: ./back
    ports:
      - "3001:3001"
    environment:
      - MONGO_URL=mongodb://mongo:27017/mydb
    depends_on:
      - mongo

  mongo:
    image: mongo
    container_name: mongo
    ports:
      - "27017:27017"
```
10. Desde la raíz del proyecto, ejecuta docker-compose up para construir y ejecutar los contenedores:
```
docker-compose up
```
11. Instala el paquete mongodb en tu proyecto de backend:
```
cd back
npm install mongodb
```
12. En tu archivo index.js en el backend, importa y conecta a la base de datos utilizando mongodb.MongoClient. 
Ahora, puedes utilizar la variable db para interactuar con tu base de datos MongoDB. Por ejemplo, puedes crear un nuevo endpoint para guardar datos en la base de datos. Con estos cambios, tu proyecto utilizará MongoDB como base de datos, y podrás realizar operaciones CRUD utilizando el paquete mongodb en tu aplicación backend.

13. Para conectar el front con axios, primero debemos instalar la librería axios en nuestro proyecto de front. Podemos hacerlo a través de npm con el siguiente comando:
```
npm install axios
```
14. Debes crear la carpeta api dentro de la carpeta pages de tu proyecto Next.js. Luego, dentro de la carpeta api, debes crear un archivo con el nombre de la ruta que quieres crear, en este caso items.js. En ese archivo items.js debes definir las rutas y las funciones correspondientes para manejar las solicitudes HTTP GET, POST, PUT y DELETE. Puedes usar la librería axios para realizar las solicitudes HTTP desde el frontend. 

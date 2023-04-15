#Proyecto de API REST con MongoDB, Express.js y Next.js
Este proyecto consiste en una API REST que utiliza MongoDB como base de datos, Express.js como servidor y Next.js como framework de frontend.

##Creación del proyecto
Para crear el proyecto se han seguido los siguientes pasos:

1. Inicializar el proyecto con ```npm init -y.```

2. Instalar las dependencias necesarias:
```npm install express mongodb axios```
express se usará para crear el backend, mongodb para conectarnos a la base de datos y axios para hacer peticiones HTTP desde el frontend.

3. Crear una carpeta llamada back para el backend y otra llamada front para el frontend.

Dentro de la carpeta back, crear un archivo index.js que contenga el código del servidor Express y se conecte a la base de datos.
`#ffffff`
Nota: debes reemplazar <usuario>, <contraseña>, <cluster>, <basededatos> y <colección> con los valores correspondientes de tu cuenta de MongoDB.
`#000000`

4. Crear el servidor backend con Express:
Luego, crearemos un servidor backend utilizando Express. Para hacerlo, podemos crear un archivo llamado index.js en la carpeta back. En este archivo, importaremos Express y estableceremos el servidor. También configuraremos el servidor para escuchar en el puerto 5000. A continuación, conectaremos el servidor a una base de datos MongoDB utilizando la biblioteca de controladores de MongoDB.
Este código crea una instancia de Express y establece la conexión a la base de datos MongoDB. Luego, se definen las rutas para obtener, agregar, actualizar y eliminar elementos de la base de datos. Finalmente, el servidor se establece para escuchar en el puerto 5000.

Para instalar las dependencias necesarias, podemos ejecutar el siguiente comando en la terminal dentro de la carpeta back:
```npm install express mongodb```

5. Crear la aplicación frontend con Next.js:
Para crear la aplicación frontend, utilizaremos Next.js. Next.js es un marco de trabajo de React que nos permite construir aplicaciones de React del lado del servidor. Next.js incluye una serie de características que nos ayudarán a construir la aplicación de manera más fácil y rápida.

Para crear la aplicación, podemos ejecutar el siguiente comando en la terminal dentro de la carpeta raíz del proyecto:
```npx create-next-app front```
Este comando creará una nueva aplicación Next.js en una carpeta llamada front. Podemos navegar a esta carpeta y ejecutar el siguiente comando para iniciar el servidor de desarrollo:
```npm run dev```
Esto iniciará el servidor de desarrollo y nos permitirá comenzar a construir la aplicación.

6. Crear la interfaz de usuario de la aplicación:

7. Creamos el archivo docker-compose.yml en la raíz del proyecto para definir la configuración de los servicios de Docker que vamos a utilizar. En este archivo, definimos tres servicios: frontend, backend y mongo.

8. En el servicio frontend especificamos la ubicación del archivo Dockerfile en la carpeta front, los puertos que se utilizarán y que este servicio depende del servicio backend.

9. En el servicio backend, especificamos la ubicación del archivo Dockerfile en la carpeta back, los puertos que se utilizarán, la variable de entorno para la URL de la base de datos MongoDB y que este servicio depende del servicio mongo.

10. Finalmente, instalamos las dependencias necesarias en el proyecto con el comando npm install mongodb y npm install axios.

¡Listo! Con estos pasos hemos creado un proyecto básico de API REST con Node.js, Express, MongoDB y Docker Compose. Este proyecto puede ser utilizado como punto de partida para desarrollar una aplicación más compleja.

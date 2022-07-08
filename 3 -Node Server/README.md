# English
## Description
The code in this folder corresponds to a Node.js server, capable of communicating with devices using the MQTT protocol; a MySQL database; send information using websockets, and receive information using an API. In the context of the project, this server receives a signal from the sensor microcontroller, and forwards the information through the broker to the other actuator microcontroller, at the same time that it stores the change of state in a database and notifies a web page. It can also receive a request from a web page to generate changes in the database and in the actuator microcontroller.

## Installation
The latest version of [Node.js](https://nodejs.org/es/ "Node.js") must be installed on the computer that will act as the server. Also, a MySQL database must be installed and running. On Windows it is recommended to use [Laragon](https://laragon.org/download/index.html "Laragon"), a development environment that includes MySQL and HeidiSQL, a database manager. You also need to configure a websockets service. It is recommended to use [Pusher](https://pusher.com/ "Pusher"), this service only requires registration and no configuration is required.

Having all the services configured, the .env.example file must be renamed to .env and then fill all the credentials: From the database, from the IoT broker, and from the Webhooks service.

Then, from the current directory, the command: `npm install` must be executed. This will install all the necessary packages listed in the package.json file.

Finally, the `npm run dev` command must be executed, so the server will be listening for messages from the IoT Broker and requests from the web page on the `/swap-value` endpoint.

###  Recommendations
- The IoT broker will listen to the theme indicated in the .env file, make sure that it is the same theme in which the controller microcontroller emits.
- The IoT broker will issue the theme indicated in the file [mqtt.js ](https://github.com/xphonse/Esp32-MQTT-Node.js-React.js-IoT-ecosystem/blob/main/3% 20-Node%20Server/functions/mqtt.js "mqtt.js"), make sure it is the same topic that the actuator microcontroller is listening on.
- The database is recommended as local to run the program but can be configured to be external as an AWS service.

# Español
## Descripción
El código de este folder corresponde a un servidor de Node.js, capaz de comunicarse con dispositivos mediante el protocolo MQTT; una base de datos MySQL; enviar información mediante websockets, y recibir información mediante una API. En el contexto del proyecto, este servidor recibe una señal del microcontrolador sensor, y reenvía la información mediante el broker al otro microcontrolador accionador, al mismo tiempo que almacena el cambio de estado en una base de datos y notifica a una página web. También puede recibir una petición desde una pagina web para generar cambios en la base de datos y en el microcontrolador accionador.

## Instalación
Se debe instalar en la computadora que actuara como servidor la última versión de [Node.js](https://nodejs.org/es/ "Node.js"). Además, una base de datos MySQL debe estar instalada y ejecutándose. En Windows se recomienda utilizar [Laragon](https://laragon.org/download/index.html "Laragon"), un ambiente de desarrollo que incluye MySQL y HeidiSQL, un gestor de bases de datos. También es necesario configurar un servicio de websockets. Se recomienda utilizar [Pusher](https://pusher.com/ "Pusher"), en este servicio solo es necesario registrarse y no es necesario realizar ninguna configuración.

Teniendo todos los servicios configurados, se debe renombrar el archivo .env.example a .env y vaciar todas las credenciales: De la base de datos, del broker IoT, y del servicio de Webhooks.

Después, se debe ejecutar desde el actual directorio el comando: `npm install`. Esto instalara todos los paquetes necesarios indicados en el archivo package.json. 

Finalmente, se debe ejecutar el comando `npm run dev`, con lo que el servidor quedara escuchando los mensajes del Broker de IoT y las peticiones de la página web en el endpoint `/swap-value`.

###  Recomendaciones
- El broker de IoT escuchara el tema indicado en el archivo .env, asegurarse de que es el mismo tema en el que emite el microcontrolador controlador.
- El broker de IoT emitirá el tema indicado en el archivo [mqtt.js ](https://github.com/xphonse/Esp32-MQTT-Node.js-React.js-IoT-ecosystem/blob/main/3%20-Node%20Server/functions/mqtt.js "mqtt.js "), asegurarse de que es el mismo tema en el que escucha el microcontrolador accionador.
- La base de datos se recomienda como local para poner en funcionamiento el programa pero puede ser configurada para ser externa como la de un servicio de AWS.

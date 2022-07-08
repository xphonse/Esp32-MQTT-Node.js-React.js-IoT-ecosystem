#English
## Description
The code in this folder corresponds to a web page developed in React.js. It fulfills two functions, to show the current boolean state and  to communicate with a button with the Node.js server, which in turn will communicate with the actuator microcontroller to generate changes in the hardware.

## Instalation
The latest version of [Node.js](https://nodejs.org/es/ "Node.js") must be installed. Then, from the current directory, the command: `npm install` must be executed. This will install all the necessary packages listed in the package.json file.

Finally, the command `npm start` must be executed, with which the page will be executed.

###  Recommendations
The credentials obtained from the Pusher service can be changed in the file [LedIndicator.jxs](https://github.com/xphonse/Esp32-MQTT-Node.js-React.js-IoT-ecosystem/blob/main/4 %20-React%20Web%20App/src/components/LedIndicator.jsx "LedIndicator.jxs").
In case the server is not located locally and it is necessary to change the url where the page will be communicated, it can be done from the file [SwapValueButton.jsx](https://github.com/xphonse/Esp32-MQTT -Node.js-React.js-IoT-ecosystem/blob/main/4%20-React%20Web%20App/src/components/SwapValueButton.jsx "SwapValueButton.jsx").

# Español
## Descripción
El código de este folder corresponde a una página web desarrollada en React.js. Cumple dos funciones, mostrar el estado booleano actual y con un botón comunicarse con el servidor de Node.js, que a su vez se comunicará con el microocontrolador actuador para generar cambios en el hardware.

## Instalación
Se debe instalar la última versión de [Node.js](https://nodejs.org/es/ "Node.js").

Después, se debe ejecutar desde el actual directorio el comando: `npm install`. Esto instalara todos los paquetes necesarios indicados en el archivo package.json. 

Finalmente, se debe ejecutar el comando `npm start`, con lo que la pagina se ejecutara.

###  Recomendaciones
Las credenciales obtenidas del servicio de Pusher se pueden cambiar en el archivo [LedIndicator.jxs](https://github.com/xphonse/Esp32-MQTT-Node.js-React.js-IoT-ecosystem/blob/main/4%20-React%20Web%20App/src/components/LedIndicator.jsx "LedIndicator.jxs").
En caso de que el servidor no se encuentre de forma local y sea necesario cambiar la url a donde se comunicara la página, se puede hacer desde el archivo [SwapValueButton.jsx](https://github.com/xphonse/Esp32-MQTT-Node.js-React.js-IoT-ecosystem/blob/main/4%20-React%20Web%20App/src/components/SwapValueButton.jsx "SwapValueButton.jsx").

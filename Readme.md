# Esp32 / MQTT / Node.js / React.js - IoT ecosystem

## English
### Description
This project is a starting point for creating Internet of Things (IoT) applications. It involves the most fundamental elements in an application of this type and consists of sharing the True/False Boolean state with different components.

Incorporates:
- An ESP32 microcontroller capable of sensing the intervention of a user and sending that information by MQTT.
- A Node.js server that manages the messages and topics that are received and issued by MQTT.
- An ESP32 microcontroller capable of receiving information via MQTT and generating changes in an actuator based on the information received.
- A MySQL database, managed by Node.js, which can store historical information.
- A page in React.js that shows the status of the boolean state and that allows a user to change the same state.

The design of the project includes making the components easily interchangeable so that they can be replaced by other technologies at the convenience of the project. The ESP32 microcontroller can be any component that can communicate over the internet, such as simpler cards like Arduino with extra modules or more complex cards; the Node.js server, based on Javascript, can be exchanged for backend technologies that work with PHP or Python, such as Laravel or Django; the MySQL database can be changed to sqlite or Oracle database; etc.

### Installation
The project is divided into 4 parts, each in a subdirectory. Separate installation instructions are located in each subdirectory.

## Español
### Descripción
Este proyecto es un punto de arranque para crear aplicaciones de Internet de las Cosas (IoT). Involucra los elementos mas fundamentales en una aplicación de este tipo y consiste en mantener en comunicación con diferentes componentes el status Verdadero/Falso de un estado booleano.

Incorpora:
- Un microcontrolador ESP32 capaz de sensar la intervención de un usuario y enviar esa información por MQTT.
- Un servidor de Node.js que administra os temas que se reciben y emiten por MQTT.
- Un microcontrolador ESP32 capaz de recibir información por MQTT y generar cambios en un actuador a partir de la información recibida.
- Una base de datos MySQL, administrada por Node.js, que puede almacenar información historica.
- Una pagina en React.js que muestra el status del estado boleano y que permite a un usuario cambiar el mismo estado. 

El diseño del proyecto incluye hacer a los componentes facilmente intercambiables a modo de que puedan ser reemplazados por otras tecnologias a conveniencia del proyecto. El microcontrolador ESP32 puede ser cualquier componente que pueda comunicarse por internet, como tarjetas mas simples como Arduino con modulos extras o por tarjetas mas complejas; el servidor de Node.js, basado en Javascript, puede ser intercambiado por tecnologias que funcionen con PHP o Python, como Laravel o Django; la base de datos MySQL puede cambiarse por sqlite o based de datos Oracle; etc.

### Instalación
El proyecto se divide en 4 partes, cada una en un subdirectorio. En cada subdirectorio se encuentran las instrucciones de instalación por separado.

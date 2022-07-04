# English

## Description
The code in this folder corresponds to an ESP32 microcontroller capable of opening a channel with an MQTT broker, receiving a message from the broker, and making changes to an actuator. The code was developed in a modular way; the actuator, a simple led, can be replaced by any type of actuator; the logic to be carried out according to the received message can be easily editable; and  the broker can be changed by any other according to the characteristics of the project.

## Installation
Open the project in the Arduino IDE (https://www.arduino.cc/en/software). Copy the file variables.example.h and rename it to variables.h. In it, fill in the different fields depending on the MQTT broker you have decided to use and the local WiFi credentials.
Pin 21 of the ESP32 will change the logic voltage output according to the message received through the MQTT broker, to which an LED must be connected in series with a 500Ω resistor. (The pin can be modified in [main.ino](https://github.com/xphonse/Esp32-MQTT-Node.js-React.js-IoT-ecosystem/blob/main/1-ESP32%20-% 20Actuator/main/main.ino "main.ino"))
Afterwards, it is only necessary to compile the code in the IDE. When starting the microcontroller, the serial monitor will show the connection and sensing status or the problem, if any.
If the connection is successful, the messages received through the MQTT broker will also be displayed on the serial monitor.

### Recommendations
- As a test broker, it is suggested to use the one hosted at https://test.mosquitto.org/
- The messages to change the state of the led must have the format {"booleanValue":true} or {"booleanValue":false}
- The sent data received as JSON can be changed for different logics, integers, floats, strings, etc. can be received and processed.

# Español
## Descripción
El codigo de este folder corresponde a un microcontrolador ESP32 capaz de abrir un canal con un broker MQTT, recibir un mensaje por el broker, y realizar cambios en un actuador.  El codigo se desarrolló de forma modular, para que el actuador, un simple led, pueda ser reemplazado por cualquier tipo de actuador,  para que la logica a realizar seg{un el mensaje recibido pueda ser facilmente editable, y para poder cambiar el broker por cualquier otro segun las caracteristicas del proyecto.

## Instalación
Abrir el proyecto en el IDE de Arduino (https://www.arduino.cc/en/software). Copiar el archivo variables.example.h y renombrarlo como variables.h. En el, llenar los diferentes campos según el broker MQTT que haya decidido usar y las credenciales locales de WiFi. 
El pin 21 del ESP32 cambiará la salida del voltaje lógico segun el mensaje recibido a través del broker MQTT, a el deberá conectarsé un led en seríe con una resistencia de 500Ω. (El pin puede ser modificado en [main.ino](https://github.com/xphonse/Esp32-MQTT-Node.js-React.js-IoT-ecosystem/blob/main/1-ESP32%20-%20Accionador/main/main.ino "main.ino"))
Despues, solo es necesario compilar el codigo en el IDE. Al iniciar el microcontrolador, en el monitor serial aparecerá el estado de la conexión y del sensado o el problema en caso de existir alguno.
Si la conexión es exitosa, se mostraran tambien en el monitor serial los mensajes recibidos a través del broker MQTT.

### Recomendaciones
- Como broker de pruebas, se sugiere utilizar el alojado en https://test.mosquitto.org/
- Los mensajes para cambiar el estado del led deben tener el formato {"booleanValue":true} ó {"booleanValue":false}
- El dato enviado  recibido como JSON puede ser cambiados para diferentes lógicas, pueden recibirse y procesarse enteros, flotantes, strings, etc.

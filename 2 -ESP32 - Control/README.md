#English
##Description
The code in this folder corresponds to an ESP32 microcontroller capable of opening a channel with an MQTT broker, sensing the intervention of a user, and communicating that intervention in real time. The code was developed in a modular way; the current sensor, a simple push button, can be replaced by any type of sensor; the message sent can be easily edited, and it's also easy to change the broker for any other according to the characteristics of the project.

##Installation
Open the project in the Arduino IDE (https://www.arduino.cc/en/software). Copy the file variables.example.h and rename it to variables.h. In it, fill the different fields depending on the selected MQTT broker and the local WiFi credentials.
An LED in series with a 500Ω resistor must be connected to pin 21 of the ESP32, according to the datasheet of the version used. (The pin can be modified in [main.no](oT-ecosystem/blob/main/2%20-ESP32%20-%20Control/main/main.ino "main.no") )
Afterwards, it is only necessary to compile the code in the IDE. When starting the microcontroller, the serial monitor will show the connection and sensing status or the problem, if any.
If the connection is successful, the messages received through the MQTT broker will also be displayed on the serial monitor.

###Recommendations
- As a test broker, it is suggested to use the one hosted at https://test.mosquitto.org/
- The messages to change the state of the led must have the format {"booleanValue":false} or {"booleanValue":false}
- The data received as boolean can easily be changed for different logics, they can be sent integers, floats, strings, and processed to respond in different actuators and in different ways

#Español
##Descripción
El codigo de este folder corresponde a un microcontrolador ESP32 capaz de abrir un canal con un broker MQTT, sensar la intervención de un usuario, y comunicar en tiempo real dicha intervención. El codigo se desarrolló de forma modular, para que el sensor actual, un simple push button, pueda ser reemplazado por cualquier tipo de sensor,  para que el mensaje enviado pueda ser facilmente editado, y para poder cambiar el broker por cualquier otro segun las caracteristicas del proyecto.

##Instalación
Abrir el proyecto en el IDE de Arduino (https://www.arduino.cc/en/software). Copiar el archivo variables.example.h y renombrarlo como variables.h. En el, llenar los diferentes campos según el broker MQTT que haya decidido usar y las credenciales locales de WiFi. 
Un led en serie con una resistencia de 500Ω  debe ser conectado al pin 21 del ESP32, según el datasheet de la versión utilizada. (El pin puede ser modificado en [main.no](oT-ecosystem/blob/main/2%20-ESP32%20-%20Control/main/main.ino "main.no") )
Despues, solo es necesario compilar el codigo en el IDE. Al iniciar el microcontrolador, en el monitor serial aparecerá el estado de la conexión y del sensado o el problema en caso de existir alguno.
Si la conexión es exitosa, se mostraran tambien en el monitor serial los mensajes recibidos a través del broker MQTT.


###Recomendaciones
- Como broker de pruebas, se sugiere utilizar el alojado en https://test.mosquitto.org/
- Los mensajes para cambiar el estado del led deben tener el formato {"booleanValue":false} ó {"booleanValue":false}
- El dato recibido como booleano facilmente pueden ser cambiados para diferentes lógicas, pueden mandarse enteros, flotantes, strings, y procesarlos para responder en diferentes actuadores y de diferentes maneras

#define greenLed 21
#include "variables.h"
#include "connectToWiFi.h"
#include "connectToMqttServer.h"


void setup()
{
    Serial.begin(115200);
    pinMode(greenLed, OUTPUT);

    connectToWiFi();
    connectToMqttServer();
}

void loop()
{
    client.loop();  
}
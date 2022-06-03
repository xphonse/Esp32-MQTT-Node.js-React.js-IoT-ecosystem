#include "variables.h"
#include "connectToWiFi.h"
#include "connectToMqttServer.h"

#define buttonInput 21

bool isButtonFirstRead = true;
int lastButtonState = 0;

void setup()
{
    Serial.begin(115200);
    pinMode(buttonInput, INPUT);

    connectToWiFi();
    connectToMqttServer();
}

void loop()
{
    client.loop();

    if (isButtonFirstRead) //set lastButtonState on first loop execution
    {
        lastButtonState = digitalRead(buttonInput);
        isButtonFirstRead = false;
    }

    if (lastButtonState != digitalRead(buttonInput)) 
    {
        delay(100); //digital debounce; if value is still different after set ms, then register the change and noitify to mqtt broker
        if (lastButtonState != digitalRead(buttonInput))
        {
            lastButtonState = digitalRead(buttonInput);
            client.publish(topic, "{\"swapLedBooleanValue\" : 1}");
        }
    }
}
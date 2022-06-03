#include <PubSubClient.h>
PubSubClient client(espClient);

void printMessageToConsole(char *topic, byte *payload, unsigned int length)
{
    Serial.print("Message arrived in topic: ");
    Serial.print(topic);    
    Serial.println(" Mssage: ");
    for (int i = 0; i < length; i++)
    {
        Serial.print((char)payload[i]);
    }
    Serial.println("");
}

void connectToMqttServer()
{
    client.setServer(mqtt_broker, mqtt_port);
    client.setCallback(printMessageToConsole); //callback executed when a message arrives
    while (!client.connected())
    {
        String client_id = "esp32-client-";
        client_id += String(WiFi.macAddress());
        Serial.printf("The client %s connects to the mqtt broker\n", client_id.c_str());
        if (client.connect(client_id.c_str(), mqtt_username, mqtt_password))
        {
            Serial.println("Public emqx mqtt broker connected");
        }
        else
        {
            Serial.print("failed with state ");
            Serial.print(client.state());
            delay(2000);
        }
    }    
    client.subscribe(topic);
}

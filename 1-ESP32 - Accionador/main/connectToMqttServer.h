#include <PubSubClient.h>

PubSubClient client(espClient);

String content = "";

void callback(char *topic, byte *payload, unsigned int length)
{
    content = "";
    for (size_t i = 0; i < length; i++)
    {
        content.concat((char)payload[i]);
    }
    Serial.print("Message arrived in topic: ");    
    Serial.print(topic);    
    Serial.print(" | Message: ");    
    Serial.println(content);    

    if(content== "{\"booleanValue\":true}") digitalWrite(greenLed,HIGH);    
    if(content== "{\"booleanValue\":false}") digitalWrite(greenLed,LOW);    
}

void connectToMqttServer()
{
    client.setServer(mqtt_broker, mqtt_port);
    client.setCallback(callback);
    while (!client.connected())
    {
        String client_id = "esp32-client-";
        client_id += String(WiFi.macAddress());
        Serial.printf("The client %s connects to the public mqtt broker\n", client_id.c_str());
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
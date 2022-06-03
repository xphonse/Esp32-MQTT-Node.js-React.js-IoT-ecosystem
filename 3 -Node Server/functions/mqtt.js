const mqtt = require("mqtt");
const { webhookNotification } = require("./webhooks");
const { swapLedBooleanValue } = require("./database");

let controllerTopic = process.env.MQTT_CONTROLLER_TOPIC;
let ledTopic = process.env.MQTT_LED_TOPIC;

const options = {
  host: process.env.MQTT_HOST,
  port: process.env.MQTT_PORT,
  protocol: process.env.MQTT_PROTOCOL,
  keepalive: 5,
};

function instanciateMqttBroker() {
  //initialize the MQTT client
  const client = mqtt.connect(options);

  //setup the callbacks
  client.on("connect", function () {
    console.log("Connected to mqtt broker");
  });

  client.on("error", function (error) {
    console.log(error);
  });

  //Called each time a message is received
  client.on("message", function (topic, message) {
    console.log("Received message:", topic, message.toString());
    let messageJSON = JSON.parse(message.toString());
    if (messageJSON.swapLedBooleanValue) {
      swapLedBooleanValue(function (newValue) {
        webhookNotification(newValue);
        client.publish(ledTopic, '{"booleanValue":' + newValue + "}");
      });
    }
  });

  // subscribe to topic 'my/test/topic'
  client.subscribe(controllerTopic);
  client.subscribe(ledTopic);

  return client;
}

module.exports = { instanciateMqttBroker };

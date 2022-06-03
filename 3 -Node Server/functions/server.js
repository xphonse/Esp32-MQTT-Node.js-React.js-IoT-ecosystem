const express = require("express");
const { readDeviceValue,swapLedBooleanValue,} = require("./database");
const { webhookNotification } = require("./webhooks");
const app = express();
const port = 3000;


function startServer(client){
    app.get("/", (req, res) => {
        readDeviceValue(function (result) {
          res.json({ status: result });
        });
      });
      app.get("/swap-value", (req, res) => {
        console.log("swap-value");
        swapLedBooleanValue(function (newValue) {
          webhookNotification(newValue);
          client.publish(process.env.MQTT_LED_TOPIC,'{"booleanValue":' + newValue + "}");
        });
        res.json({
          success: true,
        });
      });

      return app;
}

module.exports = {startServer}
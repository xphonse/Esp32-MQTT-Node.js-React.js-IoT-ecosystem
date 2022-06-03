require("dotenv").config();

const { instanciateMqttBroker } = require("./functions/mqtt");
const { startServer } = require("./functions/server");
let client = instanciateMqttBroker();
let app = startServer(client);
let port = process.env.SERVER_PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

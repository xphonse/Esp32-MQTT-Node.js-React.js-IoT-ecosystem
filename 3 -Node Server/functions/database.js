const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

function swapLedBooleanValue(callback) {
  readDeviceValue(function (result) {
    let newValue = !result
    connection.query(
      "UPDATE devices SET isDeviceOn = " + newValue + " WHERE ID=1",
      function (error, results, fields) {
        if (error) throw error;
      }
    );
    console.log("Database: Value swaped to " + newValue);
    return callback(newValue);
  });
}

function readDeviceValue(callback) {
  connection.query(
    "SELECT * FROM devices WHERE id = 1",
    function (error, results, fields) {
      if (error) throw error;
      return callback(results[0].isDeviceOn);
    }
  );
}

module.exports = { swapLedBooleanValue, readDeviceValue };

import React, { useState } from "react";
import Pusher from "pusher-js";

var pusher = new Pusher("3efa46db35a951507ae0", {
  cluster: "us2",
});

export const LedIndicator = () => {
  const [ledValue, setLedValue] = useState(false);

  var channel = pusher.subscribe("my-channel");
  channel.bind("my-event", function (data) {
    setLedValue(data.newStatus);
  });

  return (
    <>
      <div className="col-12 text-center"></div>
      <div className="col-12 text-center mt-1">
        <div className={`btn btn-${ledValue ? "success" : "secondary"}`}>
          Value is {ledValue ? "True" : "False"}
        </div>
      </div>
    </>
  );
};
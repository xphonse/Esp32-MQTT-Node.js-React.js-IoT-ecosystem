
const Pusher = require("pusher");
const pusher = new Pusher({
  appId: process.env.WH_appId,
  key: process.env.WH_key,
  secret: process.env.WH_secret,
  cluster: process.env.WH_cluster,
  useTLS: process.env.WH_useTLS,
});

function webhookNotification(value){
    pusher.trigger("my-channel", "my-event", {
        newStatus: value,
      });
}

module.exports = {webhookNotification}
import { api } from "../api";

const processMessage = require("../helpers/processMessage");
module.exports = (req, res) => {
  if (req.body.object === "page") {
    req.body.entry.forEach(entry => {
      entry.messaging.forEach(event => {
        if (event.message && event.message.text) {
          processMessage(event);
          const sender_id = event.sender ? event.sender.id : "";
          const text = event.message ? event.message.text : "";
          if (false) {
            // If user is new, sign him up and send a confirmation response
            api.responseMessage({ id: sender_id, text: `You're good to go!` });
          }
          console.log("text", text);
          console.log("sender_id: ", sender_id);
          // api
          //   .sendMessage({ id: sender_id, text: "Thank you for signing up" })
          //   .then(_ => console.log("message sent"))
          //   .catch(e => console.log("error: ", e));
        }
      });
    });
    res.status(200).end();
  }
};

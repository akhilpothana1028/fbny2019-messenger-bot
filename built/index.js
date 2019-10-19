"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("./api");
// setting up endpoints
// Imports dependencies and set up http server
var express = require("express"), bodyParser = require("body-parser"), app = express().use(bodyParser.json()); // creates express http server
// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, function () { return console.log("webhook is listening"); });
// Creates the endpoint for our webhook
app.post("/webhookold", function (req, res) {
    var body = req.body;
    // Checks this is an event from a page subscription
    if (body.object === "page") {
        console.log("body.entry: ", body.entry);
        // Iterates over each entry - there may be multiple if batched
        body.entry.forEach(function (entry) {
            // Gets the message. entry.messaging is an array, but
            // will only ever contain one message, so we get index 0
            var webhook_event = entry.messaging[0];
            // console.log(webhook_event);
            var sender_id = webhook_event.sender ? webhook_event.sender.id : "";
            var text = webhook_event.message ? webhook_event.message.text : "";
            // console.log("text: ", !!text);
            // Returns a '200 OK' response to all requests
            res.status(200).send("EVENT_RECEIVED");
            !!text &&
                api_1.api
                    .sendMessage({ id: sender_id, text: "Thank you for signing up" })
                    .then(function (_) { return console.log("message sent"); })
                    .catch(function (e) { return console.log("error: ", e); });
        });
    }
    else {
        // Returns a '404 Not Found' if event is not from a page subscription
        res.sendStatus(404);
    }
});
// Adds support for GET requests to our webhook
app.get("/webhookold", function (req, res) {
    // Your verify token. Should be a random string.
    var VERIFY_TOKEN = "fbny2019";
    // Parse the query params
    var mode = req.query["hub.mode"];
    var token = req.query["hub.verify_token"];
    var challenge = req.query["hub.challenge"];
    // Checks if a token and mode is in the query string of the request
    if (mode && token) {
        // Checks the mode and token sent is correct
        if (mode === "subscribe" && token === VERIFY_TOKEN) {
            // Responds with the challenge token from the request
            console.log("WEBHOOK_VERIFIED");
            res.status(200).send(challenge);
        }
        else {
            // Responds with '403 Forbidden' if verify tokens do not match
            res.sendStatus(403);
        }
    }
});
var verificationController = require("./controllers/verification");
var messageWebhookController = require("./controllers/messageWebhook");
app.get("/webhook", verificationController);
app.post("/webhook", messageWebhookController);

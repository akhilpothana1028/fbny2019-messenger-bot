const API_AI_TOKEN = ‘6c474f5dab5b42f989ec99ef32a5fe4e’;
const apiAiClient = require(‘apiai’)(API_AI_TOKEN);
const FACEBOOK_ACCESS_TOKEN = ‘EAAYTLtLE1bMBAFYZBXNCWMYbXuw5E8NTAmp7hHurLNNTdFHPZAG9J76nCPDPfARuTZAMYIbXv80xIPxzmDgc3leuaHpObDfco1O50iLn5ZBlJ3rsG83VsUeToceSOIhVzEUL6k3rVURZCyT92jCb8aiNsguWobuatYONS0OyIDcQ1hB2QnBk0yQJzwcWoz7QZD’;
const request = require(‘request’);
const sendTextMessage = (senderId, text) => {
 request({
 url: ‘https://graph.facebook.com/v2.6/me/messages',
 qs: { access_token: FACEBOOK_ACCESS_TOKEN },
 method: ‘POST’,
 json: {
 recipient: { id: senderId },
 message: { text },
 }
 });
};
module.exports = (event) => {
 const senderId = event.sender.id;
 const message = event.message.text;
const apiaiSession = apiAiClient.textRequest(message, {sessionId: ‘crowdbotics_bot’});
apiaiSession.on(‘response’, (response) => {
 const result = response.result.fulfillment.speech;
sendTextMessage(senderId, result);
 });
apiaiSession.on(‘error’, error => console.log(error));
 apiaiSession.end();
};
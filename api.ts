import axios from "axios";
import { PAGE_ACCESS_TOKEN } from "./constants";

const HTTP = axios.create({
  // baseURL: API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

const sendMessage = async ({ id, text }) =>
  HTTP.post(
    `https://graph.facebook.com/v4.0/me/messages?access_token=${PAGE_ACCESS_TOKEN}`,
    JSON.stringify({
      messaging_type: "UPDATE",
      recipient: { id },
      message: { text }
    })
  );
const responseMessage = ({ id, text }) =>
  HTTP.post(
    `https://graph.facebook.com/v4.0/me/messages?access_token=${PAGE_ACCESS_TOKEN}`,
    {
      messaging_type: "RESPONSE",
      recepient: { id },
      message: { text }
    }
  );
const api = {
  responseMessage,
  sendMessage
};

export { api };

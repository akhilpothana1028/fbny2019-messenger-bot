import axios from "axios";

const HTTP = create({
  // baseURL: API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

const sendMessage = async ({ id, text }) => {
  HTTP.post(
    `https://graph.facebook.com/v4.0/me/messages?access_token=${PAGE_ACCESS_TOKEN}`,
    {
      messaging_type: "UPDATE",
      recepient: { id },
      message: { text }
    }
  );
};

const responseMessage = async ({ id, text }) => {
  HTTP.post(
    `https://graph.facebook.com/v4.0/me/messages?access_token=${PAGE_ACCESS_TOKEN}`,
    {
      messaging_type: "RESPONSE",
      recepient: { id },
      message: { text }
    }
  );
};

const api = {
  responseMessage,
  sendMessage
};

export { api };

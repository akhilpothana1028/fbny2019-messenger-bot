import { users } from "../db";
import { api } from "../api";
import { helper } from "../helper";

// Sends reminder to drink water

// get current hour
const currentTime = new Date();
const currentHour = currentTime.getHours();

console.log("users: ", users);
console.log("current hour: ", currentHour);

// Loop through users, if their hour preference matches the current hour, send them a message
Promise.all(
  users
    .filter(user => user.hours.includes(currentHour))
    .map(async user => {
      let text;
      const includeVideo = Math.ceil(Math.random() * 2) % 2 === 0;
      if (includeVideo && user.optedInForHealthTips) {
        text = `Remember to drink your fluids. Also, check out this video on how to stay healthy: ${helper.getRandomHealthVideo()}`;
      } else {
        text = `Remember to drink your fluids`;
      }
      await api
        .sendMessage({ id: user.id, text })
        .then(_ => console.log(`message sent to ${user.name}`))
        .catch(e => {});
    })
);

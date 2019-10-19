import { YOUTUBE_LIST } from "./static";
import { users, User } from "./db";

const getRandomHealthVideo = () => {
  const listLength = YOUTUBE_LIST.length;
  const randomNum = Math.floor(Math.random() * listLength);
  return YOUTUBE_LIST[randomNum];
};

const newUser = (user: User) => users.push(user);

const helper = {
  getRandomHealthVideo,
  newUser
};

export { helper };

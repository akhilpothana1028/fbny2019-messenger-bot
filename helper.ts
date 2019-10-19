import { YOUTUBE_LIST } from "./static";

const getRandomHealthVideo = () => {
  const listLength = YOUTUBE_LIST.length;
  const randomNum = Math.floor(Math.random() * listLength);
  return YOUTUBE_LIST[randomNum];
};

const helper = {
  getRandomHealthVideo
};

export { helper };

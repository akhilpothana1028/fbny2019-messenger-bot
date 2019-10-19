"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var static_1 = require("./static");
var getRandomHealthVideo = function () {
    var listLength = static_1.YOUTUBE_LIST.length;
    var randomNum = Math.floor(Math.random() * listLength);
    return static_1.YOUTUBE_LIST[randomNum];
};
var helper = {
    getRandomHealthVideo: getRandomHealthVideo
};
exports.helper = helper;

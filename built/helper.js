"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var static_1 = require("./static");
var db_1 = require("./db");
var getRandomHealthVideo = function () {
    var listLength = static_1.YOUTUBE_LIST.length;
    var randomNum = Math.floor(Math.random() * listLength);
    return static_1.YOUTUBE_LIST[randomNum];
};
var newUser = function (user) { return db_1.users.push(user); };
var helper = {
    getRandomHealthVideo: getRandomHealthVideo,
    newUser: newUser
};
exports.helper = helper;

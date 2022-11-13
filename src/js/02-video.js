import Player from "@vimeo/player";
import { throttle } from "lodash";

const player = new Player("vimeo-player");
const VIDEO_KEY = "videoplayer-current-time";

player.on("timeupdate", throttle(timeVideo, 1000));

function timeVideo(videoTime) {
  localStorage.setItem(VIDEO_KEY, videoTime.seconds);
}

player.setCurrentTime(timeGET());
function timeGET() {
  return localStorage.getItem(VIDEO_KEY);
}

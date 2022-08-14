import axios from "axios";

const YOUTUBE_API_KEY = "AIzaSyAVr77fRs23aLZEmUoM21giAuWsFNBBpyc";

export const youtubeClient = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 1,
    key: YOUTUBE_API_KEY,
  },
});

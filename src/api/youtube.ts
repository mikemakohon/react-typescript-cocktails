import axios from "axios";

import { YOUTUBE_API_KEY } from "../utils/constants/index";

export const youtubeClient = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 1,
    key: YOUTUBE_API_KEY,
  },
});

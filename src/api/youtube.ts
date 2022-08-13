import axios from "axios";

const YOUTUBE_API_KEY = "AIzaSyAhPDOKQ0LHvQeXHiv-rmXn0Mw7XY6ngQc";

export const youtubeClient = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 1,
    key: YOUTUBE_API_KEY,
  },
});

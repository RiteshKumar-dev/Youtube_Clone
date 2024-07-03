import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import convertRawToString from "../../Utils/convertRawToString";
import timeSince from "../../Utils/timeSince";

const API_KEY = import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY;

const getVideosDetails = createAsyncThunk(
  "youtube/App/getVideosDetails",
  async (id) => {
    const {
      data: { items },
    } = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,statistics&type=video&id=${id}`);

    if (items.length === 0) {
      throw new Error("No video data found");
    }

    const parsedData = await parseData(items[0]);
    // console.log(parsedData);
    return parsedData;
  }
);

const parseData = async (item) => {
  const channelResponse = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${item.snippet.channelId}&key=${API_KEY}`);
  const snippet = item.snippet;
  const id = item.id;
  const statistics = item.statistics;

  if (channelResponse.data.items.length === 0) {
    throw new Error("No channel data found");
  }

  const channelImage = channelResponse.data.items[0].snippet.thumbnails.default.url;
  const subscriberCount = channelResponse.data.items[0].statistics.subscriberCount;

  return {
    videoId: id,
    videoTitle: snippet.title,
    videoDescription: snippet.description,
    videoViews: convertRawToString(statistics.viewCount),
    videoLikes: convertRawToString(statistics.likeCount),
    videoAge: timeSince(new Date(snippet.publishedAt)),
    channelInfo: {
      id: snippet.channelId,
      image: channelImage,
      name: snippet.channelTitle,
      subscribers: convertRawToString(subscriberCount, true),
    },
  };
}

export default getVideosDetails;

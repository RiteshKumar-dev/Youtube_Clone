import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ParseRecommendedData from '../../Utils/ParseData';

const API_KEY = import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY;

const recommendedPageVideos = createAsyncThunk(
  "youtubeApp/recommendedPageVideos",
  async (videoId, { getState }) => {
    const {
      youtubeApp: { curntPlaying: { channelInfo: { id: channelId } } },
    } = getState();
    const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet&maxResults=20&relatedToVideoId=${videoId}&type=video`);
    const items = response.data.items;
    const parsedData = await ParseRecommendedData(items);
    return parsedData;
  }
);

export default recommendedPageVideos;

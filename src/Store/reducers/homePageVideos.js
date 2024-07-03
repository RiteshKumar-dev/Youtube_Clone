import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ParseData from '../../Utils/ParseData';

const API_KEY = import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY;

const homePageVideos = createAsyncThunk(
  "youtube/App/homePageVideos",
  async (isNext, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState();

    const query = encodeURIComponent('"Apna College"');
    const maxResults = 50;

    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=${maxResults}&q=${query}&key=${API_KEY}&part=snippet&type=video&${isNext ? `pageToken=${nextPageTokenFromState}` : ""}`
    );

    const items = response.data.items;
    const nextPageToken = response.data.nextPageToken;

    const parsedData = await ParseData(items);

    return { parsedData: [...videos, ...parsedData], nextPageToken };
  }
);

export default homePageVideos;

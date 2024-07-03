import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ParseData from '../../Utils/ParseData';

const API_KEY = import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY;


const serachVideos = createAsyncThunk(
  "youtube/App/serachVideos",
  async (isNext, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos, serachTerms },
    } = getState();
    const maxResults = 20;

    const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=${maxResults}&q=${serachTerms}&key=${API_KEY}&part=snippet&type=video&${isNext ? `pageToken=${nextPageTokenFromState}` : ""
      }`);
    const items = response.data.items;
    const parsedData = await ParseData(items);
    // console.log(parsedData)
    return { parsedData: [...videos, ...parsedData], nextPageToken: nextPageTokenFromState }
  }
);

export default serachVideos

import { createSlice } from "@reduxjs/toolkit";
import homePageVideos from "../../Store/reducers/homePageVideos";
import recommendedPageVideos from "../../Store/reducers/getRecommendedVIdeos"
import getVideosDetails from "../../Store/reducers/getVideosDetails"
import serachVideos from "../../Store/reducers/serachVideos";

const initialState = {
  videos: [],
  currentPlaying: null,
  serachTerms: "",
  serachResults: [],
  nextPageToken: null,
  recommendedVideos: [],
}

const youtubeSlice = createSlice({
  name: 'youtubeApp',
  initialState,
  reducers: {
    clearVideos: (state) => {
      state.videos = [],
        state.nextPageToken = null
    },
    changeSearchTerms: (state, action) => {
      state.serachTerms = action.payload;
    },
    clearSerachTerms: (state) => {
      state.serachTerms = ""
    }
  },
  extraReducers: (builder) => {
    builder.addCase(homePageVideos.fulfilled, (state, action) => {
      if (action.payload && action.payload.parsedData) {
        state.videos = action.payload.parsedData
        state.nextPageToken = action.payload.nextPageToken
      }
    })
    builder.addCase(serachVideos.fulfilled, (state, action) => {
      if (action.payload && action.payload.parsedData) {
        state.videos = action.payload.parsedData
        state.nextPageToken = action.payload.nextPageToken
      }
    })
    builder.addCase(recommendedPageVideos.fulfilled, (state, action) => {
      if (action.payload && action.payload.parsedData) {
        state.recommendedVideos = action.payload.parsedData
      }
    })
    builder.addCase(getVideosDetails.fulfilled, (state, action) => {
      state.currentPlaying = action.payload
    })
  }
})
export const { clearVideos, changeSearchTerms, clearSerachTerms } = youtubeSlice.actions
export default youtubeSlice.reducer;
import { configureStore } from "@reduxjs/toolkit"
import youtubeReducer from '../Features/YoutubeApp/youtubeSlice'

const store = configureStore({
  reducer: {
    youtubeApp: youtubeReducer
  }
})

export default store
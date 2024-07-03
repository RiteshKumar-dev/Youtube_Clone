import React from "react";
import axios from "axios";
const API_KEY = import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY;
import parseVideoDuration from "./parseVideoDuration";
import convertRawToString from "./convertRawToString";
import timeSince from "./timeSince";

const ParseData = async (items) => {
  try {
    const videosIds = [];
    const channelIds = [];

    items.forEach((item) => {
      channelIds.push(item.snippet.channelId);
      videosIds.push(item.id.videoId);
    });

    const channelIdsString = channelIds.join(",");
    const { data: channelsDataResponse } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIdsString}&key=${API_KEY}`
    );

    const parsedChannelsData = channelsDataResponse.items.map((channel) => ({
      id: channel.id,
      image: channel.snippet.thumbnails.default.url,
    }));

    const { data: videoDataResponse } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videosIds.join(
        ","
      )}&key=${API_KEY}`
    );

    const parsedData = items
      .map((item, idx) => {
        const channelData = parsedChannelsData.find(
          (data) => data.id === item.snippet.channelId
        );

        if (channelData) {
          return {
            videoId: item.id.videoId,
            videoTitle: item.snippet.title,
            videoDescription: item.snippet.description,
            videoThumbNail: item.snippet.thumbnails.medium.url,
            videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            videoDuration: parseVideoDuration(
              videoDataResponse.items[idx].contentDetails.duration
            ),
            videoViews: convertRawToString(
              videoDataResponse.items[idx].statistics.viewCount
            ),
            videoAge: timeSince(new Date(item.snippet.publishedAt)),
            channelInfo: {
              id: item.snippet.channelId,
              image: channelData.image,
              name: item.snippet.channelTitle,
            },
          };
        }

        return null;
      })
      .filter((item) => item !== null);

    return parsedData;
  } catch (err) {
    console.error(err);
  }
};

export default ParseData;

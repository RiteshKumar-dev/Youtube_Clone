import React from "react";
import { Link } from "react-router-dom";

const VideosCard = ({ data }) => {
  // console.log(data);
  return (
    <div className="max-w-sm overflow-hidden shadow-lg m-4 rounded-2xl border border-hidden">
      <Link
        to={`/watch/${data.videoId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-full"
          src={data.videoThumbNail}
          alt={data.videoTitle}
        />
      </Link>
      <div className="px-6 py-4">
        <div className="flex items-center mb-2">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src={data.channelInfo.image}
            alt={data.channelInfo.name}
          />
          <div className="font-bold text-xl truncate">{data.videoTitle}</div>
        </div>
        <p className="text-gray-700 text-base truncate">
          {data.videoDescription}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
          {data.channelInfo.name}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {data.videoViews} views
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {data.videoDuration}
        </span>
      </div>
    </div>
  );
};

export default VideosCard;

import React from "react";
import { Link } from "react-router-dom";

const SerachCard = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden shadow-lg m-4 rounded-2xl border border-hidden">
      <Link
        to={`/watch/${data.videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="md:w-1/3"
      >
        <img
          className="w-full h-full object-cover"
          src={data.videoThumbNail}
          alt={data.videoTitle}
        />
      </Link>
      <div className="flex flex-col justify-between px-6 py-4 md:w-2/3">
        <div>
          <div className="flex items-center mb-2">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src={data.channelInfo.image}
              alt={data.channelInfo.name}
            />
            <div className="font-bold text-xl">{data.videoTitle}</div>
          </div>
          <p className="text-gray-700 text-base">{data.videoDescription}</p>
        </div>
        <div className="mt-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
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
    </div>
  );
};

export default SerachCard;

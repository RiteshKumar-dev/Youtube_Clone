import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Hooks/useApp";
import getVideosDetails from "../Store/reducers/getVideosDetails";
import recommendedPageVideos from "../Store/reducers/getRecommendedVIdeos";
import Navbar from "../Components/Navbar";

const WatchVideos = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const currentPlaying = useAppSelector(
    (state) => state.youtubeApp.currentPlaying
  );
  const recommendedVideos = useAppSelector(
    (state) => state.youtubeApp.recommendedVideos
  );
  // console.log(currentPlaying);

  useEffect(() => {
    if (id) {
      dispatch(getVideosDetails(id));
    } else {
      navigate("/");
    }
  }, [id, dispatch, navigate]);

  useEffect(() => {
    if (currentPlaying && id) {
      dispatch(recommendedPageVideos(id));
    }
  }, [currentPlaying, dispatch, id]);

  return (
    <>
      {currentPlaying && currentPlaying.videoId === id && (
        <div className="overflow-hidden">
          <Navbar />
          <div className="flex flex-col lg:flex-row mt-4 px-4 lg:px-8">
            {/* Left Side: Video and Comments */}
            <div className="w-full lg:w-3/4 lg:pr-4">
              <div className="flex justify-center">
                <iframe
                  src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                  frameBorder="0"
                  width="800"
                  height="500"
                  allowFullScreen
                  title="Youtube Player"
                  className="w-full h-64 sm:h-96 lg:h-144"
                ></iframe>
              </div>
              <div className="mt-4">
                {/* Video actions: Like, Dislike, Share */}
                <div className="flex justify-between items-center">
                  <h1 className="text-lg font-semibold">
                    {currentPlaying.title}
                  </h1>
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-gray-700 rounded-2xl">
                      Like
                    </button>
                    <button className="px-4 py-2 bg-gray-700 rounded-2xl">
                      Dislike
                    </button>
                    <button className="px-4 py-2 bg-gray-700 rounded-2xl">
                      Share
                    </button>
                  </div>
                </div>
                {/* Comment section */}
                <div className="mt-4">
                  <h2 className="text-lg font-semibold">Comments</h2>
                  {/* Add comment component here */}
                </div>
              </div>
            </div>

            {/* Right Side: Recommended Videos */}
            <div className="w-full lg:w-1/4">
              <h2 className="text-lg font-semibold mb-4">Recommended Videos</h2>
              <div className="flex flex-col space-y-4">
                {recommendedVideos.map((video) => (
                  <div key={video.videoId} className="flex space-x-2">
                    <a
                      href={`https://www.youtube.com/watch?v=${video.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <img
                        className="w-full h-24 object-cover"
                        src={video.thumbnail}
                        alt={video.title}
                      />
                      <div className="mt-2">
                        <h3 className="text-sm font-semibold">{video.title}</h3>
                        <p className="text-xs text-gray-600">
                          {video.channelName}
                        </p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WatchVideos;

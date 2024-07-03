import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Sidenav from "../Components/Sidenav";
import { useAppDispatch, useAppSelector } from "../Hooks/useApp";
import homePageVideos from "../Store/reducers/homePageVideos";
import Spinner from "../Components/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import VideosCard from "../Components/VideosCard";
import { useNavigate } from "react-router-dom";
import { clearVideos } from "../Features/YoutubeApp/youtubeSlice";
import serachVideos from "../Store/reducers/serachVideos";
import SerachCard from "../Components/SerachCard";
const Search = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const searchTerms = useAppSelector((state) => state.youtubeApp.searchTerms);

  useEffect(() => {
    dispatch(clearVideos());
    if (searchTerms === "") navigate("/");
    else {
      dispatch(serachVideos(false));
    }
  }, [dispatch, navigate, searchTerms]);

  useEffect(() => {
    console.log(videos);
  }, [videos]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-7.6vh">
        <Navbar />
      </div>
      <div className="flex flex-grow overflow-hidden">
        {/* Optionally, you can add Sidenav here if needed */}
        <main className="flex-grow overflow-y-auto p-4">
          {videos.length ? (
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(serachVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1"
            >
              {videos.map((video) => (
                <SerachCard data={video} key={video.videoId} />
              ))}
            </InfiniteScroll>
          ) : (
            <div className="flex justify-center items-center h-full">
              <Spinner />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Search;

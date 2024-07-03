import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Sidenav from "../Components/Sidenav";
import { useAppDispatch, useAppSelector } from "../Hooks/useApp";
import homePageVideos from "../Store/reducers/homePageVideos";
import Spinner from "../Components/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import VideosCard from "../Components/VideosCard";

const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(homePageVideos(false));
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-7.6vh">
        <Navbar />
      </div>
      <div className="flex flex-grow">
        {/* <aside className="h-92.5vh">
          <Sidenav />
        </aside> */}
        <main className="flex-grow overflow-y-auto p-4">
          {videos.length ? (
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(homePageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {videos.map((video) => (
                <VideosCard data={video} key={video.videoId} />
              ))}
            </InfiniteScroll>
          ) : (
            <Spinner />
          )}
        </main>
      </div>
    </div>
  );
};

export default Home;

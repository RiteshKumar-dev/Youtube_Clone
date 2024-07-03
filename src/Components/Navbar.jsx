import React from "react";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Hooks/useApp";
import {
  changeSearchTerms,
  clearVideos,
} from "../Features/YoutubeApp/youtubeSlice";
import searchVideos from "../Store/reducers/serachVideos";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerms = useAppSelector((state) => state.youtubeApp.searchTerms);

  const handleSearch = (e) => {
    e.preventDefault();
    if (location.pathname !== "/search") navigate("/search");
    else {
      dispatch(clearVideos());
      dispatch(searchVideos(searchTerms));
    }
  };

  return (
    <div className="flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky">
      <div className="flex gap-8 items-center text-2xl cursor-pointer">
        <div className="hidden lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <Link className="flex gap-2 items-center justify-center" to={"/"}>
          <FaYoutube className="mr-5 text-3xl text-red-500 cursor-pointer" />
          <span className="hidden lg:block">YouTube</span>
        </Link>
      </div>
      <div className="flex items-center gap-5 justify-center">
        <form onSubmit={handleSearch}>
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-2 rounded-full">
            <div className="flex gap-5 items-center pr-5">
              <input
                type="text"
                placeholder="search..."
                className="lg:w-96 bg-zinc-900 focus:outline-none border-none"
                value={searchTerms}
                onChange={(e) => dispatch(changeSearchTerms(e.target.value))}
              />
            </div>
            <div className="flex justify-center items-center bg-gray-600 h-6 mt-2 mb-2 w-px mr-2"></div>
            <button type="submit">
              <MdOutlineSearch className="flex items-center text-2xl hover:text-3xl" />
            </button>
          </div>
        </form>
        <div className="hidden lg:flex w-11 h-11 flex justify-center items-center bg-zinc-700 rounded-full cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
            />
          </svg>
        </div>
      </div>
      <div className="hidden lg:flex flex gap-5 items-center text-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
            />
          </svg>
          <span className="absolute bottom-2 left-2 text-sm bg-red-600 rounded-2xl px-1 cursor-pointer">
            9+
          </span>
        </div>
        <div className="hidden lg:flex gap-2 font-semibold border border-gray-300 rounded-full shadow-md shadow-gray-400 truncate">
          <div className="w-7 h-7 bg-gray-300 overflow-hidden cursor-pointer">
            <img
              className="object-cover w-full h-full"
              src={
                "https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369991.png"
              }
              alt="userImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

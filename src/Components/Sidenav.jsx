import React from "react";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { IoMdStopwatch } from "react-icons/io";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";

const Sidenav = () => {
  return (
    <div className="w-2/12 bg-[#212121] pr-5 overflow-auto pb-8 h-screen">
      <ul className="flex flex-col p-2 border-b-2 border-gray-600 cursor-pointer mt-2">
        <li className="pl-6 py-3 hover:bg-zinc-600 rounded-full">
          <a href="" className="flex items-center gap-5">
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
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span className="text-sm tracking-wider">Home</span>
          </a>
        </li>
        <li className="pl-6 py-3 hover:bg-zinc-600 rounded-full">
          <a href="" className="flex items-center gap-5">
            <SiYoutubeshorts className="" />
            <span className="text-sm tracking-wider">Shorts</span>
          </a>
        </li>
        <li className="pl-6 py-3 hover:bg-zinc-600 rounded-full">
          <a href="" className="flex items-center gap-5">
            <MdOutlineSubscriptions />

            <span className="text-sm tracking-wider">Subscriptions</span>
          </a>
        </li>
      </ul>
      <ul className="flex flex-col p-2 border-b-2 border-gray-600 cursor-pointer mb-1">
        <li className="pl-6 py-3 hover:bg-zinc-600 rounded-full">
          <a href="" className="flex items-center gap-5">
            <MdOutlineVideoLibrary />

            <span className="text-sm tracking-wider">Library</span>
          </a>
        </li>
        <li className="pl-6 py-3 hover:bg-zinc-600 rounded-full">
          <a href="" className="flex items-center gap-5">
            <LuHistory />

            <span className="text-sm tracking-wider">History</span>
          </a>
        </li>
        <li className="pl-6 py-3 hover:bg-zinc-600 rounded-full">
          <a href="" className="flex items-center gap-5">
            <IoMdStopwatch />

            <span className="text-sm tracking-wider">Watch Later</span>
          </a>
        </li>
        <li className="pl-6 py-3 hover:bg-zinc-600 rounded-full">
          <a href="" className="flex items-center gap-5">
            <MdOutlinePlaylistPlay />

            <span className="text-sm tracking-wider">Playlists</span>
          </a>
        </li>
        <li className="pl-6 py-3 hover:bg-zinc-600 rounded-full">
          <a href="" className="flex items-center gap-5">
            <AiOutlineLike />

            <span className="text-sm tracking-wider">Liked Videos</span>
          </a>
        </li>
      </ul>
      <ul className="flex flex-col p-2 border-b-2 border-gray-600 cursor-pointer mb-1">
        <li className="pl-6 py-3 hover:bg-zinc-600 rounded-full">
          <a href="" className="flex items-center gap-5">
            <MdOutlineVideoLibrary />

            <span className="text-sm tracking-wider">Library</span>
          </a>
        </li>
        <li className="pl-6 py-3 hover:bg-zinc-600 rounded-full">
          <a href="" className="flex items-center gap-5">
            <LuHistory />

            <span className="text-sm tracking-wider">History</span>
          </a>
        </li>
        <li className="pl-6 py-3 hover:bg-zinc-600 rounded-full">
          <a href="" className="flex items-center gap-5">
            <IoMdStopwatch />

            <span className="text-sm tracking-wider">Watch Later</span>
          </a>
        </li>
        <li className="pl-6 py-3 hover:bg-zinc-600 rounded-full">
          <a href="" className="flex items-center gap-5">
            <MdOutlinePlaylistPlay />

            <span className="text-sm tracking-wider">Playlists</span>
          </a>
        </li>
        <li className="pl-6 py-3 hover:bg-zinc-600 rounded-full">
          <a href="" className="flex items-center gap-5">
            <AiOutlineLike />

            <span className="text-sm tracking-wider">Liked Videos</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;

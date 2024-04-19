import React from "react";
import Image from "next/image";
import {
  BsEnvelope,
  BsBookmark,
  BsSlashSquare,
  BsTwitterX,
} from "react-icons/bs";
import { BiHash, BiBell, BiUser, BiFoodMenu } from "react-icons/bi";

import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { RiTwitterXFill } from "react-icons/ri";
import { GrHomeRounded } from "react-icons/gr";

interface TwitterSidebarButton {
  id: number;
  title: String;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    id: 1,
    title: "Home",
    icon: <GrHomeRounded />,
  },
  {
    id: 2,
    title: "Explore",
    icon: <BiHash />,
  },
  {
    id: 3,
    title: "Notification",
    icon: <BiBell />,
  },
  {
    id: 4,
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    id: 5,
    title: "Grok",
    icon: <BsSlashSquare />,
  },
  {
    id: 6,
    title: "Lists",
    icon: <BiFoodMenu />,
  },
  {
    id: 7,
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    id: 8,
    title: "Communities",
    icon: <LiaUserFriendsSolid />,
  },
  {
    id: 9,
    title: "Premium",
    icon: <RiTwitterXFill />,
  },
  {
    id: 10,
    title: "Profile",
    icon: <BiUser />,
  },
  {
    id: 11,
    title: "More Options",
    icon: <SlOptions />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-1 ml-28">
          <div className="text-3xl rounded-full h-fit w-fit p-4 hover:bg-gray-800 cursor-pointer transition-all">
            <BsTwitterX />
          </div>
          <div className="mt-2 text-xl pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-start items-center gap-4 rounded-full px-4 py-3 hover:bg-gray-800 w-fit cursor-pointer mt-2"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className=" mt-5 px-3">
              <button className="bg-[#1d9bf0] text-lg py-2 px-3 font-semibold w-full rounded-full">
                Post
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] border-gray-800 h-screen overflow-y-scroll [&::-webkit-scrollbar]:hidden">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-4"></div>
      </div>
    </div>
  );
}

import Image from "next/image";
import React from "react";
import SideBarMenuItem from "./SideBarMenuItem";
import {HomeIcon} from '@heroicons/react/solid'
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";
export default function SideBar() {
  return (
    <div className=" hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24 ">
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/512px-Twitter-logo.svg.png?20220821125553"
          width='50'
          height='50'
        ></Image>
      </div>
      <div className="mt-4 mb-2.5 xl:items-start">
        <SideBarMenuItem text="Home" Icon={HomeIcon} active />
        <SideBarMenuItem text="Explore" Icon={HashtagIcon} />
        <SideBarMenuItem text="Notifications" Icon={BellIcon} />
        <SideBarMenuItem text="Messages" Icon={InboxIcon} />
        <SideBarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SideBarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SideBarMenuItem text="Profile" Icon={UserIcon} />
        <SideBarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden lg:inline">
        Tweet
      </button>
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img
          src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=900&t=st=1678935083~exp=1678935683~hmac=a23c7dabd8c98d02be35d472a7c482c055cc2c7a10f8b174de566d7d4daba709"
          alt="user image"
          className="h-10 w-10 rounded-full xl:mr-2"
        />
        <div className="leading-5  hidden xl:inline ">
          <h4 className="font-bold">youssef askar</h4>
          <p className="text-gray-500 ">@y-as-7</p>
        </div>
          <DotsCircleHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  );
}

import { EmojiHappyIcon, PhotographIcon } from '@heroicons/react/outline';
import React from 'react'

export default function Inputs() {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      <img
        className="rounded-full h-11 cursor-pointer hover:brightness-95"
        src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=900&t=st=1678935083~exp=1678935683~hmac=a23c7dabd8c98d02be35d472a7c482c055cc2c7a10f8b174de566d7d4daba709"
        alt="user-amg"
      />
      <div className="w-full divide-y divide-gray-200">
        <div className="">
          <textarea
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700 "
            rows="2"
            placeholder="whats happening?"
          ></textarea>
        </div>
        <div className="flex justify-between items-center pt-2.5">
          <div className="flex">
            <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
            <EmojiHappyIcon className="h-10 w-10  hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
          </div>
          <button className='bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50' >Tweet</button>
        </div>
      </div>
    </div>
  );
}

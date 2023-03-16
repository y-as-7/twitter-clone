import { SparklesIcon } from '@heroicons/react/outline'
import React from 'react'
import Inputs from './Inputs';
import Post from './Post';

export default function Feed() {
    const posts = [
      {
        id: 1,
        name: "youssef askar",
        username: "y-as-7",
        userImg:
          "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=900&t=st=1678935083~exp=1678935683~hmac=a23c7dabd8c98d02be35d472a7c482c055cc2c7a10f8b174de566d7d4daba709",
        img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
        text:'nice view',
        timestamp:'2 hours ago',
      },
      {
        id: 2,
        name: "youssef askar",
        username: "y-as-7",
        userImg:
          "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=900&t=st=1678935083~exp=1678935683~hmac=a23c7dabd8c98d02be35d472a7c482c055cc2c7a10f8b174de566d7d4daba709",
        img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
        text:'nice view',
        timestamp:'2 days ago',
      },
    ];
  return (
    <div className="xl:ml-[370px] border-l border-gray-200 border-r xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl ">
      <div className='flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
        <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
        <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9'>
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Inputs/>
      {posts.map((post)=>(
        <Post key={post.id} post={post}/>
      ))}
    </div>
  );
}

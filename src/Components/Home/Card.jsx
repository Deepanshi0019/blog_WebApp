import React from 'react';

const Card = ({ blog, onDelete}) => {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md mt-10">
      
      <img
        src={blog.imageUrl}
        alt="Blog Image"
        className="z-0 h-full w-full rounded-md object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-2xl font-semibold text-white">{blog.title}</h1>
        <p className="mt-2 text-sm text-gray-300">
          {blog.content.substring(0, 100)}... {/* Display a snippet of the content */}
        </p>
        <div className='flex justify-between'>
        <button className="mt-2 inline-flex bg-orange-700 px-4 py-2 rounded-full cursor-pointer items-center text-sm font-semibold text-white">
          Read Full →
        </button>

        <button
          className="mt-2 inline-flex cursor-pointer px-4 py-2 rounded-full bg-black items-center text-sm font-semibold text-white"
          onClick={onDelete}
        >
          Delete
        </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

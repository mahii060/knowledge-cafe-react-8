/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from 'react';

const Blog = ({ blog, handleReadTime }) => {
    const { author, author_image, read_time, tags, thumbnail, title, writing_date } = blog
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure><img src={thumbnail} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex justify-between items-center my-3'>
                        <div className='flex items-center gap-3'>
                            <img className='w-10 h-10 rounded-full' src={author_image} alt="" />
                            <div>
                                <p className='text-lg font-bold'>{author}</p>
                                <p><small className='text-gray-500 font-bold'>{writing_date}</small></p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <p className='text-gray-500'>{read_time} min read</p>
                            <p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                    </svg>
                                </span>
                            </p>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <p className='my-3'>
                        {
                            tags.map((tag, index) =>
                                <span
                                    className='text-gray-500'
                                    key={index}>
                                    #{tag}{" "}
                                </span>)
                        }
                    </p>
                    <a onClick={() => handleReadTime(read_time)} className='text-violet-700 font-semibold underline cursor-pointer'>Mark as read</a>
                </div>
            </div>
        </div>
    );
};

export default Blog;
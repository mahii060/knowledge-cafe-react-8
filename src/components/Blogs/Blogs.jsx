/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    return (
        <div className='grid lg:grid-cols-3 px-2 md:px-6 lg:px-12 gap-5 my-5'>
            <div className="blogs-container lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-5 ">
                {
                    blogs.map(blog =>
                        <Blog
                            key={blog.id}
                            blog={blog}
                        ></Blog>)
                }
            </div>
            <div className="cart-container lg:col-span-1">
                <h2 className='text-2xl font-bold text-violet-700 border border-violet-700 bg-violet-100 text-center py-5 rounded-md'>Spent Time on read: 177 min</h2>
                <div className='my-3 bg-gray-200 rounded-md py-5'>
                    <h2 className='text-2xl font-bold text-center'>Bookmarked blogs: 8</h2>
                    <h3 className='text-lg font-bold py-3 px-2 rounded-md my-4 mx-5 bg-white'>Mastering JavaScript: Tips and Tricks for Intermediate Developers</h3>
                    <h3 className='text-lg font-bold py-3 px-2 rounded-md my-4 mx-5 bg-white'>CSS Grid Layout: A Comprehensive Guide</h3>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
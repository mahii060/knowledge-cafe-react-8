/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [readTime, setReadTime] = useState(0);
    const [bookmarks, setBookmark] = useState([]);
    const [bookmarkQnty, setBookmarkQnty] = useState(0)


    const handleBookmark = (title) => {
        setBookmark([title, ...bookmarks])
        const previoustBookmarkQnty = bookmarkQnty;
        const totalBookmarkQnty = previoustBookmarkQnty + 1;
        setBookmarkQnty(totalBookmarkQnty)
    }

    const handleReadTime = (read_time) => {
        const previousTime = readTime;
        const totalTime = previousTime + parseInt(read_time)
        setReadTime(totalTime)
    }

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
                            handleReadTime={handleReadTime}
                            handleBookmark={handleBookmark}
                        ></Blog>)
                }
            </div>
            <div className="cart-container lg:col-span-1">
                <h2 className='text-2xl font-bold text-violet-700 border border-violet-700 bg-violet-100 text-center py-5 rounded-md'>Spent Time on read: {readTime} min</h2>
                <div className='my-3 bg-gray-200 rounded-md py-5'>
                    <h2 className='text-2xl font-bold text-center'>Bookmarked blogs: {bookmarkQnty}</h2>
                    {
                        bookmarks.map((bookmark, index) =>
                            <h3 className='text-lg font-bold py-3
                        px-2 rounded-md my-4 mx-5 bg-white' key={index}>
                                {bookmark}
                            </h3>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;
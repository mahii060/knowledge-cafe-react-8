/* eslint-disable no-unused-vars */
import React from 'react';
import image from '../../../src/images/dp.jpg'

const Header = () => {
    return (
        <div className='my-5'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl">Knowledge Cafe</a>
                </div>
                <div className="flex-none gap-2">
                    <div className='md:flex gap-4'>
                        <a className='text-black hover:text-orange-600 block' href="./home">Home</a>
                        <a className='text-black hover:text-orange-600 block' href="./home">Menu</a>

                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Profile Picture" src={image} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='border border-gray-300' />
        </div>
    );
};

export default Header;
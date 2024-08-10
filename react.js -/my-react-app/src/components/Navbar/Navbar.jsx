import React, { useState } from 'react';
import logo from "../../assets/tinywow_logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';
import { FaCaretDown } from "react-icons/fa";

const Menu = [
    {
        id: 1,
        name: 'Home',
        link: '/#'
    },
    {
        id: 2,
        name: 'Top Rated',
        link: '/#services'
    },
    {
        id: 4,
        name: 'Mens Wear',
        link: '/#'
    },
];

const DropdownLinks = [
    {
        id: 1,
        name: 'Trending Products',
        link: '/#',
    },
    {
        id: 2,
        name: 'Best Selling',
        link: '/#',
    },
    {
        id: 3,
        name: 'Top Rated',
        link: '/#',
    },
];

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div className=' bg-white dark:bg-gray-900 dark:text-white duration-200 shadow-md relative z-40'>
            {/* Upper Navbar */}
            <div className='bg-gray-500/40 p-4 rounded py-2'>
                <div className='container flex justify-between items-center mx-auto px-4'>
                    <div>
                        <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                            <img src={logo} className='w-[45px] uppercase' alt="Logo" />
                            KingsMan
                        </a>
                    </div>
                    {/* Search bar */}
                    <div className='flex items-center gap-4'>
                        <div className='relative group hidden sm:block'>
                            <input type="text" placeholder='Search'
                                className='w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800' />
                            <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 transform -translate-y-1/2 right-3' />
                        </div>
                        {/* Order button */}
                        <button onClick={handleModalOpen}
                            className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                            <span className='group-hover:block  transition-all duration-200'>Order</span>
                            <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
                        </button>
                        {/* DarkMode Switch */}
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
            {/* Lower Navbar */}
            <div className='flex justify-center bg-gray-400/40'>
                <ul className='sm:flex hidden items-center gap-4'>
                    {Menu.map((data) => (
                        <li key={data.id}>
                            <a href={data.link}
                                className='inline-block px-4 hover:text-primary duration-200'>
                                {data.name}
                            </a>
                        </li>
                    ))}
                    {/* Simple Dropdown And Links */}
                    <li className='group relative cursor-pointer'>
                        <a href="#" className='flex items-center gap-[2px] py-2'>Trending Products
                            <span>
                                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                            </span>
                        </a>
                        <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white dark:bg-gray-800 p-2 text-black dark:text-white shadow-md'>
                            <ul>
                                {DropdownLinks.map((data) => (
                                    <li key={data.id}>
                                        <a href={data.link}
                                            className='inline-block w-full rounded-md p-2 hover:bg-primary/20 dark:hover:bg-gray-700'>
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-80">
                        <div className="flex justify-between items-center mb-4">
                              <h2 className="text-lg font-semibold">Order Now</h2>
                            <button onClick={handleModalClose}>&times;</button>
                        </div>
                        <form>
                            <div className="mb-4">
                                <input type="text" placeholder="Name" className="w-full border border-gray-300 rounded py-2 px-3" />
                            </div>
                            <div className="mb-4">
                                <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded py-2 px-3" />
                            </div>
                            <div className="mb-4">
                                <input type="text" placeholder="Address" className="w-full border border-gray-300 rounded py-2 px-3" />
                            </div>
                            <button type="submit" className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full w-full">Order Now</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar;

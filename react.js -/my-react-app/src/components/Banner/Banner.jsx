import React from 'react';
import Women1 from '../../assets/cardSection/BRILLIANT_BLUE_SUIT.jpg';

const SuitOutlet = () => {
    return (
        <div className="text-gray-900 dark:text-white p-8 bg-white dark:bg-gray-800">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-up">
                    <img src={Women1} alt="Suit Outlet" className="rounded shadow-lg w-[35rem] h-[40rem]" />
                </div>
                <div className="md:w-1/2 md:pl-8" data-aos="fade-up">
                    <h1 className="text-4xl font-bold mb-4">Suit Outlet Sale upto 50% Off</h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        Discover our exclusive collection of suits at unbeatable prices. Shop now and elevate your style with top-quality suits.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center" data-aos="fade-up">
                            <div className="bg-purple-500 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                                <span className="text-white">🔒</span>
                            </div>
                            <span>Quality Products</span>
                        </li>
                        <li className="flex items-center" data-aos="fade-up">
                            <div className="bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                                <span className="text-white">🚀</span>
                            </div>
                            <span>Fast Delivery</span>
                        </li>
                        <li className="flex items-center" data-aos="fade-up">
                            <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                                <span className="text-white">💳</span>
                            </div>
                            <span>Easy Payment Methods</span>
                        </li>
                        <li className="flex items-center" data-aos="fade-up">
                            <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                                <span className="text-white">🎁</span>
                            </div>
                            <span>Exclusive Offers</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SuitOutlet;

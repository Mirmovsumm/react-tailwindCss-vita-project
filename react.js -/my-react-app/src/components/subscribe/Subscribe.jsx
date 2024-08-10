
import React from 'react';

const SubscriptionForm = () => {
    return (
        <div className="flex items-center justify-center dark:bg-gray-800 p-8">
            <div data-aos='fade-up' className="bg-white  p-6 rounded-lg shadow-lg w-[50rem] " >
                <h2 className="text-2xl font-bold text-center mb-4 text-orange-500">Get Notified About New Products</h2>
                <form className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Enter your first name"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300 ease-in-out"
                    />
                    <input
                        type="text"
                        placeholder="Enter your last name"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300 ease-in-out"
                    />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300 ease-in-out"
                    />
               
                    <button
                        type="submit"
                        className="w-full p-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition duration-300 ease-in-out"
                    >
                        Subscribe
                    </button>
                </form>
                <p className="text-center text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </div>
        </div>
    );
};

export default SubscriptionForm;

import React from 'react';
import Women1 from '../../assets/cardSection/BRILLIANT_BLUE_SUIT.jpg';
import Women5 from '../../assets/cardSection/LIGHT_BLUE_SUIT.jpg';
import Women2 from '../../assets/cardSection/LOOK.jpg';
import Women3 from '../../assets/cardSection/MENS_TAN_EDITED.jpg';
import Women4 from '../../assets/cardSection/MENS_CLASSIC_BLACK_SUIT.jpg.webp';
import '../../../../my-react-app/src/index.css';
import { FaStar } from "react-icons/fa";

const ProductsData = [
    {
        id: 1,
        title: "Brilliant Blue Suit",
        color: "White",
        rating: 5,
        image: Women1,
        price: "$299"
    },
    {
        id: 2,
        title: "Look Suit",
        color: "Red",
        rating: 3.5,
        image: Women2,
        price: "$349"
    },
    {
        id: 3,
        title: "Men's Tan Suit",
        color: "Brown",
        rating: 4.7,
        image: Women3,
        price: "$399"
    },
    {
        id: 4,
        title: "Men's Classic Black Suit",
        color: "Yellow",
        rating: 4.4,
        image: Women4,
        price: "$459"
    },
    {
        id: 5,
        title: "Light Blue Suit",
        color: "Pink",
        rating: 3.5,
        image: Women5,
        price: "$279"
    },
];

const Products = () => {
    return (
        <div className='text-gray-900 dark:bg-gray-800 py-10'>
            <div className='container mx-auto'>
                <div data-aos='fade-up' className='text-center mb-10 max-w-[600px] mx-auto'>
                    <h1 className='text-4xl  font-bold'>The Best Italian Fabric Brands</h1>
                    <h2 className='text-2xl font-semibold text-primary mt-2'>Exclusive Collection</h2>
                </div>
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-8'>
                        {ProductsData.map((data) => (
                            <div
                                data-aos='fade-up'
                                data-aos-delay={data.aosDelay}
                                key={data.id}
                                className='bg-white dark:bg-gray-800 rounded-lg p-4 custom-shadow transition-transform duration-300 ease-in-out'
                            >
                                <img src={data.image} alt={data.title} className='h-[260px] w-[200px] object-cover rounded-md'/>
                                <div className='mt-4 text-center'>
                                    <h3 className='font-semibold text-gray-900 dark:text-white'>{data.title}</h3>
                                    <p className='text-sm text-gray-600 dark:text-gray-300'>{data.color}</p>
                                    <p className='text-lg font-bold text-gray-900 dark:text-white'>{data.price}</p>
                                    <div className='flex justify-center items-center gap-1 mt-2'>
                                        {Array(Math.round(data.rating)).fill().map((_, i) => (
                                            <FaStar key={i} className='text-yellow-400'/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;

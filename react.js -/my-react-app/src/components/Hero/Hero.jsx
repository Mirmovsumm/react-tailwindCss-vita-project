import React from 'react';
import Image1 from '../../assets/hero/banner28_gb.jpg';
import Image2 from '../../assets/hero/banner26_gb.jpg';
import Image3 from '../../assets/hero/banner33_gb.jpg';
import Slider from "react-slick";

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: 'AMBER',
        description: 'SPRING/ SUMMER COLLECTION'
    },
    {
        id: 2,
        img: Image2,
        title: 'ELEGANT',
        description: "Discoverd the latest items from the new casual collection"
    },
    {
        id: 3,
        img: Image3,
        title: 'CASUAL',
        description: 'Discoverd the latest items from the new casual collection'
    },
];

const Hero = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true
    };

    return (
        <div className='relative overflow-hidden min-h-screen  dark:bg-gray-800  text-white flex items-center justify-center'>
            <div className='w-full h-full'>
                <Slider {...settings} className="h-full">
                    {ImageList.map((data) => (
                        <div key={data.id} className="relative h-full w-full">
                            <img src={data.img} alt="Hero" className='object-cover w-full h-screen' />
                            <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 p-4 text-center'>
                                <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-4'>{data.title}</h1>
                                <p className='text-sm sm:text-lg mb-4'>{data.description}</p>
                                <button className='bg-gradient-to-r from-amber-600  to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;

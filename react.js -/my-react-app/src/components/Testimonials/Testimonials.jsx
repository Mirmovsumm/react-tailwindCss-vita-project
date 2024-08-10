

import React from 'react';
import Slider from 'react-slick';
import Customer1 from '../../assets/IMG/indir3.jpg';
import Customer2 from '../../assets/IMG/indir.jpg';
import Customer3 from '../../assets/IMG/INSAN1.jpg';
import Customer4 from '../../assets/IMG/INSAN4.jpg';

const testimonials = [
  { name: 'John Doe', text: 'The suits are of excellent quality and fit perfectly. Highly recommended!', img: Customer1 },
  { name: 'Jane Smith', text: 'I found the perfect suit for my wedding here. Great service and fast delivery.', img: Customer2 },
  { name: 'Mark Johnson', text: 'Amazing collection of suits at unbeatable prices. I will definitely shop here again.', img: Customer3 },
  { name: 'Mark Johnson', text: 'Amazing collection of suits at unbeatable prices. I will definitely shop here again.', img: Customer4 },
  // Add more testimonials here, up to 10
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-gray-400/40 dark:bg-gray-800 py-12 bg-white">
      <div data-aos='fade-up' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-yellow-500 tracking-wide uppercase">What our customers are saying</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Testimonials</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Discover why our customers love our suits and service. Here are some of their testimonials.</p>
        </div>
        <Slider {...settings} className="mt-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img className="w-12 h-12 rounded-full" src={testimonial.img} alt={testimonial.name} />
                  <div className="ml-4">
                    <p className="text-xl font-medium text-gray-900">{testimonial.name}</p>
                  </div>
                </div>
                <blockquote className="mt-4">
                  <p className="text-lg text-gray-700">{testimonial.text}</p>
                </blockquote>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;



  import React from 'react'
import Img1 from '../../assets/TopProductsIMG/tinywow_change_bg_photo_61371835.png'
import Img2 from '../../assets/TopProductsIMG/tinywow_change_.png'
import Img3 from '../../assets/TopProductsIMG/tinywow_change_bg.png'
import { FaStar } from 'react-icons/fa6'

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: 'Tweed Peaky Blinders Jacket',
        description: 'Crafted from luxurious wool, our Tweed Peaky Blinders Jacket is...'
    },
    {
        id: 2,
        img: Img2,
        title: 'Brown Herringbone Tweed Jacket',
        description: 'Made with a classic herringbone pattern, this jacket offers...'
    },
    {
        id: 3,
        img: Img3,
        title: 'Black Tweed Jacket',
        description: 'A versatile and stylish addition to any wardrobe, our Black...'
    }
]

const TopProducts = () => {
    return (
        <div className='bg-white text-left text-gray-900 dark:bg-gray-800 p-6'>
            <div className='container mx-auto'>
                {/* header section */}  
                <div className='text-left mb-24 max-w-[600px] '>
                    <h1 data-aos='fade-up' className='text-4xl font-bold text-primary'>Best Jackets</h1>
                    <p data-aos='fade-up' className='text-xs font-bold text-gray-400'>Flourish the stylish upside with our Highlander Heavy Honeycomb Charcoal Tweed Jacket. On top of that, the jacket is made from a blend of wool and polyester fabrics that offers a dense.</p>
                </div >
                {/* body section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                    {
                        ProductsData.map((data) => (
                            <div key={data.id} data-aos='fade-up' className='text-center rounded-2xl bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-500 hover:text-white relative shadow-lg duration-300 group max-w-[300px] transition-transform transform hover:-translate-y-2'>
                                {/* Image section */}
                                <div className='overflow-hidden rounded-t-2xl'>
                                    <img src={data.img} alt={data.title} className='max-w-full h-[15rem] block mx-auto transform group-hover:scale-105 duration-300 drop-shadow-md object-cover'/>
                                </div>
                                {/* Details section */}
                                <div className='p-4 text-center'>
                                    {/* start rating */}
                                    <div className='w-full flex items-center justify-center gap-1 mb-2'>
                                        {Array.from({ length: 5 }, (_, index) => (
                                            <FaStar key={index} className={`{text-yellow-500 ${index < 4 ? 'text-yellow-500' : 'text-gray-300'}`} />
                                        ))}
                                    </div>
                                    <h1 className='text-xl font-bold group-hover:text-gray-900  mb-2'>{data.title}</h1>
                                    <p className='text-gray-500 group-hover:text-gray-900 duration-300 text-sm line-clamp-2'>{data.description}</p>
                                </div>
                                <button className="bg-orange-500 hover:bg-white text-white hover:text-orange-500 font-bold py-2 px-4 rounded-full mb-4 transition-all duration-500 transform hover:scale-105">
                                    Order Now
                                </button>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default TopProducts

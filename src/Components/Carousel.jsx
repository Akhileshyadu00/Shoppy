import React, { useContext, useEffect } from 'react';
import { DataContext } from '../Utils/DataContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Carousel() {
  const { data, fetchProduct} = useContext(DataContext);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
   <div className="max-w-screen-xl mx-auto my-6 min-h-[600px]">
        <Slider {...settings}>
          {data && data.slice(0, 7).map((item) => {
            return<div
              key={item.id}
              className="bg-gradient-to-r from-[#0f0c27] via-[#330b26] to-[#0f0c27] text-white py-10 px-6"
            >
              <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
                <div className="space-y-4 max-w-md text-center md:text-left">
                  <h2 className="text-xl font-bold">Hii tetsing</h2>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm">{item.description?.slice(0, 100)}...</p>
                  <p className="text-lg font-semibold text-red-400">${item.price}</p>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition">
                    Shop Now
                  </button>
                </div>
               <img
  src={item.image}
  alt={item.title}
  className="w-48 h-48 object-contain rounded-full hover:scale-105 transition-all shadow-2xl shadow-amber-700"
/>

              </div>
            </div>
})}
        </Slider>
    </div>
  );
}

export default Carousel;

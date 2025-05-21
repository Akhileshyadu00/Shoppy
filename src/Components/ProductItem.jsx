import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

function ProductItem({ product }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 border border-gray-300 rounded-2xl overflow-hidden shadow hover:shadow-2xl transition duration-300 cursor-pointer p-4 bg-white">
      
      {/* Image Section */}
      <div className="flex items-center justify-center bg-gray-100 rounded-lg p-4 w-full sm:w-2/3">
        <img
          src={product.image}
          alt={product.title}
          className="h-32 sm:h-40 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Details Section */}
      <div className="flex flex-col justify-between w-full sm:w-2/3">
        <div>
          <h2 className="text-base font-semibold text-gray-800 line-clamp-2 mb-2">
            {product.title}
          </h2>
          <p className="text-lg font-bold text-gray-700 mb-4">Rs. {product.price}</p>
        </div>

        {/* Button */}
        <button className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition">
          <IoCartOutline className="text-xl" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;

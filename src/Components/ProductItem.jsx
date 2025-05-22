import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Utils/CartContext';

function ProductItem({ product }) {
  const navigate = useNavigate();
  const {addToCart,cartItem} = useCart()


  console.log(cartItem);
  

  return (
    <div className="flex flex-col border border-gray-300 rounded-2xl overflow-hidden shadow hover:shadow-2xl transition duration-300 cursor-pointer p-4 bg-white h-full">
      
      {/* Image */}
      <div
        onClick={() => navigate(`/products/${product.id}`)}
        className="flex items-center justify-center bg-gray-100 rounded-lg p-4 aspect-square hover:scale-105 transition-transform duration-300"
      >
        <img
          src={product.image}
          alt={product.title}
          loading="lazy" // ✅ Lazy load added
          className="h-32 sm:h-40 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Title and Price */}
      <div className="flex flex-col justify-between flex-grow mt-4">
        <div onClick={() => navigate(`/products/${product.id}`)} className="cursor-pointer">
          <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
            {product.title}
          </h2>
          <p className="text-md font-bold text-gray-700 mb-4">Rs. {product.price}</p>
        </div>

        {/* Add to Cart Button */}
        <button
  onClick={() => addToCart(product)}
  className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition mt-auto"
>
  <IoCartOutline className="text-xl" />
  Add to Cart
</button>

      </div>
    </div>
  );
}

export default ProductItem;

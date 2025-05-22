import React from 'react';
import { useCart } from '../Utils/CartContext';
import { FaRegTrashAlt } from 'react-icons/fa';

function Cart() {
  const {
    cartItem,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  } = useCart();

  const getTotalPrice = () => {
    return cartItem
      .reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
      .toFixed(2);
  };

  return (
    <div className="mt-10 max-w-6xl mx-auto px-4 mb-10">
      {cartItem.length > 0 ? (
        <>
          <h1 className="text-2xl font-bold mb-6">🛒 My Cart ({cartItem.length} items)</h1>

          <div className="space-y-4">
            {cartItem.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between bg-gray-100 p-4 rounded-xl shadow"
              >
                <div className="flex items-center gap-4 w-full sm:w-2/3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 rounded-xl object-contain bg-white p-2"
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <h2 className="font-semibold text-gray-800 text-md line-clamp-2">
                      {item.title}
                    </h2>
                    <p className="text-red-500 font-bold mt-1">Rs. {item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => incrementQuantity(item.id)}
                      className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                    >
                      +
                    </button>
                    <span className="px-2">{item.quantity || 1}</span>
                    <button
                      onClick={() => decrementQuantity(item.id)}
                      className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                    >
                      -
                    </button>
                  </div>

                  <span
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-2xl cursor-pointer ml-4"
                  >
                    <FaRegTrashAlt />
                  </span>
                </div>

                <div className="mt-2 sm:mt-0 text-right w-full sm:w-1/3">
                  <p className="text-lg font-semibold text-gray-700">
                    Subtotal: Rs. {(item.price * (item.quantity || 1)).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right">
            <h2 className="text-xl font-bold">Total: Rs. {getTotalPrice()}</h2>
            <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition">
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <div className="text-center text-xl text-gray-500 mt-20">🛒 Your cart is empty</div>
      )}
    </div>
  );
}

export default Cart;

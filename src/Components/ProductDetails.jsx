import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoCartOutline } from "react-icons/io5";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams(); //

  const fetchSingleProduct = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.in/api/products/${id}`);
      setProduct(res.data.product);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-xl">Loading...</div>;
  }

  if (!product) {
    return (
      <div className="text-center py-10 text-red-500 text-xl">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Image */}
      <div className="flex justify-center items-center bg-gray-100 p-6 rounded-lg w-full md:w-1/2">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="h-64 object-contain"
        />
      </div>

      {/* Details */}
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          {product.title}
        </h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-semibold text-gray-600 mb-6">
          Rs. {product.price}
        </p>

        <div className="flex items-center gap-4">
          <div>
            <label htmlFor="" className="text-sm font-medium text-gray-700">
              Quantity: 
            </label>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border border-gray-300 rounded-2xl px-4 py-1 w-20 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>
        <div>
        <button className="bg-red-500 hover:bg-red-800 text-white mt-4 px-6 py-2 rounded shadow transition">
          <IoCartOutline />
        </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

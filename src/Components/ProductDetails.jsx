import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

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
    return <div className="text-center py-10 text-red-500 text-xl">Product not found</div>;
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
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-semibold text-gray-600 mb-6">Rs. {product.price}</p>
        <button className="bg-red-300 hover:bg-red-600 text-white px-6 py-2 rounded shadow transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;

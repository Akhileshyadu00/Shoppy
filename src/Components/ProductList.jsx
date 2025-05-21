import React, { useEffect } from 'react';
import { useData } from '../Utils/DataContext';
import ProductItem from './ProductItem';

function ProductList() {
  const { data, fetchProduct } = useData();

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {data?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-60 text-lg font-semibold text-gray-600">
          No items found
        </div>
      )}
    </div>
  );
}

export default ProductList;

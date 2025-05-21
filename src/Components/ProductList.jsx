import React, { useEffect, useState } from 'react';
import { useData } from '../Utils/DataContext';
import ProductItem from './ProductItem';
import Pagination from './Pagination';

function ProductList() {
  const { data, fetchProduct } = useData();
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    fetchProduct();
  }, []);

  const pageHandle = (selectedPage) => {
    setPage(selectedPage);
  };

  const totalPages = Math.ceil(data?.length / itemsPerPage) || 1;

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedProducts = data?.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {data?.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paginatedProducts.map((product, index) => (
              <ProductItem key={index} product={product} />
            ))}
          </div>

          {/* Pagination Below Grid */}
          <div className="mt-8 flex justify-center">
            <Pagination
              pageHandler={pageHandle}
              page={page}
              dynamicPage={totalPages}
            />
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-60 text-lg font-semibold text-gray-600">
          Loading......
        </div>
      )}
    </div>
  );
}

export default ProductList;
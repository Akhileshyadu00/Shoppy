import React, { useEffect } from 'react';
import { useData } from '../Utils/DataContext';

function Category() {
  const { data, fetchProduct } = useData();

  const getUniqueCategory = (data, property) => {
    const newVal = data?.map((curElem) => curElem[property]);
    const uniqueValues = [...new Set(newVal)];
    return uniqueValues;
  };

  const categoryOnlyData = getUniqueCategory(data, 'category');

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="bg-[#101829] py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
        {categoryOnlyData.map((item, index) => (
          <button
            key={index}
            className="uppercase bg-gradient-to-r from-[#0f0c27] via-[#330b26] to-[#0f0c27] text-white px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-amber-600 transition duration-300"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Category;

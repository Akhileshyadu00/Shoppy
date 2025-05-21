import React from 'react';

const getPages = (current, total) => {
  const pages = [];

  if (total <= 6) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    if (current <= 3) {
      pages.push(1, 2, 3, '...', total);
    } else if (current >= total - 2) {
      pages.push(1, '...', total - 2, total - 1, total);
    } else {
      pages.push(1, '...', current - 1, current, current + 1, '...', total);
    }
  }

  return pages;
};

function Pagination({ page, pageHandler, dynamicPage }) {
  const pages = getPages(page, dynamicPage);

  return (
    <div className="mt-10 flex items-center justify-center gap-2 flex-wrap">
      <button
        onClick={() => pageHandler(page - 1)}
        disabled={page === 1}
        className={`px-3 py-1 rounded ${page === 1 ? 'bg-red-200' : 'bg-red-600'} text-white`}
      >
        Prev
      </button>

      {pages.map((item, index) => (
        <span
          key={index}
          onClick={() => typeof item === 'number' && pageHandler(item)}
          className={`px-3 py-1 rounded cursor-pointer ${
            item === page ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
          } ${item === '...' ? 'pointer-events-none' : ''}`}
        >
          {item}
        </span>
      ))}

      <button
        onClick={() => pageHandler(page + 1)}
        disabled={page === dynamicPage}
        className={`px-3 py-1 rounded ${page === dynamicPage ? 'bg-red-300' : 'bg-red-600'} text-white`}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;

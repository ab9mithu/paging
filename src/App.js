import React, { useState } from 'react';

const ItemsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalItems = 100;

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const displayedItems = Array.from({ length: totalItems }).slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const pagesToShow = 10; // Display 10 pages at a time
  const halfPagesToShow = Math.floor(pagesToShow / 2);
  let startPage = Math.max(1, currentPage - halfPagesToShow);
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  if (endPage - startPage + 1 < pagesToShow) {
    startPage = Math.max(1, endPage - pagesToShow + 1);
  }

  return (
    <div>
      <h2>Page {currentPage}</h2>
      <ul>
        {displayedItems.map((item, index) => (
          <li key={index}>{item /* Replace with actual item content */}</li>
        ))}
      </ul>
      <div>
        {startPage > 1 && (
          <button onClick={() => goToPage(1)} disabled={currentPage === 1}>
            1
          </button>
        )}
        {startPage > 2 && <span> </span>}
        {Array.from({ length: endPage - startPage + 1 }).map((_, index) => (
          <button
            key={startPage + index}
            onClick={() => goToPage(startPage + index)}
            disabled={startPage + index === currentPage}
          >
            {startPage + index}
          </button>
        ))}
        {endPage <= totalPages - 1 && <span> </span>}
        {endPage < totalPages && (
          <button onClick={() => goToPage(totalPages)} disabled={currentPage === totalPages}>
            {totalPages}
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemsList;

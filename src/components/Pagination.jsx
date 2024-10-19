import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [];

    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    
    if (endPage - startPage < maxVisiblePages - 1) {
        const diff = maxVisiblePages - (endPage - startPage + 1);
        startPage = Math.max(1, startPage - diff);
    }

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return (
        <div className="flex justify-center mt-4 sm:mt-8">
            {currentPage > 1 && (
                <button 
                    onClick={() => onPageChange(currentPage - 1)} 
                    className="mx-1 px-4 py-2 border rounded-lg text-blue-500 hover:bg-blue-500 hover:text-white"
                >
                    Prev
                </button>
            )}
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`mx-1 px-4 py-2 border rounded-lg transition-colors 
                        ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white'}`}
                >
                    {page}
                </button>
            ))}
            {currentPage < totalPages && (
                <button 
                    onClick={() => onPageChange(currentPage + 1)} 
                    className="mx-1 px-4 py-2 border rounded-lg text-blue-500 hover:bg-blue-500 hover:text-white"
                >
                    Next
                </button>
            )}
        </div>
    );
};

export default Pagination;

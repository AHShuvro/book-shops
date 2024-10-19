import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [...Array(totalPages).keys()].map(num => num + 1); 

    return (
        <div className="flex justify-center mt-4 sm:mt-8">
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
        </div>
    );
};

export default Pagination;

import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book, toggleWishlist, isWishlisted }) => {
    const coverImageUrl = book.formats['image/jpeg'];

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
            <img src={coverImageUrl} alt={book.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
                <h2 className="font-bold text-lg md:text-2xl text-gray-800 hover:text-blue-600 transition-colors">{book.title}</h2>
                <p className="text-gray-700 text-lg font-medium mt-1">Author: {book.authors.map(author => author.name).join(', ')}</p>
                <p className="text-gray-500 mt-1">Genre: {book.subjects.join(', ')}</p>
                <p className="text-gray-500 mt-1"><span className='font-semibold'>Id:</span> {book.id}</p>
                <div className="flex justify-between items-center mt-4">
                    <Link to={`/book/${book.id}`} className="text-blue-500 font-medium ">View Details</Link>
                    <button 
                        onClick={() => toggleWishlist(book.id)} 
                        className={`text-lg ${isWishlisted ? 'text-red-500' : 'text-gray-500'} transition-colors duration-300`}
                    >
                        {isWishlisted ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;

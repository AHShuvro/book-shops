import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BookDetails = ({ books, toggleWishlist }) => {
    const { id } = useParams();
    const book = books.find(b => b.id === Number(id));

    if (!book) return <div>Book not found</div>;
    console.log(book)

    return (
        <div className="bg-white border rounded shadow p-4">
            <img src={book.formats['image/jpeg']} alt={book.title} className="w-full max-h-[600px] object-cover rounded mb-2" />
            <h2 className="font-bold text-xl">{book.title}</h2>
            <p className="text-gray-700"><span className='font-medium'>Author:</span> {book.authors.map(author => author.name).join(', ')}</p>
            <p className="text-gray-500"><span className='font-medium'>Genre:</span> {book.subjects.join(', ')}</p>
            <p className="text-gray-500"><span className='font-medium'>id:</span> {book.id}</p>
            <button onClick={() => toggleWishlist(book.id)} className="btn mt-4">
                ❤️
            </button>
            <Link to="/" className="btn mt-2 ml-2">Back to Home</Link>
        </div>
    );
};

export default BookDetails;

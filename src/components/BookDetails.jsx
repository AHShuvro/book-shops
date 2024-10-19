import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BookDetails = ({ books, toggleWishlist }) => {
    const { id } = useParams();
    const book = books.find(b => b.id === Number(id));

    if (!book) return <div className="text-center text-red-500">Book not found</div>;

    return (
        <div className="max-w-2xl mx-auto bg-white border rounded shadow-lg p-6">
            <img 
                src={book.formats['image/jpeg']} 
                alt={book.title} 
                className="w-full max-h-[600px] object-cover rounded-lg mb-4" 
            />
            <h2 className="font-bold text-2xl mb-2">{book.title}</h2>
            <p className="text-gray-700 mb-2">
                <span className='font-medium'>Author:</span> {book.authors.map(author => (
                    <span key={author.name}>{author.name} ({author.birth_year} - {author.death_year})</span>
                )).reduce((prev, curr) => [prev, ', ', curr])}
            </p>
            <p className="text-gray-500 mb-2">
                <span className='font-medium'>Genres:</span> {book.subjects.join(', ')}
            </p>
            <p className="text-gray-500 mb-2">
                <span className='font-medium'>Bookshelves:</span> {book.bookshelves.join(', ')}
            </p>
            <p className="text-gray-500 mb-2">
                <span className='font-medium'>Languages:</span> {book.languages.join(', ')}
            </p>
            <p className="text-gray-500 mb-2">
                <span className='font-medium'>Download Count:</span> {book.download_count}
            </p>
            <p className="text-gray-500 mb-4">
                <span className='font-medium'>Media Type:</span> {book.media_type}
            </p>
            <div className="flex space-x-2">
            <button onClick={() => toggleWishlist(book.id)} className="btn mt-4">
                ❤️
            </button>
                <Link to="/" className="flex items-center justify-center w-32 h-10 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default BookDetails;

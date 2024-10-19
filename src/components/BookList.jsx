import React, { useState } from 'react'
import Pagination from './Pagination';
import BookCard from './BookCard';

function BookList({ books, wishlist, toggleWishlist }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [genre, setGenre] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    
    const genres = Array.from(new Set(books.flatMap(book =>
        book.subjects?.filter(subject => subject.includes('Drama') || subject.includes('Fiction')) || []
    )));

    const filteredBooks = books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesGenre = genre === 'All' || (book.subjects && book.subjects.includes(genre));
        return matchesSearch && matchesGenre;
    });

    const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

    const currentBooks = filteredBooks.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <div className="p-4">
            <input
                type="text"
                placeholder="Search by title..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="border p-2 rounded w-full mb-4"
            />
            <select
                value={genre}
                onChange={e => setGenre(e.target.value)}
                className="border p-2 rounded mb-4 w-full md:w-auto md:max-w-xs"
            >
                <option value="All">All Genres</option>
                {genres.map((g, index) => (
                    <option key={index} value={g}>{g}</option>
                ))}
            </select>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentBooks.map(book => (
                    <BookCard key={book.id} book={book} toggleWishlist={toggleWishlist} isWishlisted={wishlist.includes(book.id)} />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    )
}

export default BookList
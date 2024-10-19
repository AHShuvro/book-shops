import React from 'react';
import BookCard from './BookCard';

const Wishlist = ({ books, wishlist, toggleWishlist }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {wishlist.length === 0 ? (
                    <p>No books in wishlist</p>
                ) : (
                    wishlist.map(id => {
                        const book = books.find(b => b.id === id);
                        return (
                            <BookCard key={book.id} book={book} toggleWishlist={toggleWishlist} isWishlisted={true} />
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default Wishlist;

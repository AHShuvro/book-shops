import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Wishlist from './components/Wishlist';
import Navbar from './components/Navbar';

function App() {
    const [books, setBooks] = useState([]);
    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('https://gutendex.com/books');
                const data = await response.json();
                setBooks(data.results); 
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    console.log(books)

    const toggleWishlist = (id) => {
        const updatedWishlist = wishlist.includes(id)
            ? wishlist.filter(item => item !== id)
            : [...wishlist, id];
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    };

    return (
        <Router>
          <Navbar />
            <div className="container mx-auto p-4">
                
                <Routes>
                    <Route path="/" element={<BookList books={books} wishlist={wishlist} toggleWishlist={toggleWishlist} />} />
                    <Route path="/book/:id" element={<BookDetails books={books} toggleWishlist={toggleWishlist} />} />
                    <Route path="/wishlist" element={<Wishlist books={books} wishlist={wishlist} toggleWishlist={toggleWishlist} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

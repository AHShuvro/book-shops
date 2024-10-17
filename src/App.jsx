
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Wishlist from './components/Wishlist';
import { useEffect, useState } from 'react';

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
      <div className='container mx-auto p-4'>
        <Navbar />
        <Routes>
          <Route path="/" element={<BookList books={books} wishlist={wishlist} toggleWishlist={toggleWishlist} />} />
          <Route path="/book/:id" element={<BookDetails books={books} toggleWishlist={toggleWishlist} />} />
          <Route path="/wishlist" element={<Wishlist books={books} wishlist={wishlist} toggleWishlist={toggleWishlist} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

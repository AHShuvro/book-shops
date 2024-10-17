import React from 'react'

function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 left-0 right-0 z-20 shadow-md" tabIndex={0}>
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link to="/">
                    <h1 className="text-2xl font-bold text-gray-800">Book Shop</h1>
                </Link>
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="text-2xl text-gray-700 hover:text-blue-500 transition">Home</Link>
                    <Link to="/wishlist" className="text-2xl text-gray-700 hover:text-blue-500 transition">Wishlist</Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button 
                        className="text-gray-700 focus:outline-none" 
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        &#9776; 
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden flex flex-col p-4 bg-white border-t border-gray-200">
                    <Link to="/" className="py-2 text-gray-700 hover:text-blue-500">Home</Link>
                    <Link to="/wishlist" className="py-2 text-gray-700 hover:text-blue-500">Wishlist</Link>
                </div>
            )}
        </div>
  )
}

export default Navbar
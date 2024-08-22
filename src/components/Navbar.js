import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 flex items-center justify-between shadow-md sticky top-0 z-50">
      <div className="text-white font-bold text-2xl">Flipkart</div>

      {/* Search Input */}
      <div className="hidden md:flex flex-grow mx-6">
        <input
          type="text"
          className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-shadow duration-300"
          placeholder="Search for products, brands, and more"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex text-white space-x-6">
        <button className="hover:text-yellow-400 transition duration-300">Login</button>
        <button className="hover:text-yellow-400 transition duration-300">Become a Seller</button>
        <button className="hover:text-yellow-400 transition duration-300">More</button>
        <button className="hover:text-yellow-400 transition duration-300">Cart</button>
      </div>

      {/* Hamburger Menu Icon */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-blue-600 text-white flex flex-col space-y-4 p-4 z-40">
          <input
            type="text"
            className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-shadow duration-300 mb-4"
            placeholder="Search for products, brands, and more"
          />
          <button className="hover:text-yellow-400 transition duration-300">Login</button>
          <button className="hover:text-yellow-400 transition duration-300">Become a Seller</button>
          <button className="hover:text-yellow-400 transition duration-300">More</button>
          <button className="hover:text-yellow-400 transition duration-300">Cart</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

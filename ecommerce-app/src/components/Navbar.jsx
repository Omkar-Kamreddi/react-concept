import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
         
          <span className="text-lg font-semibold text-gray-800">
            ShopEasy
          </span>
        </NavLink>

        {/* Links */}
        <nav className="flex items-center gap-6 text-gray-600">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-black transition ${
                isActive ? "text-black font-medium" : ""
              }`
            }
          >
            Home
          </NavLink>

          {/* Cart Icon */}
          <NavLink to="/cart" className="relative">
            <FaShoppingCart className="text-xl transition hover:scale-110" />

            {/* Cart Count Badge */}
            {
              cart.length > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-black rounded-full -top-2 -right-2">
                  {cart.length}
                </span>
              )
            }
          </NavLink>

        </nav>
      </div>
    </header>
  );
};

export default Navbar;
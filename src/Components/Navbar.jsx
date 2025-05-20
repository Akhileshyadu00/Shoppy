import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaMapPin, FaCaretDown } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';

function Navbar() {
  const location = false; // replace with actual location string when available
  const cartCount = 0;   // replace with actual cart count

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-red-500">S</span>hoppy
          <span className="text-red-500">G</span>lobe
        </Link>
      </div>

      {/* Spacer */}
      <div className="flex-grow" />

      {/* Location + Links + Cart */}
      <ul className="flex items-center space-x-6 text-gray-700 text-lg font-medium">
        {/* Location */}
        <li className="flex items-center cursor-pointer hover:text-red-500 transition">
          <FaMapPin className="mr-1" />
          <span>{location || "Add Location"}</span>
          <FaCaretDown className="ml-1" />
        </li>

        {/* Products */}
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `hover:text-red-500 transition ${
                isActive ? 'border-b-2 border-red-500 pb-1' : ''
              }`
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `hover:text-red-500 transition ${
                isActive ? 'border-b-2 border-red-500 pb-1' : ''
              }`
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `hover:text-red-500 transition ${
                isActive ? 'border-b-2 border-red-500 pb-1' : ''
              }`
            }
          >
            Products
          </NavLink>
        </li>

        {/* Cart */}
        <li className="relative">
          <Link
            to="/cart"
            className="text-2xl hover:text-red-500 transition"
          >
            <IoCartOutline />
          </Link>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              {cartCount}
            </span>
          )}
        </li>
      </ul>

      {/* Spacer */}
      <div className="flex-grow" />

      {/* Search */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition">
          Search
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

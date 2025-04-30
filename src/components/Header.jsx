'use client'
import Link from 'next/link';
import { useState } from 'react';
import logo from '../../public/logos/NAGPUR_HEIGHTS_LOGO.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}

          <Link href="/" className="flex items-center">
            <img src="/logos/NAGPUR_HEIGHTS_LOGO.png" alt="Nagpur Heights Logo" className="h-18 w-auto" />
            <span className="text-2xl font-bold text-blue-600">NAGPUR HEIGHTS</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-blue-600 font-medium hover:text-blue-800">Buy</Link>
            <Link href="./rent" className="text-gray-600 hover:text-blue-600">Rent</Link>
            <Link href="/" className="text-gray-600 hover:text-blue-600">Commercial</Link>
            <Link href="/agents" className="text-gray-600 hover:text-blue-600">Agents</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
              Login
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Register
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-blue-600 font-medium">Buy</Link>
              <Link href="/" className="text-gray-600">Rent</Link>
              <Link href="/" className="text-gray-600">Commercial</Link>
              <Link href="/agents" className="text-gray-600">Agents</Link>
              <Link href="/about" className="text-gray-600">About</Link>
              <Link href="/contact" className="text-gray-600">Contact</Link>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 flex space-x-4">
              <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
                Login
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Register
              </button>
            </div>
          </div>
        )}
      </div>
    </header >
  );
};

export default Header;
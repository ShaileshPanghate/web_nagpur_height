'use client'
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import logo from '../../public/logos/NAGPUR_HEIGHTS_LOGO.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper function to determine if link is active
  const isActive = (href) => {
    // Special case for home page
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 ">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logos/NAGPUR_HEIGHTS_LOGO.png" alt="Nagpur Heights Logo" className="h-18 w-auto" />
            <span className="text-2xl font-bold text-blue-600"></span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-10 mr-40">
            <Link 
              href="/" 
              className={`${isActive('/') ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-blue-800 mr-20`}
            >
              Buy
            </Link>
            {/* <Link 
              href="/rent" 
              className={`${isActive('/rent') ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-blue-600 mr-20`}
            >
              Rent
            </Link>
            <Link 
              href="/commercial" 
              className={`${isActive('/commercial') ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-blue-600 mr-20`}
            >
              Commercial
            </Link> */}
            <Link 
              href="/property" 
              className={`${isActive('/property') ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-blue-600 mr-20`}
            >
              Properties
            </Link>
            {/* <Link 
              href="/agents" 
              className={`${isActive('/agents') ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-blue-600 mr-20`}
            >
              Agents
            </Link> */}
            <Link 
              href="/about" 
              className={`${isActive('/about') ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-blue-600 mr-20`}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`${isActive('/contact') ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-blue-600 mr-20`}
            >
              Contact
            </Link>
          </nav>

          {/* Auth Buttons */}
          {/* <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
              Login
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Register
            </button>
          </div> */}

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
              <Link 
                href="/" 
                className={`${isActive('/') ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Buy
              </Link>
              {/* <Link 
                href="/rent" 
                className={`${isActive('/rent') ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Rent
              </Link>
              <Link 
                href="/commercial" 
                className={`${isActive('/commercial') ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Commercial
              </Link> */}
              <Link 
                href="/property" 
                className={`${isActive('/property') ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Properties
              </Link>
              {/* <Link 
                href="/agents" 
                className={`${isActive('/agents') ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Agents
              </Link> */}
              <Link 
                href="/about" 
                className={`${isActive('/about') ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={`${isActive('/contact') ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
            {/* <div className="mt-4 pt-4 border-t border-gray-200 flex space-x-4">
              <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
                Login
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Register
              </button>
            </div> */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
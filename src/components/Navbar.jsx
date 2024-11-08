import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-transparent backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50 py-2">
      <div className="flex items-center justify-between px-4">
        <img src='./taarik-ashenafi-high-resolution-logo-transparent.svg' alt="Taarik Ashenafi" className="h-6 w-auto" />
        <div className="hidden sm:flex gap-4">
          <Link to="/" className="text-black font-sans font-inter text-sm hover:text-black">
            Home
          </Link>
          <Link to="/features" aria-current="page" className="text-black font-sans font-inter text-sm hover:text-black">
            Features
          </Link>
          <Link to="/mission" className="text-black font-sans font-inter text-sm hover:text-black">
            Mission
          </Link>
          <Link to="/dashboard" className="text-black font-sans font-inter text-sm hover:text-black">
            Dashboard
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/auth" className="hidden lg:flex text-black font-sans font-inter text-sm hover:text-black">
            Login
          </Link>
          <Link to="/auth" className="bg-gradient-to-b from-neutral-700 via-neutral-500 to-neutral-300 text-black font-sans font-inter text-sm px-4 py-2 rounded hidden lg:block">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

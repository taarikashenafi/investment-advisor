import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-transparent backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50 py-2">
      <div className="flex items-center justify-between px-4">
        <img src='./taarik-ashenafi-high-resolution-logo-transparent.svg' alt="Taarik Ashenafi" className="h-6 w-auto" />
        <div className="hidden sm:flex gap-4">
          <a href="#" className="text-black font-sans font-inter text-sm hover:text-black">
            Home
          </a>
          <a href="#about" aria-current="page" className="text-black font-sans font-inter text-sm hover:text-black">
            About
          </a>
          <a href="#dashboard" className="text-black font-sans font-inter text-sm hover:text-black">
            Dashboard
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hidden lg:flex text-black font-sans font-inter text-sm hover:text-black">
            Login
          </a>
          <a href="#" className="bg-gradient-to-b from-neutral-700 via-neutral-500 to-neutral-300 text-black font-sans font-inter text-sm px-4 py-2 rounded hidden lg:block">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


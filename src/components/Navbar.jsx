import React from 'react';

const NavbarSimple = () => {
  return (
    <nav className="bg-transparent backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50 py-2">
      <div className="flex items-center justify-between px-4">
        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 2000 375" className="h-6 w-auto">
          <g data-padding="20">
            <g transform="translate(10 6.602)scale(.96479)">
              <rect width="586.32" height="394.37" x="487.537" y="-197.343" fill="none" rx="0" ry="0" transform="matrix(.95 0 0 .95 278.75 187.65)"/>
              <path fill="#212121" d="M1055.252 52.4v69.57q-52.01-1.66-101.04-1.99v172.93h-82.82V119.98q-49.36.33-100.71 1.99V52.4Zm255.1 240.51h-85.81q-6.29-18.88-16.89-47.37h-105.68l-16.57 47.37h-83.15l92.76-240.51h121.91Zm-189.5-99.05h67.91q-12.58-34.79-25.84-69.57l-7.95-21.54q-11.59 30.15-34.12 91.11"/>
            </g>
            <path fill="transparent" stroke="transparent" d="M716 0h568v375H716z"/>
          </g>
        </svg>
        <div className="hidden sm:flex gap-4">
          <a href="#" className="text-neutral-700 hover:text-neutral-900 text-sm font-sans">
            Features
          </a>
          <a href="#" aria-current="page" className="text-neutral-700 hover:text-neutral-900 text-sm font-sans">
            Customers
          </a>
          <a href="#" className="text-neutral-700 hover:text-neutral-900 text-sm font-sans">
            Integrations
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hidden lg:flex text-neutral-700 hover:text-neutral-900 text-sm font-sans">
            Login
          </a>
          <a href="#" className="bg-gradient-to-b from-neutral-700 via-neutral-500 to-neutral-300 text-white text-sm font-sans px-4 py-2 rounded">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavbarSimple;


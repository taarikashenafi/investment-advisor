import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient'; // Import Supabase client

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the current user session on load
    const fetchUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    fetchUser();

    // Listen for changes to the auth state
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Error signing out:', error.message);
      } else {
        setUser(null);
        console.log('Successfully signed out');
      }
    } catch (err) {
      console.error('Unexpected error during signout:', err);
    }
  };

  return (
    <nav className="bg-transparent backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50 py-2">
      <div className="flex items-center justify-between px-4">
        <img
          src="./taarik-ashenafi-high-resolution-logo-transparent.svg"
          alt="Taarik Ashenafi"
          className="h-6 w-auto"
        />
        <div className="hidden sm:flex gap-4">
          <Link to="/" className="text-black font-sans font-inter text-sm hover:text-black">
            Home
          </Link>
          <Link
            to="/mission"
            aria-current="page"
            className="text-black font-sans font-inter text-sm hover:text-black"
          >
            Mission
          </Link>
          <Link to="/features" className="text-black font-sans font-inter text-sm hover:text-black">
            Features
          </Link>
          <Link to="/dashboard" className="text-black font-sans font-inter text-sm hover:text-black">
            Dashboard
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {!user ? (
            <>
              <Link to="/auth" className="hidden lg:flex text-black font-sans font-inter text-sm hover:text-black">
                Login
              </Link>
              <Link
                to="/auth"
                className="bg-gradient-to-b from-neutral-700 via-neutral-500 to-neutral-300 text-black font-sans font-inter text-sm px-4 py-2 rounded hidden lg:block"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={handleSignOut}
              className="bg-gradient-to-b from-red-600 via-red-500 to-red-400 text-white font-sans font-inter text-sm px-4 py-2 rounded"
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
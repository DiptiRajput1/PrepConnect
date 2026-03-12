
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';
import { supabase } from '../supabaseClient'; // Ensure ye path sahi ho

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // 1. Check karo ki abhi koi user login hai kya
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };
    checkUser();

    // 2. Real-time listener: Jab banda login/logout kare toh turant update ho
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    alert("Logged out successfully!");
    setUser(null);
  };

  const navLinkClass = (path) => 
    `text-sm font-medium transition-colors hover:text-blue-600 ${location.pathname === path ? 'text-blue-600' : 'text-gray-600'}`;

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer group">
            <div className="bg-blue-600 p-1.5 rounded-lg group-hover:bg-blue-700 transition-colors">
              <BookOpen className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              PrepConnect
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className={navLinkClass('/')}>Home</Link>
            <Link to="/prep-material" className={navLinkClass('/prep-material')}>PrepMaterial </Link>
            <Link to="/share" className={navLinkClass('/share')}>Share </Link>
            <Link to="/explore" className={navLinkClass('/explore')}>Explore Feed </Link>

            <div className="h-6 w-px bg-gray-200 mx-2"></div>
            
            {user ? (
              // Agar User Login hai toh Logout button dikhao
              <button 
                onClick={handleLogout} 
                className="text-red-600 hover:text-red-700 font-medium transition-colors cursor-pointer"
              >
                Logout
              </button>
            ) : (
              // Agar Login NAHI hai toh Login/Register dikhao
              <>
                <Link to="/login" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Log in</Link>
                <Link to="/register" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 transform hover:-translate-y-0.5">
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Responsive) */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link to="/" onClick={() => setIsOpen(false)} className="block w-full text-left px-3 py-3 text-gray-600 font-medium hover:bg-gray-50 rounded-lg">Home</Link>
            <Link to="/share" onClick={() => setIsOpen(false)} className="block w-full text-left px-3 py-3 text-gray-600 font-medium hover:bg-gray-50 rounded-lg">Share Experience</Link>
            <Link to="/explore" onClick={() => setIsOpen(false)} className="block w-full text-left px-3 py-3 text-gray-600 font-medium hover:bg-gray-50 rounded-lg">Explore Feed</Link>
            <div className="border-t border-gray-100 my-2 pt-2">
              {user ? (
                <button onClick={() => { handleLogout(); setIsOpen(false); }} className="block w-full text-left px-3 py-3 text-red-600 font-bold hover:bg-red-50 rounded-lg">Logout</button>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full text-left px-3 py-3 text-gray-600 font-medium hover:bg-gray-50 rounded-lg">Log in</Link>
                  <Link to="/register" onClick={() => setIsOpen(false)} className="block w-full text-left px-3 py-3 text-blue-600 font-bold hover:bg-blue-50 rounded-lg">Register</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
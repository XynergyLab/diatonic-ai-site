import React, { useState, useEffect } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  
  // Set active link based on URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActiveLink(hash);
    };
    
    handleHashChange(); // Initialize on mount
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navLinks = [
    { href: "#home", name: "Home" },
    { href: "#learn", name: "Learn" },
    { href: "#tools", name: "Tools" },
    { href: "#lab", name: "AI Lab" },
    { href: "#community", name: "Community" }
  ];

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Diatonic AI</h1>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className={`transition ${
                activeLink === link.href.replace('#', '') 
                  ? 'text-blue-400 font-medium' 
                  : 'hover:text-blue-400'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#login" 
            className="ml-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition"
          >
            Login / Sign Up
          </a>
        </div>
      </div>
      
      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden mt-3 py-2 border-t border-gray-700">
          <div className="flex flex-col space-y-2 px-4">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className={`block py-2 transition ${
                  activeLink === link.href.replace('#', '') 
                    ? 'text-blue-400 font-medium' 
                    : 'hover:text-blue-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#login" 
              className="block py-2 mt-2 text-center bg-blue-600 hover:bg-blue-700 rounded transition"
              onClick={() => setIsOpen(false)}
            >
              Login / Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;

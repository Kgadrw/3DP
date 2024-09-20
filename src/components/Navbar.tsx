import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

interface NavProps {
  logo: string;
  links: { href: string; label: string }[];
  onButtonClick?: () => void;
  buttonText?: string;
}

const Nav: React.FC<NavProps> = ({ logo, links, onButtonClick, buttonText }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Get the current route

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (href: string) => {
    return location.pathname === href ? "border-b-4 border-[#fdb740]" : ""; 
  };

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsScrolled(true);
        navbar?.classList.add("sticky", "top-0", "bg-white", "shadow-lg");
      } else {
        setIsScrolled(false);
        navbar?.classList.remove("sticky", "top-0", "bg-white", "shadow-lg");
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav
      className={`z-20 flex flex-wrap items-center justify-between p-4 bg-white navbar transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}
      id="navbar"
    >
      <div className="flex items-center mr-6 bg-white lo">
        <Link to="/" className="text-xl font-bold tracking-wider lo animate__animated animate__bounce">
          <img className="object-fill h-8" src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex items-center ml-auto mr-4">
        <div className="relative flex justify-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 pl-10 pr-4 text-sm text-gray-700 transition-all duration-300 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:shadow-outline"
              value={searchQuery}
              onChange={handleSearch}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="block lg:hidden" id="mobile-menu">
        <button
          className="flex items-center px-3 py-2 text-black border-black rounded hover:text-black hover:border-black"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              className="w-3 h-3 fill-current menu-close"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Close</title>
              <path d="M10 8.586l4.293-4.293 1.414 1.414L11.414 10l4.293 4.293-1.414 1.414L10 11.414l-4.293 4.293-1.414-1.414L8.586 10 4.293 5.707l1.414-1.414L10 8.586z" />
            </svg>
          ) : (
            <svg
              className="w-3 h-3 fill-current menu-open"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className={`w-full block lg:flex gap-x-5 lg:items-center lg:w-auto transition-all duration-300 ${isMenuOpen ? "" : "hidden"}`} id="js-menu">
        <div className="grid text-sm gap-y-5 md:flex gap-x-5 lg:flex-grow">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`nav-links links ${isActive(link.href)} hover:text-[#fdb740] transition-colors duration-300`} // Apply active styling
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
          {buttonText && (
            <button
              className="p-1 px-2 myButton text-white capitalize font-medium bg-[#fdb740] rounded-md hover:bg-[#e5a632] transition-all duration-300"
              onClick={onButtonClick}
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;

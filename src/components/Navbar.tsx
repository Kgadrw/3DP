import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

interface NavProps {
  logo: string;
  links: {
    href: string;
    label: string;
  }[];
  onButtonClick?: () => void;
  buttonText?: string;
}

const Nav: React.FC<NavProps> = ({
  logo,
  links,
  onButtonClick,
  buttonText,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (href: string) =>
    location.pathname === href ? "border-b-4 border-[#fdb740]" : "";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#122e46] shadow-lg py-3" : "bg-[#122e46]/95 py-3"
      }`}
    >
      <div className="mx-auto flex w-[90%] items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-wider">
          <img
            className={`transition-all duration-300 ${
              isScrolled ? "h-12" : "h-12"
            } object-fill`}
            src={logo}
            alt="Logo"
          />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="block lg:hidden">
          <button
            className="flex items-center rounded border-white px-3 py-2 text-white hover:border-[#fdb740] hover:text-[#fdb740]"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                className="w-3 h-3 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Close</title>
                <path d="M10 8.586l4.293-4.293 1.414 1.414L11.414 10l4.293 4.293-1.414 1.414L10 11.414l-4.293 4.293-1.414-1.414L8.586 10 4.293 5.707l1.414-1.414L10 8.586z" />
              </svg>
            ) : (
              <svg
                className="w-3 h-3 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop & Mobile Menu */}
        <div
          className={`${
            isMenuOpen
              ? "absolute top-full left-0 right-0 block bg-[#122e46] p-4 shadow-lg"
              : "hidden"
          } w-full lg:relative lg:flex lg:w-auto lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-5">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`nav-links links ${isActive(
                  link.href
                )} text-center text-white transition-colors duration-300 hover:text-[#fdb740] lg:text-left`}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
            {buttonText && (
              <button
                className="myButton w-full rounded-md bg-[#fdb740] p-2 font-medium capitalize text-white transition-all duration-300 hover:bg-[#e5a632] lg:w-auto"
                onClick={onButtonClick}
              >
                {buttonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

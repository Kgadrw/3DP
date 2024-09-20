import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#122e46] text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="text-xl font-bold">Data & Insights Partners</a>
          </div>

          <nav className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <a href="/home" className="text-gray-300 hover:text-white">Home</a>
            <a href="/about" className="text-gray-300 hover:text-white">About</a>
            <a href="/services" className="text-gray-300 hover:text-white">Services</a>
            <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
          </nav>
        </div>

        <div className="md:flex md:items-center md:justify-between">
          <div className="flex mt-6 -mx-2 gap-x-4 md:mt-0">
            <a href="#" className="px-2 p-1 rounded-md bg-[#fdb740] text-gray-300 hover:text-white">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="#" className="px-2 p-1 rounded-md bg-[#fdb740] text-gray-300 hover:text-white">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="#" className="px-2 p-1 rounded-md bg-[#fdb740] text-gray-300 hover:text-white">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-700 sm:mx-auto" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-300 sm:text-center">
            © 2024
            <a href="https://exec-rwanda.com" className="hover:underline">Data & Insights Partners</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

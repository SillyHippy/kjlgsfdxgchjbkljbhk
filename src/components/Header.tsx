import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header id="main-header" className="bg-black py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="logo_container">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="Wehmeyer Process Service, Inc. 918-638-2837"
              id="logo"
              className="h-16 sm:h-20"
            />
          </Link>
        </div>

        <div id="et-top-navigation">
          <nav id="top-menu-nav" className="hidden md:block">
            <ul id="top-menu" className="flex">
              <li className="menu-item mr-6">
                <Link to="/">Home</Link>
              </li>
              <li className="menu-item mr-6">
                <Link to="/about-wehmeyer-process-service">About Wehmeyer Process Service</Link>
              </li>
              <li className="menu-item mr-6">
                <Link to="/our-services">Our Services</Link>
              </li>
              <li className="menu-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <div id="et_mobile_nav_menu" className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white text-2xl"
              aria-label="Toggle menu"
            >
              <span className="mobile_menu_bar">
                {mobileMenuOpen ? '✕' : '☰'}
              </span>
            </button>

            {mobileMenuOpen && (
              <ul id="mobile_menu" className="bg-white absolute left-0 right-0 top-20 p-4 shadow-md z-50">
                <li className="menu-item py-2 border-b">
                  <Link to="/" className="text-black" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                </li>
                <li className="menu-item py-2 border-b">
                  <Link to="/about-wehmeyer-process-service" className="text-black" onClick={() => setMobileMenuOpen(false)}>About Wehmeyer Process Service</Link>
                </li>
                <li className="menu-item py-2 border-b">
                  <Link to="/our-services" className="text-black" onClick={() => setMobileMenuOpen(false)}>Our Services</Link>
                </li>
                <li className="menu-item py-2">
                  <Link to="/contact" className="text-black" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

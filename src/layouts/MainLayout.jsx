import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                src="/images/logo.png"
                alt="Wehmeyer Process Service, Inc. 918-638-2837"
                className="h-14 md:h-16"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex">
              <li>
                <Link
                  to="/"
                  className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}
                >
                  About Wehmeyer Process Service
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={`nav-link ${isActive('/services') ? 'nav-link-active' : ''}`}
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className="block w-6 h-0.5 bg-secondary mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-secondary mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-secondary"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white px-4 py-2 shadow-lg">
            <ul className="flex flex-col">
              <li className="py-2 border-b border-gray-100">
                <Link
                  to="/"
                  className={isActive('/') ? 'text-primary' : ''}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="py-2 border-b border-gray-100">
                <Link
                  to="/about"
                  className={isActive('/about') ? 'text-primary' : ''}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Wehmeyer Process Service
                </Link>
              </li>
              <li className="py-2 border-b border-gray-100">
                <Link
                  to="/services"
                  className={isActive('/services') ? 'text-primary' : ''}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Services
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/contact"
                  className={isActive('/contact') ? 'text-primary' : ''}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>© Wehmeyer Process Service, Inc. Designed by Net Solutions Today</p>
        </div>
      </footer>

      {/* Mobile Call Now Button */}
      <a href="tel:918-638-2837" className="call-now-btn">
        <span className="font-semibold">Call Now</span>
      </a>
    </div>
  );
};

export default MainLayout;

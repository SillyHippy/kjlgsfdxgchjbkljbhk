"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header id="main-header" className="bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="logo_container">
          <Link href="/">
            <img
              src="/images/logo.png"
              width={232}
              height={63}
              alt="Wehmeyer Process Service, Inc. 918-638-2837"
              className="w-auto h-12 md:h-16"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-400 py-2 px-1">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400 py-2 px-1">
                About Wehmeyer Process Service
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-400 py-2 px-1">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 py-2 px-1">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white p-2"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black text-white">
          <ul className="py-2 px-4 space-y-3">
            <li>
              <Link
                href="/"
                className="block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Wehmeyer Process Service
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

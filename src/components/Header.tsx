'use client'

import Link from 'next/link';
import { useState } from 'react';
import SafeImage from './SafeImage';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header id="main-header" className="bg-black py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="logo_container">
          <Link href="/">
            <SafeImage
              src="/logo.png"
              alt="Wehmeyer Process Service, Inc. 918-638-2837"
              width={232}
              height={63}
              id="logo"
            />
          </Link>
        </div>

        <div className="hidden md:flex">
          <nav id="top-menu-nav">
            <ul className="flex gap-6">
              <li>
                <Link href="/" className="text-white hover:text-wehmeyer-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-wehmeyer-process-service" className="text-white hover:text-wehmeyer-blue transition-colors">
                  About Wehmeyer Process Service
                </Link>
              </li>
              <li>
                <Link href="/our-services" className="text-white hover:text-wehmeyer-blue transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-wehmeyer-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
          >
            <span className="select_page sr-only">Select Page</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-black p-4">
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/" className="text-white hover:text-wehmeyer-blue transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-wehmeyer-process-service" className="text-white hover:text-wehmeyer-blue transition-colors">
                    About Wehmeyer Process Service
                  </Link>
                </li>
                <li>
                  <Link href="/our-services" className="text-white hover:text-wehmeyer-blue transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white hover:text-wehmeyer-blue transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

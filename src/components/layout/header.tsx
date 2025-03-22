'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header id="main-header" className="bg-black">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <div className="logo-container">
            <Link href="/">
              <img
                src="/images/logo.png"
                alt="Wehmeyer Process Service, Inc. 918-638-2837"
                width={232}
                height={63}
                className="max-h-16 w-auto"
              />
            </Link>
          </div>
          <div id="et-top-navigation" className="hidden md:block">
            <nav id="top-menu-nav">
              <ul id="top-menu" className="flex">
                <li className="menu-item">
                  <Link href="/" className={pathname === '/' ? 'active-nav-link' : 'nav-link'}>
                    Home
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/about/" className={pathname === '/about/' ? 'active-nav-link' : 'nav-link'}>
                    About Wehmeyer Process Service
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/services/" className={pathname === '/services/' ? 'active-nav-link' : 'nav-link'}>
                    Our Services
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/contact/" className={pathname === '/contact/' ? 'active-nav-link' : 'nav-link'}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div id="et_mobile_nav_menu" className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="mobile_menu_bar text-white p-2"
              aria-label="Toggle menu"
            >
              <span className="select_page">Select Page</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            {mobileMenuOpen && (
              <ul id="mobile_menu" className="et_mobile_menu bg-white absolute left-0 right-0 p-4 shadow-md z-10">
                <li className="menu-item">
                  <Link href="/" className="block py-2 px-4 text-black hover:text-primary">
                    Home
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/about/" className="block py-2 px-4 text-black hover:text-primary">
                    About Wehmeyer Process Service
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/services/" className="block py-2 px-4 text-black hover:text-primary">
                    Our Services
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/contact/" className="block py-2 px-4 text-black hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

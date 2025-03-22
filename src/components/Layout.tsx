import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div id="page-container" className="min-h-screen flex flex-col">
      <Header />
      <div id="et-main-area" className="flex-grow">
        <div id="main-content">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

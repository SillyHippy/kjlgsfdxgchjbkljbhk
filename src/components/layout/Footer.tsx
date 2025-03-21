import React from 'react';

const Footer = () => {
  return (
    <footer id="main-footer" className="bg-black text-white text-center py-4">
      <div className="container mx-auto">
        <div id="footer-bottom">
          <div className="flex justify-center">
            <div id="footer-info" className="text-sm">
              © Wehmeyer Process Service, Inc. Designed by{' '}
              <a
                href="http://netsolutionstoday.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Net Solutions Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

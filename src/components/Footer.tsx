import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <footer id="main-footer">
        <div id="footer-bottom" className="py-4">
          <div className="container mx-auto px-4 text-center sm:text-left">
            <div id="footer-info">
              © Wehmeyer Process Service, Inc. Designed by{' '}
              <a href="http://netsolutionstoday.com" className="text-primary" target="_blank" rel="noopener noreferrer">
                Net Solutions Today
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Call Now Button - only visible on mobile */}
      <div className="callnow_area md:hidden">
        <a href="tel:+19186382837">
          <div className="callnow_bottom py-3">
            <span className="b_callnow font-bold">
              Call Now
            </span>
          </div>
        </a>
      </div>
    </>
  );
};

export default Footer;

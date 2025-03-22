import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer">
      <div id="footer-bottom" className="footer-bottom">
        <div className="container mx-auto">
          <div id="footer-info" className="py-2 text-center md:text-left">
            © {currentYear} Wehmeyer Process Service, Inc. Designed by{' '}
            <Link href="http://netsolutionstoday.com" className="text-white hover:text-primary" target="_blank" rel="noopener noreferrer">
              Net Solutions Today
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

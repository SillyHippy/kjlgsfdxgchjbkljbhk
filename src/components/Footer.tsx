import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="main-footer" className="bg-black text-center py-4">
      <div id="footer-bottom">
        <div className="container mx-auto">
          <div id="footer-info" className="text-white text-sm">
            © Wehmeyer Process Service, Inc. Designed by{' '}
            <Link
              href="http://netsolutionstoday.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-wehmeyer-blue hover:text-white transition-colors"
            >
              Net Solutions Today
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

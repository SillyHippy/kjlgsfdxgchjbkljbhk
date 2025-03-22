import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto py-20 text-center">
      <h1 className="text-4xl font-bold mb-6">404 - Page Not Found</h1>
      <p className="mb-6">The page you are looking for does not exist.</p>
      <Link href="/" className="text-primary hover:underline">
        Return to Home
      </Link>
    </div>
  );
}

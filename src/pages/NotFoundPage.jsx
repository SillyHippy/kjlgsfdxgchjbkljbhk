import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="section">
      <div className="container text-center py-20">
        <h1 className="text-4xl md:text-5xl mb-6">404 - Page Not Found</h1>
        <p className="text-xl mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          Return to Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

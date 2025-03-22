import { Link } from 'react-router-dom';

const ServiceBox = ({ title, description, image }) => {
  return (
    <div className="service-box">
      {image && (
        <div className="mb-4 flex justify-center">
          <img src={`/images/${image}`} alt={title} className="h-20 object-contain" />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-hero-pattern bg-cover bg-center h-64 md:h-80 w-full"
        role="img"
        aria-label="Business professional reading documents"
      ></div>

      {/* Main Heading Section */}
      <div className="bg-light py-8">
        <div className="container text-center">
          <h1 className="mb-4">SERVING YOU BY SERVING OTHERS</h1>
          <p className="text-lg text-accent max-w-4xl mx-auto">
            Wehmeyer Process Service, Inc. is a licensed Tulsa, OK process service agency serving clients nationwide since 1985. With over 40 years of experience, Wehmeyer Process Service is committed to service, value and customer satisfaction.
          </p>
        </div>
      </div>

      {/* Services Section - First Row */}
      <div className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ServiceBox
              title="Local & Nationwide Service"
              description="Wehmeyer Process Service, Inc. delivers process for clients in Oklahoma and nationwide."
              image="nationwide.gif"
            />
            <ServiceBox
              title="Postal Search & Updates"
              description="We always go the extra mile to locate a current address. Your summons is in good hands."
              image="post_office.jpg"
            />
            <ServiceBox
              title="Oklahoma Notary Public"
              description="Our in-house notary service helps us complete your job quickly and efficiently every time."
              image="notary.png"
            />
            <ServiceBox
              title="Local Court Filings"
              description="Our full service process service agency offers local court filing services. We aim to please."
              image="court-filings.png"
            />
          </div>
        </div>
      </div>

      {/* Services Section - Second Row */}
      <div className="section pt-0">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ServiceBox
              title="Court Records Research"
              description="When you need a records search and document retrieval quickly, Wehmeyer is here for you."
              image="court-records.png"
            />
            <ServiceBox
              title="Stake Out Services"
              description="Is your defendant avoiding service? Don't give up. Let Wehmeyer Process Service help. We get the job done."
              image="stake-out.png"
            />
            <ServiceBox
              title="Courier Services"
              description="Need delivery fast? Ask about Our Rush Courier Service. We can help… and we're always on time!"
              image="courier.png"
            />
            <ServiceBox
              title="Satisfaction Guaranteed"
              description="Michael & Jamie Wehmeyer have been committed to excellence and customer satisfaction since 1985."
              image="michaeljamie.jpg"
            />
          </div>
        </div>
      </div>

      {/* Featured Boxes Section */}
      <div className="bg-light py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="/images/servemanager.png" alt="ServeManager" className="h-16 mx-auto mb-4" />
              <h3 className="mb-2">State of the Art Job Tracking</h3>
              <p className="text-accent">
                With ServeManager GPS tracking, we always manage your job with accuracy, speed and efficiency.
              </p>
            </div>
            <div className="text-center">
              <img src="/images/servenowmember.png" alt="ServeNow" className="h-16 mx-auto mb-4" />
              <h3 className="mb-2">National Serve Now Member</h3>
              <p className="text-accent">
                ServeNow process servers have been pre-screened and vetted to verify experience and qualifications.
              </p>
            </div>
            <div className="text-center">
              <img src="/images/visa-mastercard-discover.png" alt="Payment methods" className="h-16 mx-auto mb-4" />
              <h3 className="mb-2">For Your Convenience…</h3>
              <p className="text-accent">
                We accept Visa, MasterCard and Discover. Send payments by mail to: 3748 S Fulton Ave Tulsa, OK 74135
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Call to Action */}
      <div className="container py-8 text-center">
        <p className="text-lg max-w-4xl mx-auto">
          At Wehmeyer Process Service, Inc. we are licensed and bonded and maintain a current knowledge of all applicable laws, so you are assured the best service available. And with our competitive pricing, we will match or beat any competitor's price. We want to be your process server.
        </p>
      </div>
    </div>
  );
};

export default HomePage;

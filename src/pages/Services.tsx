import React from 'react';

const Services: React.FC = () => {
  return (
    <article className="post type-page status-publish">
      <div className="entry-content">
        <div className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Our services</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  Our experienced process servers are capable of handling your legal documents with the care and urgency that you expect.
                  Wehmeyer Process Service, Inc. wants to be your Tulsa, Oklahoma based process server. Call for your Free Quote.
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Tulsa, Oklahoma & Nationwide Process Service</li>
                  <li>In-house Oklahoma Notary Service</li>
                  <li>Searches by phone, address & SSN</li>
                  <li>Computerized Tracking</li>
                  <li>Court Records Search</li>
                  <li>Courier Services</li>
                  <li>Postal Searches</li>
                  <li>Court Filings</li>
                </ul>
              </div>

              <div className="flex justify-center items-center">
                <img
                  src="/images/nationwide.gif"
                  alt="Nationwide Service"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Services;

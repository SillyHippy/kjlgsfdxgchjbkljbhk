import React from 'react';
import { Helmet } from 'react-helmet-async';

const Services: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Process Server Services in Tulsa - Wehmeyer Process Service</title>
        <meta name="description" content="Professional process serving, court filings, notary services, and document delivery in Tulsa and nationwide. Fast, reliable, and experienced process servers." />
        <link rel="canonical" href="https://yourserved.com/our-services" />
      </Helmet>
      <article className="post type-page status-publish">
        <div className="entry-content">
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl font-bold mb-8">Our Process Server Services</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="mb-4">
                    Our experienced process servers are capable of handling your legal documents with the care and urgency that you expect.
                    Wehmeyer Process Service, Inc. wants to be your Tulsa, Oklahoma based process server. Call for your Free Quote.
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Tulsa, Oklahoma & Nationwide Process Service</strong> - Professional document delivery across the country</li>
                    <li><strong>In-house Oklahoma Notary Service</strong> - Convenient and reliable notarization</li>
                    <li><strong>Searches by phone, address & SSN</strong> - Comprehensive search capabilities</li>
                    <li><strong>Computerized Tracking</strong> - Real-time updates on your service status</li>
                    <li><strong>Court Records Search</strong> - Efficient document retrieval</li>
                    <li><strong>Courier Services</strong> - Fast and reliable delivery</li>
                    <li><strong>Postal Searches</strong> - Address verification and updates</li>
                    <li><strong>Court Filings</strong> - Professional filing services</li>
                  </ul>
                </div>

                <div className="flex justify-center items-center">
                  <img
                    src="/images/nationwide.gif"
                    alt="Nationwide Process Server Services"
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
};

export default Services;
import React from 'react';

export default function ServicesPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="prose prose-lg">
                <p>
                  Our experienced process servers are capable of handling your legal documents
                  with the care and urgency that you expect.
                </p>
                <p>
                  Wehmeyer Process Service, Inc. wants to be your Tulsa, Oklahoma based process server.
                  Call for your Free Quote.
                </p>

                <ul className="list-disc pl-5 space-y-2 mt-6">
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
            </div>

            <div className="flex items-center justify-center">
              <img
                src="/images/nationwide.gif"
                alt="Service Coverage Map"
                className="w-[350px] h-[300px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

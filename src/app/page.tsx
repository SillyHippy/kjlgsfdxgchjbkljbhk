import React from 'react';

export default function HomePage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-blue-100 py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">
            Wehmeyer Process Service, Inc.<br />
            <span className="text-2xl font-normal">Tulsa, Oklahoma Process Servers</span>
          </h1>
          <h2 className="text-xl mb-8">
            Serving clients nationwide since 1985.
          </h2>
          <div className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
            <a href="tel:918-638-2837" className="text-xl">
              Call Us Today! 918-638-2837
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Service Areas</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <img
                src="/images/nationwide.gif"
                alt="Nationwide Service Map"
                className="w-full h-[150px] object-contain mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Local & Nationwide Service</h3>
              <p>
                Wehmeyer Process Service, Inc. delivers process for clients in Oklahoma and nationwide.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <img
                src="/images/postoffice.jpg"
                alt="Post Office"
                className="w-full h-[150px] object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Postal Search & Updates</h3>
              <p>
                We always go the extra mile to locate a current address. Your summons is in good hands.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <img
                src="/images/notary.jpg"
                alt="Notary Services"
                className="w-full h-[150px] object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Oklahoma Notary Public</h3>
              <p>
                Our in-house notary service helps us complete your job quickly and efficiently every time.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <img
                src="/images/lawsuit.jpg"
                alt="Court Filing"
                className="w-full h-[150px] object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Local Court Filings</h3>
              <p>
                Our full service process service agency offers local court filing services. We aim to please.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Service Card 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="/images/search.jpg"
                alt="Court Records Research"
                className="w-full h-[150px] object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Court Records Research</h3>
              <p>
                When you need a records search and document retrieval, our experienced team can help.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="/images/stakeout.jpg"
                alt="Stake Out Services"
                className="w-full h-[150px] object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Stake Out Services</h3>
              <p>
                Is your defendant avoiding service? Do not worry - we will not stop until the job is done.
              </p>
            </div>

            {/* Service Card 7 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="/images/notary.jpg"
                alt="Courier Services"
                className="w-full h-[150px] object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Courier Services</h3>
              <p>
                Need delivery fast? Ask about Our Rush Courier Service. We can help, and we&apos;re quick.
              </p>
            </div>

            {/* Service Card 8 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="/images/couple.jpg"
                alt="Satisfaction Guaranteed"
                className="w-full h-[150px] object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Satisfaction Guaranteed</h3>
              <p>
                Michael & Jamie Wehmeyer have been serving process and clients&apos; needs since 1985.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Hire Our Professional Process Servers Today</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl mb-8">
              Contact Wehmeyer Process Service, Inc. for all of your process serving needs - local or nationwide.
            </p>
            <div className="inline-block bg-white text-blue-700 font-bold py-3 px-6 rounded-lg">
              <a href="/contact/" className="text-xl">
                Request a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

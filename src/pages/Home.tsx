import React from 'react';

const Home: React.FC = () => {
  return (
    <article className="post type-page status-publish">
      <div className="entry-content">
        {/* Hero/Slider Section */}
        <div className="w-full relative">
          <img
            src="/images/header-image.jpeg"
            alt="Process Server"
            className="w-full h-64 md:h-72 object-cover"
          />
        </div>

        {/* Heading Section */}
        <div className="bg-secondary py-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">SERVING YOU BY SERVING OTHERS</h1>
            <p className="text-gray-700 max-w-4xl mx-auto">
              Wehmeyer Process Service, Inc. is a licensed Tulsa, OK process service agency serving clients nationwide since 1985.
              With over 40 years of experience, Wehmeyer Process Service is committed to service, value and customer satisfaction.
            </p>
          </div>
        </div>

        {/* Services Section 1 */}
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mm-home-box">
              <div className="text-center">
                <img src="/images/nationwide.gif" alt="Local & Nationwide Service" className="mx-auto h-32 object-contain" />
                <h3 className="font-semibold text-xl mb-2">Local & Nationwide Service</h3>
                <p>Wehmeyer Process Service, Inc. delivers process for clients in Oklahoma and nationwide.</p>
              </div>

              <div className="text-center">
                <img src="/images/post_office.jpg" alt="Postal Search & Updates" className="mx-auto h-32 object-contain" />
                <h3 className="font-semibold text-xl mb-2">Postal Search & Updates</h3>
                <p>We always go the extra mile to locate a current address. Your summons is in good hands.</p>
              </div>

              <div className="text-center">
                <img src="/images/notary.png" alt="Oklahoma Notary Public" className="mx-auto h-32 object-contain" />
                <h3 className="font-semibold text-xl mb-2">Oklahoma Notary Public</h3>
                <p>Our in-house notary service helps us complete your job quickly and efficiently every time.</p>
              </div>

              <div className="text-center">
                <img src="/images/court-filings.png" alt="Local Court Filings" className="mx-auto h-32 object-contain" />
                <h3 className="font-semibold text-xl mb-2">Local Court Filings</h3>
                <p>Our full service process service agency offers local court filing services. We aim to please.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section 2 */}
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mm-home-box">
              <div className="text-center">
                <img src="/images/court-records.png" alt="Court Records Research" className="mx-auto h-32 object-contain" />
                <h3 className="font-semibold text-xl mb-2">Court Records Research</h3>
                <p>When you need a records search and document retrieval quickly, Wehmeyer is here for you.</p>
              </div>

              <div className="text-center">
                <img src="/images/stake-out.png" alt="Stake Out Services" className="mx-auto h-32 object-contain" />
                <h3 className="font-semibold text-xl mb-2">Stake Out Services</h3>
                <p>Is your defendant avoiding service? Don't give up. Let Wehmeyer Process Service help. We get the job done.</p>
              </div>

              <div className="text-center">
                <img src="/images/court-filings.png" alt="Courier Services" className="mx-auto h-32 object-contain" />
                <h3 className="font-semibold text-xl mb-2">Courier Services</h3>
                <p>Need delivery fast? Ask about Our Rush Courier Service. We can help… and we're always on time!</p>
              </div>

              <div className="text-center">
                <img src="/images/michaeljamie.jpg" alt="Satisfaction Guaranteed" className="mx-auto h-32 object-contain" />
                <h3 className="font-semibold text-xl mb-2">Satisfaction Guaranteed</h3>
                <p>Michael & Jamie Wehmeyer have been committed to excellence and customer satisfaction since 1985.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <img src="/images/servemanager.png" alt="State of the Art Job Tracking" className="mx-auto h-16 object-contain mb-4" />
                <h3 className="font-semibold text-xl mb-2">State of the Art Job Tracking</h3>
                <p>With ServeManager GPS tracking, we always manage your job with accuracy, speed and efficiency.</p>
              </div>

              <div className="text-center">
                <img src="/images/servenowmember.png" alt="National Serve Now Member" className="mx-auto h-16 object-contain mb-4" />
                <h3 className="font-semibold text-xl mb-2">National Serve Now Member</h3>
                <p>ServeNow process servers have been pre-screened and vetted to verify experience and qualifications.</p>
              </div>

              <div className="text-center">
                <img src="/images/payment-methods.png" alt="For Your Convenience" className="mx-auto h-16 object-contain mb-4" />
                <h3 className="font-semibold text-xl mb-2">For Your Convenience…</h3>
                <p>We accept Visa, MasterCard and Discover. Send payments by mail to: 3748 S Fulton Ave Tulsa, OK 74135</p>
              </div>
            </div>

            <div className="mt-12 text-center max-w-4xl mx-auto">
              <p>
                At Wehmeyer Process Service, Inc. we are licensed and bonded and maintain a current knowledge of all applicable laws,
                so you are assured the best service available. And with our competitive pricing, we will match or beat any competitor's price.
                We want to be your process server.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Home;

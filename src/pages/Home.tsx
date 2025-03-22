import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Wehmeyer Process Service - Trusted Tulsa Process Server Since 1985</title>
        <meta name="description" content="Wehmeyer Process Service offers professional process serving, court filings, and notary services in Tulsa and nationwide. Licensed, bonded, and trusted since 1985." />
      </Helmet>
      <article className="post type-page status-publish">
        <div className="entry-content">
          {/* Hero/Slider Section */}
          <div className="w-full relative">
            <img
              src="/images/header-image.jpeg"
              alt="Professional Process Server in Tulsa, Oklahoma"
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
                  <img src="/images/nationwide.gif" alt="Local & Nationwide Process Service Coverage" className="mx-auto h-32 object-contain" />
                  <h2 className="font-semibold text-xl mb-2">Local & Nationwide Service</h2>
                  <p>Wehmeyer Process Service, Inc. delivers process for clients in Oklahoma and nationwide.</p>
                </div>

                <div className="text-center">
                  <img src="/images/post_office.jpg" alt="Professional Postal Search Services" className="mx-auto h-32 object-contain" />
                  <h2 className="font-semibold text-xl mb-2">Postal Search & Updates</h2>
                  <p>We always go the extra mile to locate a current address. Your summons is in good hands.</p>
                </div>

                <div className="text-center">
                  <img src="/images/notary.png" alt="Licensed Oklahoma Notary Public Services" className="mx-auto h-32 object-contain" />
                  <h2 className="font-semibold text-xl mb-2">Oklahoma Notary Public</h2>
                  <p>Our in-house notary service helps us complete your job quickly and efficiently every time.</p>
                </div>

                <div className="text-center">
                  <img src="/images/court-filings.png" alt="Tulsa Court Filing Services" className="mx-auto h-32 object-contain" />
                  <h2 className="font-semibold text-xl mb-2">Local Court Filings</h2>
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
                  <img src="/images/court-records.png" alt="Professional Court Records Research" className="mx-auto h-32 object-contain" />
                  <h2 className="font-semibold text-xl mb-2">Court Records Research</h2>
                  <p>When you need a records search and document retrieval quickly, Wehmeyer is here for you.</p>
                </div>

                <div className="text-center">
                  <img src="/images/stake-out.png" alt="Professional Stake Out Services in Tulsa" className="mx-auto h-32 object-contain" />
                  <h2 className="font-semibold text-xl mb-2">Stake Out Services</h2>
                  <p>Is your defendant avoiding service? Don't give up. Let Wehmeyer Process Service help. We get the job done.</p>
                </div>

                <div className="text-center">
                  <img src="/images/court-filings.png" alt="Fast Courier Services in Tulsa" className="mx-auto h-32 object-contain" />
                  <h2 className="font-semibold text-xl mb-2">Courier Services</h2>
                  <p>Need delivery fast? Ask about Our Rush Courier Service. We can help… and we're always on time!</p>
                </div>

                <div className="text-center">
                  <img src="/images/michaeljamie.jpg" alt="Michael & Jamie Wehmeyer - Trusted Process Servers" className="mx-auto h-32 object-contain" />
                  <h2 className="font-semibold text-xl mb-2">Satisfaction Guaranteed</h2>
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
                  <img src="/images/servemanager.png" alt="GPS Tracking for Process Service" className="mx-auto h-16 object-contain mb-4" />
                  <h2 className="font-semibold text-xl mb-2">State of the Art Job Tracking</h2>
                  <p>With ServeManager GPS tracking, we always manage your job with accuracy, speed and efficiency.</p>
                </div>

                <div className="text-center">
                  <img src="/images/servenowmember.png" alt="Verified ServeNow Process Server Member" className="mx-auto h-16 object-contain mb-4" />
                  <h2 className="font-semibold text-xl mb-2">National Serve Now Member</h2>
                  <p>ServeNow process servers have been pre-screened and vetted to verify experience and qualifications.</p>
                </div>

                <div className="text-center">
                  <img src="/images/payment-methods.png" alt="Process Service Payment Options" className="mx-auto h-16 object-contain mb-4" />
                  <h2 className="font-semibold text-xl mb-2">For Your Convenience…</h2>
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
    </>
  );
};

export default Home;
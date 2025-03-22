import React from 'react';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Wehmeyer Process Service - Licensed & Bonded Process Servers in Tulsa</title>
        <meta name="description" content="With over 40 years of experience, Wehmeyer Process Service provides trusted process serving in Tulsa and nationwide. Licensed, bonded, and committed to excellence since 1985." />
        <link rel="canonical" href="https://yourserved.com/about-wehmeyer-process-service" />
      </Helmet>
      <article className="post type-page status-publish">
        <div className="entry-content">
          {/* Blue Banner Section */}
          <section className="bg-primary py-12 text-white">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-xl md:text-2xl font-bold">
                Member of ServeNow.com and<br />
                United States Process Servers Association
              </h1>
            </div>
          </section>

          {/* Content Section */}
          <section className="bg-secondary py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Experience You Can Trust</h2>
                <p className="mb-6">
                  With over 40 years of experience, <strong>Wehmeyer Process Service, Inc.</strong> is committed to handling your processing needs with honesty, integrity and confidentiality. We can have your legal documents served anywhere in the United States and we want to be your process server.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Efficiency You Can Depend On</h2>
                <p>
                  Our fast, efficient and professional service allows us to serve with confidence nationwide. Same day rush service is also available
                </p>
              </div>
            </div>
          </section>

          {/* Contact Us Section */}
          <section className="py-12">
            <div className="container mx-auto px-4 text-center">
              <img
                src="/images/logo.png"
                alt="Wehmeyer Process Service, Inc. - Tulsa Process Server"
                className="mx-auto h-28 object-contain mb-6"
              />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us Today for a Free Quote!</h2>
              <p className="text-3xl md:text-4xl text-primary font-bold mb-4">918-638-2837</p>
              <a
                href="mailto:Wehmeyer@yourserved.com"
                className="text-xl md:text-2xl text-primary hover:underline"
                aria-label="Email Wehmeyer Process Service"
              >
                Wehmeyer@yourserved.com
              </a>
            </div>
          </section>
        </div>
      </article>
    </>
  );
};

export default About;
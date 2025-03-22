import React from 'react';

const About: React.FC = () => {
  return (
    <article className="post type-page status-publish">
      <div className="entry-content">
        {/* Blue Banner Section */}
        <div className="bg-primary py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xl md:text-2xl font-bold">
              Member of ServeNow.com and<br />
              United States Process Servers Association
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-secondary py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Experience You Can Trust</h3>
              <p className="mb-6">
                With over 40 years of experience, <strong>Wehmeyer Process Service, Inc.</strong> is committed to handling your processing needs with honesty, integrity and confidentiality. We can have your legal documents served anywhere in the United States and we want to be your process server.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Efficiency You Can Depend On</h3>
              <p>
                Our fast, efficient and professional service allows us to serve with confidence nationwide. Same day rush service is also available
              </p>
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="py-12">
          <div className="container mx-auto px-4 text-center">
            <img
              src="/images/logo.png"
              alt="Wehmeyer Process Service, Inc."
              className="mx-auto h-28 object-contain mb-6"
            />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us Today for a Free Quote!</h2>
            <h2 className="text-3xl md:text-4xl text-primary font-bold mb-4">918-638-2837</h2>
            <a
              href="mailto:Wehmeyer@yourserved.com"
              className="text-xl md:text-2xl text-primary hover:underline"
            >
              Wehmeyer@yourserved.com
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default About;

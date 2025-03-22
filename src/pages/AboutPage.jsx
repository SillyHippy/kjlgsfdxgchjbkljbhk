const AboutPage = () => {
  return (
    <div>
      {/* Header Banner */}
      <div className="bg-primary text-white py-12 text-center">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Member of ServeNow.com and<br />
            United States Process Servers Association
          </h2>
        </div>
      </div>

      {/* About Content */}
      <div className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h3 className="mb-4">Experience You Can Trust</h3>
            <p className="mb-6">
              With over 40 years of experience, <strong>Wehmeyer Process Service, Inc.</strong> is committed
              to handling your processing needs with honesty, integrity and confidentiality.
              We can have your legal documents served anywhere in the United States and we want
              to be your process server.
            </p>

            <h3 className="mb-4">Efficiency You Can Depend On</h3>
            <p className="mb-6">
              Our fast, efficient and professional service allows us to serve with confidence nationwide.
              Same day rush service is also available
            </p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-4">
              <img
                src="/images/logo.png"
                alt="Wehmeyer Process Service, Inc."
                className="h-32 mx-auto"
              />
            </div>
            <h2 className="text-2xl md:text-3xl mb-6">Contact Us Today for a Free Quote!</h2>
            <div className="mb-4">
              <a
                href="tel:918-638-2837"
                className="text-3xl md:text-4xl text-primary font-bold hover:underline"
              >
                918-638-2837
              </a>
            </div>
            <div>
              <a
                href="mailto:Wehmeyer@yourserved.com"
                className="text-xl md:text-2xl text-primary hover:underline"
              >
                Wehmeyer@yourserved.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

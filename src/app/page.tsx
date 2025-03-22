import Link from 'next/link';

export default function Home() {
  return (
    <article className="post">
      <div className="entry-content">
        {/* Hero Banner */}
        <div className="w-full relative">
          <img
            src="/images/header.jpeg"
            alt="Wehmeyer Process Service Hero"
            width={1900}
            height={400}
            className="w-full"
          />
        </div>

        {/* Main Heading Section */}
        <div className="bg-gray-200 py-10">
          <div className="container mx-auto">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">SERVING YOU BY SERVING OTHERS</h1>
              <p className="heading-desc">
                Wehmeyer Process Service, Inc. is a licensed Tulsa, OK process service agency serving clients nationwide since 1985.
                With over 40 years of experience, Wehmeyer Process Service is committed to service, value and customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid Section - First Row */}
        <div className="py-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Service Box 1 */}
              <div className="featured-box">
                <img
                  src="/images/nationwide.gif"
                  alt="Nationwide Service"
                  width={230}
                  height={141}
                  className="mx-auto mb-4"
                />
                <h3>Local & Nationwide Service</h3>
                <p>Wehmeyer Process Service, Inc. delivers process for clients in Oklahoma and nationwide.</p>
              </div>

              {/* Service Box 2 */}
              <div className="featured-box">
                <img
                  src="/images/post_office.jpg"
                  alt="Postal Search"
                  width={230}
                  height={141}
                  className="mx-auto mb-4"
                />
                <h3>Postal Search & Updates</h3>
                <p>We always go the extra mile to locate a current address. Your summons is in good hands.</p>
              </div>

              {/* Service Box 3 */}
              <div className="featured-box">
                <img
                  src="/images/notary.png"
                  alt="Oklahoma Notary Public"
                  width={230}
                  height={141}
                  className="mx-auto mb-4"
                />
                <h3>Oklahoma Notary Public</h3>
                <p>Our in-house notary service helps us complete your job quickly and efficiently every time.</p>
              </div>

              {/* Service Box 4 */}
              <div className="featured-box">
                <img
                  src="/images/court-filings.png"
                  alt="Local Court Filings"
                  width={230}
                  height={141}
                  className="mx-auto mb-4"
                />
                <h3>Local Court Filings</h3>
                <p>Our full service process service agency offers local court filing services. We aim to please.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid Section - Second Row */}
        <div className="pb-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Service Box 5 */}
              <div className="featured-box">
                <img
                  src="/images/court-records.png"
                  alt="Court Records Research"
                  width={230}
                  height={141}
                  className="mx-auto mb-4"
                />
                <h3>Court Records Research</h3>
                <p>When you need a records search and document retrieval quickly, Wehmeyer is here for you.</p>
              </div>

              {/* Service Box 6 */}
              <div className="featured-box">
                <img
                  src="/images/post_office.jpg"
                  alt="Stake Out Services"
                  width={230}
                  height={141}
                  className="mx-auto mb-4"
                />
                <h3>Stake Out Services</h3>
                <p>Is your defendant avoiding service? Don't give up. Let Wehmeyer Process Service help. We get the job done.</p>
              </div>

              {/* Service Box 7 */}
              <div className="featured-box">
                <img
                  src="/images/notary.png"
                  alt="Courier Services"
                  width={230}
                  height={141}
                  className="mx-auto mb-4"
                />
                <h3>Courier Services</h3>
                <p>Need delivery fast? Ask about Our Rush Courier Service. We can help… and we're always on time!</p>
              </div>

              {/* Service Box 8 */}
              <div className="featured-box">
                <img
                  src="/images/owners.jpg"
                  alt="Satisfaction Guaranteed"
                  width={230}
                  height={141}
                  className="mx-auto mb-4"
                />
                <h3>Satisfaction Guaranteed</h3>
                <p>Michael & Jamie Wehmeyer have been committed to excellence and customer satisfaction since 1985.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Info Section */}
        <div className="bg-gray-200 py-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Featured Info 1 */}
              <div className="featured-box bg-transparent text-center">
                <img
                  src="/images/servemanager.png"
                  alt="ServeManager"
                  width={230}
                  height={80}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">State of the Art Job Tracking</h3>
                <p>With ServeManager GPS tracking, we always manage your job with accuracy, speed and efficiency.</p>
              </div>

              {/* Featured Info 2 */}
              <div className="featured-box bg-transparent text-center">
                <img
                  src="/images/servenowmember.png"
                  alt="ServeNow Member"
                  width={230}
                  height={80}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">National Serve Now Member</h3>
                <p>ServeNow process servers have been pre-screened and vetted to verify experience and qualifications.</p>
              </div>

              {/* Featured Info 3 */}
              <div className="featured-box bg-transparent text-center">
                <img
                  src="/images/credit-cards.png"
                  alt="Payment Options"
                  width={230}
                  height={80}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">For Your Convenience…</h3>
                <p>We accept Visa, MasterCard and Discover. Send payments by mail to: 3748 S Fulton Ave Tulsa, OK 74135</p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="max-w-4xl mx-auto">
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
}

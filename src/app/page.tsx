'use client'

import ServiceBox from '../components/ServiceBox';
import SafeImage from '../components/SafeImage';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="w-full relative">
        <SafeImage
          src="/images/hero.jpeg"
          alt="Process Service Hero"
          width={1900}
          height={400}
          className="w-full"
          priority
        />
      </section>

      {/* Headline Section */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl font-bold mb-4">SERVING YOU BY SERVING OTHERS</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Wehmeyer Process Service, Inc. is a licensed Tulsa, OK process service agency serving clients nationwide since 1985.
            With over 40 years of experience, Wehmeyer Process Service is committed to service, value and customer satisfaction.
          </p>
        </div>
      </section>

      {/* First Services Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mm-home-box">
            <ServiceBox
              title="Local & Nationwide Service"
              description="Wehmeyer Process Service, Inc. delivers process for clients in Oklahoma and nationwide."
              imagePath="/images/nationwide.gif"
              imageAlt="Nationwide Service Map"
            />
            <ServiceBox
              title="Postal Search & Updates"
              description="We always go the extra mile to locate a current address. Your summons is in good hands."
              imagePath="/images/post_office.jpg"
              imageAlt="Post Office"
            />
            <ServiceBox
              title="Oklahoma Notary Public"
              description="Our in-house notary service helps us complete your job quickly and efficiently every time."
              imagePath="/images/notary.png"
              imageAlt="Notary Public"
            />
            <ServiceBox
              title="Local Court Filings"
              description="Our full service process service agency offers local court filing services. We aim to please."
              imagePath="/images/court-filings.png"
              imageAlt="Court Filings"
            />
          </div>
        </div>
      </section>

      {/* Second Services Section */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mm-home-box">
            <ServiceBox
              title="Court Records Research"
              description="When you need a records search and document retrieval quickly, Wehmeyer is here for you."
              imagePath="/images/court-records.png"
              imageAlt="Court Records"
            />
            <ServiceBox
              title="Stake Out Services"
              description="Is your defendant avoiding service? Don't give up. Let Wehmeyer Process Service help. We get the job done."
              imagePath="/images/stake-out.png"
              imageAlt="Stake Out Services"
            />
            <ServiceBox
              title="Courier Services"
              description="Need delivery fast? Ask about Our Rush Courier Service. We can help… and we're always on time!"
              imagePath="/images/notary.png"
              imageAlt="Courier Services"
            />
            <ServiceBox
              title="Satisfaction Guaranteed"
              description="Michael & Jamie Wehmeyer have been committed to excellence and customer satisfaction since 1985."
              imagePath="/images/michaeljamie.jpg"
              imageAlt="Michael and Jamie Wehmeyer"
            />
          </div>
        </div>
      </section>

      {/* Blue Features Section */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <SafeImage
                src="/images/servemanager.png"
                alt="ServeManager"
                width={180}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="featured-box2 text-xl font-bold">State of the Art Job Tracking</h3>
              <p>With ServeManager GPS tracking, we always manage your job with accuracy, speed and efficiency.</p>
            </div>
            <div className="text-center">
              <SafeImage
                src="/images/servenowmember.png"
                alt="ServeNow Member"
                width={180}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="featured-box2 text-xl font-bold">National Serve Now Member</h3>
              <p>ServeNow process servers have been pre-screened and vetted to verify experience and qualifications.</p>
            </div>
            <div className="text-center">
              <SafeImage
                src="/images/creditcards.png"
                alt="Credit Card Payment"
                width={180}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="featured-box2 text-xl font-bold">For Your Convenience…</h3>
              <p>We accept Visa, MasterCard and Discover. Send payments by mail to: 3748 S Fulton Ave Tulsa, OK 74135</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Message */}
      <section className="bg-gray-200 py-6 border-t border-gray-300">
        <div className="container mx-auto px-4">
          <p className="text-center">
            At Wehmeyer Process Service, Inc. we are licensed and bonded and maintain a current knowledge of all applicable laws,
            so you are assured the best service available. And with our competitive pricing, we will match or beat any competitor's price.
            We want to be your process server.
          </p>
        </div>
      </section>
    </main>
  );
}

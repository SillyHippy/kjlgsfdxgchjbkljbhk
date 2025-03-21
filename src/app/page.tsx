import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function Home() {
  return (
    <>
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/images/banner.jpeg"
          alt="Process Service Banner"
          className="w-full h-64 md:h-80 object-cover"
        />
      </div>

      {/* Main Heading */}
      <section className="bg-gray-200 py-10 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">SERVING YOU BY SERVING OTHERS</h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto">
            Wehmeyer Process Service, Inc. is a licensed Tulsa, OK process service agency serving clients nationwide since 1985.
            With over 40 years of experience, Wehmeyer Process Service is committed to service, value and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Service 1 */}
            <Card className="text-center shadow-sm">
              <CardHeader className="pb-2">
                <img
                  src="/images/nationwide.gif"
                  alt="Local & Nationwide Service"
                  className="w-[250px] h-[200px] mx-auto object-contain"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">Local & Nationwide Service</h3>
                <p>Wehmeyer Process Service, Inc. delivers process for clients in Oklahoma and nationwide.</p>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="text-center shadow-sm">
              <CardHeader className="pb-2">
                <img
                  src="/images/post_office.jpg"
                  alt="Postal Search & Updates"
                  className="w-[250px] h-[200px] mx-auto object-contain"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">Postal Search & Updates</h3>
                <p>We always go the extra mile to locate a current address. Your summons is in good hands.</p>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="text-center shadow-sm">
              <CardHeader className="pb-2">
                <img
                  src="/images/notary.png"
                  alt="Oklahoma Notary Public"
                  className="w-[250px] h-[200px] mx-auto object-contain"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">Oklahoma Notary Public</h3>
                <p>Our in-house notary service helps us complete your job quickly and efficiently every time.</p>
              </CardContent>
            </Card>

            {/* Service 4 */}
            <Card className="text-center shadow-sm">
              <CardHeader className="pb-2">
                <img
                  src="/images/court-filings.png"
                  alt="Local Court Filings"
                  className="w-[250px] h-[200px] mx-auto object-contain"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">Local Court Filings</h3>
                <p>Our full service process service agency offers local court filing services. We aim to please.</p>
              </CardContent>
            </Card>
          </div>

          {/* Second Row of Services */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
            {/* Service 5 */}
            <Card className="text-center shadow-sm">
              <CardHeader className="pb-2">
                <img
                  src="/images/court-records.png"
                  alt="Court Records Research"
                  className="w-[250px] h-[200px] mx-auto object-contain"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">Court Records Research</h3>
                <p>When you need a records search and document retrieval quickly, Wehmeyer is here for you.</p>
              </CardContent>
            </Card>

            {/* Service 6 */}
            <Card className="text-center shadow-sm">
              <CardHeader className="pb-2">
                <img
                  src="/images/stake-out.png"
                  alt="Stake Out Services"
                  className="w-[250px] h-[200px] mx-auto object-contain"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">Stake Out Services</h3>
                <p>Is your defendant avoiding service? Don't give up. Let Wehmeyer Process Service help. We get the job done.</p>
              </CardContent>
            </Card>

            {/* Service 7 */}
            <Card className="text-center shadow-sm">
              <CardHeader className="pb-2">
                <div className="h-[200px] flex items-center justify-center">
                  <img
                    src="/images/notary.png"
                    alt="Courier Services"
                    className="w-[250px] h-[200px] mx-auto object-contain"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">Courier Services</h3>
                <p>Need delivery fast? Ask about Our Rush Courier Service. We can help… and we're always on time!</p>
              </CardContent>
            </Card>

            {/* Service 8 */}
            <Card className="text-center shadow-sm">
              <CardHeader className="pb-2">
                <img
                  src="/images/michael-jamie.jpeg"
                  alt="Satisfaction Guaranteed"
                  className="w-[250px] h-[200px] mx-auto object-contain rounded-full"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
                <p>Michael & Jamie Wehmeyer have been committed to excellence and customer satisfaction since 1985.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <img
                src="/images/servemanager.png"
                alt="State of the Art Job Tracking"
                className="w-[250px] h-[100px] mb-4 mx-auto object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">State of the Art Job Tracking</h3>
              <p>With ServeManager GPS tracking, we always manage your job with accuracy, speed and efficiency.</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <img
                src="/images/servenowmember.png"
                alt="National Serve Now Member"
                className="w-[250px] h-[100px] mb-4 mx-auto object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">National Serve Now Member</h3>
              <p>ServeNow process servers have been pre-screened and vetted to verify experience and qualifications.</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="h-[100px] flex items-center justify-center mb-4">
                <img
                  src="/images/logo.png"
                  alt="For Your Convenience"
                  className="w-[200px] h-[80px] mx-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">For Your Convenience…</h3>
              <p>We accept Visa, MasterCard and Discover. Send payments by mail to: 3748 S Fulton Ave Tulsa, OK 74135</p>
            </div>
          </div>

          {/* Final Guarantee */}
          <div className="mt-12 text-center max-w-4xl mx-auto">
            <p className="text-lg">
              At Wehmeyer Process Service, Inc. we are licensed and bonded and maintain a current knowledge of all applicable laws,
              so you are assured the best service available. And with our competitive pricing, we will match or beat any competitor's price.
              We want to be your process server.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

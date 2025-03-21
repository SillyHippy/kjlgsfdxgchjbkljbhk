import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* About Banner */}
      <section className="bg-blue-500 text-white py-10 text-center">
        <div className="container mx-auto px-4">
          <p className="text-xl md:text-2xl font-bold mb-2">
            Member of ServeNow.com and<br />
            United States Process Servers Association
          </p>
        </div>
      </section>

      {/* About Information */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Experience You Can Trust</h3>
            <p className="mb-6">
              With over 40 years of experience, <strong>Wehmeyer Process Service, Inc.</strong> is committed to
              handling your processing needs with honesty, integrity and confidentiality. We can have your legal
              documents served anywhere in the United States and we want to be your process server.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Efficiency You Can Depend On</h3>
            <p>
              Our fast, efficient and professional service allows us to serve with confidence nationwide.
              Same day rush service is also available
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <img
              src="/images/logo.png"
              alt="Wehmeyer Process Service Logo"
              className="w-[300px] h-[81px] mx-auto mb-6 object-contain"
            />

            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us Today for a Free Quote!</h2>

            <div className="text-blue-600 text-3xl font-bold mb-2">
              <a href="tel:918-638-2837">918-638-2837</a>
            </div>

            <div className="text-blue-600 text-xl">
              <a href="mailto:Wehmeyer@yourserved.com" className="hover:underline">
                Wehmeyer@yourserved.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

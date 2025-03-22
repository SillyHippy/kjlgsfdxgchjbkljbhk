'use client'

import Link from 'next/link';
import SafeImage from '@/components/SafeImage';

export default function AboutPage() {
  return (
    <main>
      {/* Blue Header Section */}
      <section className="bg-wehmeyer-blue py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mm-about-intro-text">
            <p className="font-bold">
              Member of ServeNow.com and<br />
              United States Process Servers Association
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Experience You Can Trust</h3>
            <p className="mb-6">
              With over 40 years of experience, <strong>Wehmeyer Process Service, Inc.</strong> is committed to handling your processing needs with
              honesty, integrity and confidentiality. We can have your legal documents served anywhere in the United States and we want to be your process server.
            </p>

            <h3 className="text-2xl font-bold mb-4">Efficiency You Can Depend On</h3>
            <p className="mb-6">
              Our fast, efficient and professional service allows us to serve with confidence nationwide. Same day rush service is also available
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <SafeImage
            src="/logo.png"
            alt="Wehmeyer Process Service, Inc."
            width={464}
            height={126}
            className="mx-auto mb-8"
          />
          <h2 className="text-2xl font-bold mb-6">Contact Us Today for a Free Quote!</h2>
          <h2 className="mm-cta-box-h2 text-4xl font-bold text-wehmeyer-blue mb-4">
            <Link href="tel:918-638-2837">918-638-2837</Link>
          </h2>
          <p className="text-2xl">
            <Link
              href="mailto:Wehmeyer@yourserved.com"
              className="text-wehmeyer-blue hover:underline"
            >
              Wehmeyer@yourserved.com
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

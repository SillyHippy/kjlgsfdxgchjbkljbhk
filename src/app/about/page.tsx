import Link from 'next/link';

export const metadata = {
  title: 'About Wehmeyer Process Service | Wehmeyer Process Service, Inc. 918-638-2837',
  description: 'Learn about Wehmeyer Process Service, a licensed Tulsa, OK process service agency with over 40 years of experience.',
};

export default function About() {
  return (
    <article className="post">
      <div className="entry-content">
        {/* Member Info Banner */}
        <div className="bg-primary text-white py-10">
          <div className="container mx-auto">
            <div className="text-center">
              <p className="text-xl font-bold">
                Member of ServeNow.com and<br />
                United States Process Servers Association
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-gray-100 py-10">
          <div className="container mx-auto">
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

        {/* Contact CTA Section */}
        <div className="py-16">
          <div className="container mx-auto">
            <div className="text-center">
              <div className="mb-8">
                <img
                  src="/images/logo.png"
                  alt="Wehmeyer Process Service, Inc."
                  width={464}
                  height={126}
                  className="mx-auto"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Contact Us Today for a Free Quote!</h2>
              <div className="mb-4">
                <a href="tel:918-638-2837" className="text-4xl font-bold text-primary hover:underline">
                  918-638-2837
                </a>
              </div>
              <div>
                <a href="mailto:Wehmeyer@yourserved.com" className="text-2xl text-primary hover:underline">
                  Wehmeyer@yourserved.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export const metadata = {
  title: 'Our Services | Wehmeyer Process Service, Inc. 918-638-2837',
  description: 'Learn about the services provided by Wehmeyer Process Service, including process service, notary, court filings, and more.',
};

export default function Services() {
  return (
    <article className="post">
      <div className="entry-content py-10">
        <div className="container mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-6">Our services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                Our experienced process servers are capable of handling your legal documents with the care and urgency that you expect.
                Wehmeyer Process Service, Inc. wants to be your Tulsa, Oklahoma based process server. Call for your Free Quote.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Tulsa, Oklahoma & Nationwide Process Service</li>
                <li>In-house Oklahoma Notary Service</li>
                <li>Searches by phone, address & SSN</li>
                <li>Computerized Tracking</li>
                <li>Court Records Search</li>
                <li>Courier Services</li>
                <li>Postal Searches</li>
                <li>Court Filings</li>
              </ul>
            </div>

            <div className="flex justify-center items-center">
              <img
                src="/images/nationwide.gif"
                alt="Nationwide Service"
                width={300}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <main>
      {/* Contact Header */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Contact Wehmeyer Process Service, Inc.</h1>
          <p className="text-lg">
            Please send pdf version of any paperwork to: <a href="mailto:wehmeyer@yourserved.com" className="text-wehmeyer-blue hover:underline">wehmeyer@yourserved.com</a>
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <ContactForm />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">More Info</h3>

              <p className="mb-6">
                <span className="underline font-bold">Address:</span><br />
                <strong>Wehmeyer Process Service, Inc.</strong><br />
                3748 S Fulton Ave Tulsa, OK 74135
              </p>

              <p>
                Michael Wehmeyer<br />
                <strong>Cell:</strong> <a href="tel:918-638-2837" className="text-wehmeyer-blue hover:underline">918-638-2837</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

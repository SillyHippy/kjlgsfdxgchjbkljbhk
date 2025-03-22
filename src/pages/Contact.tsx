import React, { useState, useRef, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState('');

  // Generate random numbers for captcha
  const captchaInfo = useMemo(() => {
    const firstDigit = Math.floor(Math.random() * 10);
    const secondDigit = Math.floor(Math.random() * 10);
    return {
      firstDigit,
      secondDigit,
      sum: firstDigit + secondDigit,
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    if (parseInt(captchaAnswer) !== captchaInfo.sum) {
      toast.error('Incorrect captcha answer. Please try again.');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        'testing',
        'template_tz9jwdk',
        form.current,
        'hZtaqkmyCC0G8fVje'
      );

      if (result.text === 'OK') {
        toast.success('Message sent successfully!');
        form.current.reset();
        setCaptchaAnswer('');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Wehmeyer Process Service - Tulsa Process Server | 918-638-2837</title>
        <meta name="description" content="Contact Wehmeyer Process Service for professional process serving in Tulsa and nationwide. Get a free quote today. Call 918-638-2837 or email us." />
        <link rel="canonical" href="https://yourserved.com/contact" />
      </Helmet>
      <article className="post type-page status-publish">
        <div className="entry-content">
          {/* Header Section */}
          <section className="bg-secondary py-8">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl font-bold mb-4">Contact Wehmeyer Process Service, Inc.</h1>
              <p>Please send pdf version of any paperwork to: <a href="mailto:wehmeyer@yourserved.com" className="text-primary hover:underline">wehmeyer@yourserved.com</a></p>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

                  <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          className="w-full p-3 border border-gray-300 rounded"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                          className="w-full p-3 border border-gray-300 rounded"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        className="w-full p-3 border border-gray-300 rounded"
                        required
                      ></textarea>
                    </div>

                    <div className="flex items-center justify-end">
                      <div className="flex items-center mr-4">
                        <span className="mr-2">{captchaInfo.firstDigit} + {captchaInfo.secondDigit} =</span>
                        <input
                          type="text"
                          value={captchaAnswer}
                          onChange={(e) => setCaptchaAnswer(e.target.value)}
                          className="w-16 p-2 border border-gray-300 rounded"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`bg-primary text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors ${
                          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      >
                        {isSubmitting ? 'Sending...' : 'Submit'}
                      </button>
                    </div>
                  </form>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                  <address className="not-italic">
                    <p className="mb-4">
                      <span className="underline font-bold">Address:</span><br />
                      <strong>Wehmeyer Process Service, Inc.</strong><br />
                      3748 S Fulton Ave<br />
                      Tulsa, OK 74135
                    </p>

                    <p>
                      Michael Wehmeyer<br />
                      <strong>Phone:</strong> <a href="tel:+19186382837" className="text-primary hover:underline">918-638-2837</a>
                    </p>
                  </address>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default Contact;
import React, { useState, useRef, useMemo } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState('');

  // Generate random numbers for captcha
  const captchaInfo = useMemo(() => {
    const firstDigit = Math.floor(Math.random() * 10); // 0-9
    const secondDigit = Math.floor(Math.random() * 10); // 0-9
    return {
      firstDigit,
      secondDigit,
      sum: firstDigit + secondDigit,
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    // Validate captcha
    if (parseInt(captchaAnswer) !== captchaInfo.sum) {
      toast.error('Incorrect captcha answer. Please try again.');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        'testing', // Replace with your EmailJS service ID
        'template_tz9jwdk', // Replace with your EmailJS template ID
        form.current,
        'hZtaqkmyCC0G8fVje' // Replace with your EmailJS public key
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
    <article className="post type-page status-publish">
      <div className="entry-content">
        {/* Header Section */}
        <div className="bg-secondary py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Contact Wehmeyer Process Service, Inc.</h1>
            <p>Please send pdf version of any paperwork to: wehmeyer@yourserved.com</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h1 className="text-2xl font-bold mb-6">Get In Touch</h1>

                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
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
                        placeholder="Email Address"
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
                      placeholder="Message"
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
                <h3 className="text-2xl font-bold mb-6">More Info</h3>

                <p className="mb-4">
                  <span className="underline font-bold">Address:</span><br />
                  <strong>Wehmeyer Process Service, Inc.</strong><br />
                  3748 S Fulton Ave Tulsa, OK 74135
                </p>

                <p>
                  Michael Wehmeyer<br />
                  <strong>Cell:</strong> 918-638-2837
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </article>
  );
};

export default Contact;
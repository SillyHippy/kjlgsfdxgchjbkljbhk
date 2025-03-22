import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    captcha: '',
  });

  const [captchaInfo] = useState({
    firstDigit: 4,
    secondDigit: 14,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    // For this clone, we'll just log it to the console
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
      captcha: '',
    });
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

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
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
                        value={formData.email}
                        onChange={handleInputChange}
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
                      value={formData.message}
                      onChange={handleInputChange}
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
                        name="captcha"
                        value={formData.captcha}
                        onChange={handleInputChange}
                        className="w-16 p-2 border border-gray-300 rounded"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-primary text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors"
                    >
                      Submit
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
    </article>
  );
};

export default Contact;

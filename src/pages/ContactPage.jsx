import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    captcha: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [captchaAnswer] = useState(18); // 4 + 14 = 18
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill out all required fields.');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Validate captcha
    if (parseInt(formData.captcha) !== captchaAnswer) {
      setError('Incorrect captcha answer. Please try again.');
      return;
    }

    // Clear any errors
    setError('');

    // Form submission successful
    setFormSubmitted(true);

    // In a real app, you would send the form data to a server here
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="bg-light py-10">
        <div className="container">
          <h1 className="text-3xl md:text-4xl mb-4">Contact Wehmeyer Process Service, Inc.</h1>
          <p className="text-lg">
            Please send pdf version of any paperwork to:
            <a href="mailto:wehmeyer@yourserved.com" className="text-primary hover:underline ml-1">
              wehmeyer@yourserved.com
            </a>
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Form - 2/3 width on desktop */}
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl mb-6">Get In Touch</h2>

              {formSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  <p>Thank you for your message! We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                      <p>{error}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <span>4 + 14 = </span>
                      <input
                        type="text"
                        name="captcha"
                        value={formData.captcha}
                        onChange={handleChange}
                        className="w-16 ml-2 p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary rounded"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Info - 1/3 width on desktop */}
            <div>
              <h3 className="text-xl mb-6">More Info</h3>

              <p className="mb-4">
                <span className="font-semibold underline">Address:</span><br />
                <strong>Wehmeyer Process Service, Inc.</strong><br />
                3748 S Fulton Ave Tulsa, OK 74135
              </p>

              <p>
                Michael Wehmeyer<br />
                <strong>Cell:</strong>
                <a href="tel:918-638-2837" className="hover:underline">
                  918-638-2837
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

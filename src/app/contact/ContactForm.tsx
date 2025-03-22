'use client'

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    captcha: '',
  });

  const [captchaQuestion] = useState({
    first: 4,
    second: 14,
    answer: 18
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate captcha
    if (parseInt(formData.captcha) !== captchaQuestion.answer) {
      alert("Please enter the correct answer to the math question.");
      return;
    }

    setFormStatus('submitting');

    // In a real implementation, this would send the form data to a server
    // For this demo, we'll just simulate a successful submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        message: '',
        captcha: '',
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-100 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-100 border border-gray-300 rounded"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full p-3 bg-gray-100 border border-gray-300 rounded"
        ></textarea>
      </div>

      <div className="flex items-center justify-end mb-4">
        <div className="captcha flex items-center">
          <span className="mr-2">{captchaQuestion.first} + {captchaQuestion.second} =</span>
          <input
            type="text"
            name="captcha"
            value={formData.captcha}
            onChange={handleChange}
            required
            className="w-16 p-2 bg-gray-100 border border-gray-300 rounded"
          />
        </div>
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="px-6 py-2 bg-wehmeyer-blue text-white border border-wehmeyer-blue rounded hover:bg-white hover:text-wehmeyer-blue transition-colors"
          disabled={formStatus === 'submitting'}
        >
          {formStatus === 'submitting' ? 'Submitting...' : 'Submit'}
        </button>
      </div>

      {formStatus === 'success' && (
        <div className="mt-4 p-3 bg-green-100 text-green-800 rounded">
          Thank you for your message! We will get back to you soon.
        </div>
      )}

      {formStatus === 'error' && (
        <div className="mt-4 p-3 bg-red-100 text-red-800 rounded">
          There was an error submitting your message. Please try again.
        </div>
      )}
    </form>
  );
}

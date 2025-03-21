"use client";

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setMessageType('');

    // Get form data for validation
    const formData = new FormData(form.current as HTMLFormElement);
    const captcha = formData.get('captcha') as string;

    // Simple captcha validation
    if (captcha !== '18') {
      setSubmitMessage('Please enter the correct sum for 4 + 14');
      setMessageType('error');
      setIsSubmitting(false);
      return;
    }

    // For a static site deployment, uncomment this code and add your EmailJS keys
    /*
    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Get this from EmailJS dashboard
      'YOUR_TEMPLATE_ID', // Create a template in EmailJS dashboard
      form.current as HTMLFormElement,
      'YOUR_PUBLIC_KEY' // Your EmailJS public key
    )
    .then((result) => {
      setSubmitMessage('Message sent successfully! We will get back to you soon.');
      setMessageType('success');
      if (form.current) {
        form.current.reset();
      }
    }, (error) => {
      setSubmitMessage('Failed to send the message. Please try again or contact us directly.');
      setMessageType('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
    */

    // Demo mode - simulate sending (remove this in production)
    setTimeout(() => {
      setSubmitMessage('Message sent successfully! (Demo Mode - In production, this would use EmailJS to send an actual email)');
      setMessageType('success');
      if (form.current) {
        form.current.reset();
      }
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      {/* Contact Header */}
      <section className="bg-gray-200 py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Contact Wehmeyer Process Service, Inc.</h1>
            <p className="text-lg">
              Please send pdf version of any paperwork to:
              <a href="mailto:wehmeyer@yourserved.com" className="text-blue-500 hover:underline ml-1">
                wehmeyer@yourserved.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

              {submitMessage && (
                <div className={`p-4 mb-6 rounded ${messageType === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitMessage}
                </div>
              )}

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Name" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email Address
                    </label>
                    <Input id="email" name="email" type="email" placeholder="Email Address" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" name="message" placeholder="Message" rows={6} required />
                </div>

                <div className="flex items-center justify-end space-x-4">
                  <div className="flex items-center">
                    <span className="mr-2">4 + 14 =</span>
                    <Input
                      type="text"
                      className="w-20 h-8"
                      name="captcha"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </Button>
                </div>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">More Info</h3>

              <div className="space-y-4">
                <p>
                  <span className="font-semibold underline block">Address:</span>
                  <strong className="block">Wehmeyer Process Service, Inc.</strong>
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
      </section>
    </>
  );
}

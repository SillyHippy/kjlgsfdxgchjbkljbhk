'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name is required' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  message: z.string().min(5, { message: 'Message is required' }),
  captcha: z.string().refine((val) => parseInt(val) === 18, {
    message: 'Please solve the captcha correctly'
  }),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      captcha: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSuccess(true);
      form.reset();
    }, 1000);
  }

  return (
    <article className="post">
      <div className="entry-content">
        {/* Contact Header Section */}
        <div className="bg-gray-200 py-10">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-2">Contact Wehmeyer Process Service, Inc.</h1>
            <p>Please send pdf version of any paperwork to: <a href="mailto:wehmeyer@yourserved.com" className="text-primary hover:underline">wehmeyer@yourserved.com</a></p>
          </div>
        </div>

        <div className="py-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="md:col-span-2">
                <h1 className="text-2xl font-bold mb-6">Get In Touch</h1>

                {isSuccess ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    <p>Your message has been sent successfully. We'll get back to you soon!</p>
                  </div>
                ) : null}

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="Email Address" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Message" rows={6} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex items-center justify-end">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <span className="mr-2">4 + 14 =</span>
                          <FormField
                            control={form.control}
                            name="captcha"
                            render={({ field }) => (
                              <FormItem className="w-16">
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <Button type="submit" disabled={isSubmitting}>
                          {isSubmitting ? 'Submitting...' : 'Submit'}
                        </Button>
                      </div>
                    </div>
                  </form>
                </Form>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold mb-6">More Info</h3>

                <div className="mb-6">
                  <p className="mb-2"><span className="underline font-bold">Address:</span></p>
                  <p className="font-bold">Wehmeyer Process Service, Inc.</p>
                  <p>3748 S Fulton Ave Tulsa, OK 74135</p>
                </div>

                <div>
                  <p>Michael Wehmeyer</p>
                  <p><strong>Cell:</strong> 918-638-2837</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

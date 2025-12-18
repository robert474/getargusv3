'use client';

import { useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Link from 'next/link';
import { Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', interest: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-[#0F172A] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-4">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Let&apos;s Talk Traffic Intelligence
              </h1>
              <p className="text-xl text-gray-300">
                Whether you&apos;re exploring API integration, discussing partnership opportunities,
                or have questions about our platform, we&apos;re here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Send Us a Message</h2>

                {status === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-2">Message Received!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. We&apos;ll get back to you within 1-2 business days.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Want to schedule a call right now?
                    </p>
                    <a
                      href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3opt3pRGPQDYnT5IBpyltSRS764eRUP_ptoibtRyObzq1DwIR799VDAlXQucq2AnDlZgrN3vPV"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-[#C9A23A] text-white font-semibold rounded-lg hover:bg-[#E7C873] transition-colors"
                    >
                      Book a Meeting
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {status === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                        Something went wrong. Please try again or email us at info@getargus.ai
                      </div>
                    )}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A23A] focus:border-transparent transition-colors bg-white text-gray-900"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A23A] focus:border-transparent transition-colors bg-white text-gray-900"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A23A] focus:border-transparent transition-colors bg-white text-gray-900"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                        I&apos;m interested in
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A23A] focus:border-transparent transition-colors bg-white text-gray-900"
                      >
                        <option value="">Select an option</option>
                        <option value="api">API Integration</option>
                        <option value="enterprise">Enterprise Solutions</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="data-provider">Becoming a Data Provider</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A23A] focus:border-transparent transition-colors resize-none bg-white text-gray-900"
                        placeholder="Tell us about your use case or questions..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full px-6 py-3 bg-[#C9A23A] text-white font-semibold rounded-lg hover:bg-[#E7C873] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info & Booking */}
              <div>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Other Ways to Connect</h2>

                {/* Schedule a Call CTA */}
                <div className="bg-[#0F172A] rounded-xl p-8 mb-8">
                  <h3 className="text-xl font-bold text-white mb-3">Schedule a Call</h3>
                  <p className="text-gray-300 mb-6">
                    Want to discuss your specific use case? Book a time that works for you
                    and we&apos;ll walk through how Argus AI can help.
                  </p>
                  <a
                    href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3opt3pRGPQDYnT5IBpyltSRS764eRUP_ptoibtRyObzq1DwIR799VDAlXQucq2AnDlZgrN3vPV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-[#7FB7FF] text-[#0F172A] font-semibold rounded-lg hover:bg-[#A5CEFF] transition-colors"
                  >
                    Book a Demo
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F2F5F9] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#C9A23A]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F172A]">Email</h3>
                      <a href="mailto:info@getargus.ai" className="text-gray-600 hover:text-[#C9A23A] transition-colors">
                        info@getargus.ai
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F2F5F9] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#C9A23A]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F172A]">Location</h3>
                      <p className="text-gray-600">
                        Lincoln, Nebraska<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F2F5F9] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#C9A23A]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F172A]">Response Time</h3>
                      <p className="text-gray-600">
                        We typically respond within 1-2 business days
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-[#0F172A] mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <Link href="/developer" className="block text-gray-600 hover:text-[#C9A23A] transition-colors">
                      Developer Documentation
                    </Link>
                    <Link href="/company/vision" className="block text-gray-600 hover:text-[#C9A23A] transition-colors">
                      Our Vision
                    </Link>
                    <Link href="/about" className="block text-gray-600 hover:text-[#C9A23A] transition-colors">
                      About Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#F2F5F9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8 text-center">
              Common Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-[#0F172A] mb-2">How do I get API access?</h3>
                <p className="text-gray-600">
                  Contact us through this form or schedule a call. We&apos;ll discuss your use case,
                  provide pricing information, and set up your API credentials typically within 1-2 business days.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-[#0F172A] mb-2">Do you offer a free trial?</h3>
                <p className="text-gray-600">
                  We offer sandbox access for evaluation purposes. Contact us to discuss a trial
                  that fits your specific testing needs.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-[#0F172A] mb-2">I&apos;m a data provider. How can I partner with Argus AI?</h3>
                <p className="text-gray-600">
                  We&apos;re always looking to expand our data sources. If you have traffic-related data
                  (telematics, camera feeds, sensor data, etc.), select &quot;Becoming a Data Provider&quot;
                  in the form above and tell us about your data.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

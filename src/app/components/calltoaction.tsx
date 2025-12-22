'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#0F172A] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C9A23A] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7FB7FF] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-block text-[#C9A23A] text-sm font-semibold uppercase tracking-wider mb-4">
              Interested in Running a Pilot?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let&apos;s talk about your fleet
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Whether you&apos;re running 50 trucks or 5,000, we&apos;ll show you how sub-10-second alerts can protect your drivers and keep your fleet moving.
            </p>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#C9A23A] rounded-full"></span>
                <span>Works with Platform Science, Geotab, Samsara, Motive</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#C9A23A] rounded-full"></span>
                <span>No integration required for marketplace apps</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#C9A23A] rounded-full"></span>
                <span>Founder-led support during your pilot</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-[#0F172A] mb-6">Get started</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A23A] focus:border-transparent outline-none transition-all text-[#0F172A]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Work email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A23A] focus:border-transparent outline-none transition-all text-[#0F172A]"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="fleet-size" className="block text-sm font-medium text-gray-700 mb-1">
                  Fleet size
                </label>
                <select
                  id="fleet-size"
                  name="fleet-size"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A23A] focus:border-transparent outline-none transition-all bg-white text-[#0F172A]"
                >
                  <option value="">Select fleet size</option>
                  <option value="10-50">10-50 vehicles</option>
                  <option value="50-200">50-200 vehicles</option>
                  <option value="200-500">200-500 vehicles</option>
                  <option value="500+">500+ vehicles</option>
                  <option value="api">I&apos;m interested in the API</option>
                </select>
              </div>
              <div>
                <label htmlFor="telematics" className="block text-sm font-medium text-gray-700 mb-1">
                  Current telematics
                </label>
                <select
                  id="telematics"
                  name="telematics"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A23A] focus:border-transparent outline-none transition-all bg-white text-[#0F172A]"
                >
                  <option value="">Select your provider</option>
                  <option value="platform-science">Platform Science</option>
                  <option value="geotab">Geotab</option>
                  <option value="samsara">Samsara</option>
                  <option value="motive">Motive</option>
                  <option value="other">Other</option>
                  <option value="none">None / Building our own</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-4 bg-[#0F172A] hover:bg-[#1e293b] text-white rounded-lg font-semibold transition-colors mt-2"
              >
                Request a demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4 text-center">
              Or{' '}
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3opt3pRGPQDYnT5IBpyltSRS764eRUP_ptoibtRyObzq1DwIR799VDAlXQucq2AnDlZgrN3vPV"
                className="text-[#C9A23A] hover:underline"
              >
                book a call directly
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
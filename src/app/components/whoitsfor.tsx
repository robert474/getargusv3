'use client';

import { Truck, Code, ArrowRight } from 'lucide-react';

export default function WhoItsFor() {
  return (
    <section id="get-started" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-4">
            Two Ways to Get Started
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">
            Choose your integration
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you run a fleet or build navigation products, we have you covered.
          </p>
        </div>

        {/* Two Track Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Fleet App Track */}
          <div className="bg-gradient-to-br from-[#0F172A] to-[#1e293b] rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A23A]/10 rounded-full blur-2xl"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-[#C9A23A] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Fleet Operators
              </h3>
              <p className="text-xl font-medium text-[#C9A23A] mb-4">
                In-cab alerts for your drivers
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Get real-time crash and slowdown alerts pushed directly to your drivers&apos; screens. Available on Platform Science and Geotab Marketplace.
              </p>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C9A23A] rounded-full"></span>
                  Works with your existing telematics
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C9A23A] rounded-full"></span>
                  No integration required
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C9A23A] rounded-full"></span>
                  Start in minutes
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://marketplace.platformscience.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#C9A23A] hover:bg-[#E7C873] text-[#0F172A] rounded-lg font-semibold transition-colors"
                >
                  Platform Science
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a
                  href="https://marketplace.geotab.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-colors border border-white/20"
                >
                  Geotab Marketplace
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* API Track */}
          <div id="api-access" className="bg-[#F2F5F9] rounded-2xl p-8 md:p-10 relative overflow-hidden border border-gray-200">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7FB7FF]/20 rounded-full blur-2xl"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7FB7FF] to-[#A5CEFF] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">
                Nav Platforms & Ride-Haul
              </h3>
              <p className="text-xl font-medium text-[#7FB7FF] mb-4">
                Real-time incidents API
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ingest sub-10-second incident data to reroute drivers before crowd-sourced apps update. One API, all the data you need.
              </p>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#7FB7FF] rounded-full"></span>
                  Crashes, slowdowns, construction
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#7FB7FF] rounded-full"></span>
                  6x faster than INRIX, TomTom, Waze
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#7FB7FF] rounded-full"></span>
                  RESTful API with webhooks
                </li>
              </ul>
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3opt3pRGPQDYnT5IBpyltSRS764eRUP_ptoibtRyObzq1DwIR799VDAlXQucq2AnDlZgrN3vPV"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#0F172A] hover:bg-[#1e293b] text-white rounded-lg font-semibold transition-colors w-full sm:w-auto"
              >
                Request API Access
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

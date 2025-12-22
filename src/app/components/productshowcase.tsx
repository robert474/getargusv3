'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function ProductShowcase() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Navigation API Card */}
          <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 md:h-80">
              <Image
                src="/images/rideshare1.png"
                alt="Navigation API"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="inline-block text-[#7FB7FF] text-xs font-semibold uppercase tracking-wider mb-2">
                For Nav Platforms & Ride-Haul
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Navigation API
              </h3>
              <p className="text-gray-300 text-sm md:text-base mb-4">
                Sub-10s incident detection for your routing engine. One API, 9 detection types.
              </p>
              <a
                href="#api-access"
                className="inline-flex items-center text-[#7FB7FF] font-semibold hover:text-[#A5CEFF] transition-colors"
              >
                Request API Access
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Fleet App Card */}
          <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 md:h-80">
              <Image
                src="/images/lastmile1.png"
                alt="Fleet Traffic Alerting App"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="inline-block text-[#C9A23A] text-xs font-semibold uppercase tracking-wider mb-2">
                For Fleet Operators
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Fleet Alerting App
              </h3>
              <p className="text-gray-300 text-sm md:text-base mb-4">
                In-cab alerts on Platform Science & Geotab. No integration required.
              </p>
              <a
                href="#get-started"
                className="inline-flex items-center text-[#C9A23A] font-semibold hover:text-[#E7C873] transition-colors"
              >
                Get the App
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

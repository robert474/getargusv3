'use client';

import { Truck, Navigation, Monitor } from 'lucide-react';
import Link from 'next/link';

export default function WhoItsFor() {
  const audiences = [
    {
      icon: Truck,
      title: 'Fleets',
      benefit: 'Protect drivers and assets with real-time crash and slowdown alerts.',
      description: 'Push alerts to drivers before they hit congestion. Reduce fuel spend, improve HOS compliance, and keep your fleet moving.',
      link: '/industries#fleet',
      color: 'from-[#C9A23A] to-[#E7C873]'
    },
    {
      icon: Navigation,
      title: 'Navigation Platforms',
      benefit: 'Ingest sub-10s incidents to reroute drivers before crowd-sourced apps update.',
      description: 'One API for crashes, slowdowns, construction, emergency vehicles, and more. 6x faster than INRIX, TomTom, or Waze.',
      link: '/developer/api',
      color: 'from-[#7FB7FF] to-[#A5CEFF]'
    },
    {
      icon: Monitor,
      title: 'In-cab / Telematics',
      benefit: 'Drop Argus alerts into the screens you already control.',
      description: 'Platform Science and Geotab integrations coming soon. Direct alerts without building your own detection infrastructure.',
      link: '/industries#fleet',
      color: 'from-[#233247] to-[#0F172A]'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-4">
            Who It&apos;s For
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">
            Built for the mobility stack
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Three ways to plug into the sub-10-second traffic data rail
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={index}
                className="bg-[#F2F5F9] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${audience.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
                  {audience.title}
                </h3>

                {/* Main Benefit */}
                <p className="text-lg font-medium text-[#0F172A] mb-4 leading-snug">
                  {audience.benefit}
                </p>

                {/* Description */}
                <p className="text-gray-600 mb-6 flex-grow">
                  {audience.description}
                </p>

                {/* CTA */}
                <Link
                  href={audience.link}
                  className="inline-flex items-center text-[#C9A23A] font-semibold hover:text-[#E7C873] transition-colors"
                >
                  Learn more
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

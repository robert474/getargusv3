'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function RailProtocol() {
  return (
    <section className="py-12 md:py-16 bg-[#F2F5F9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100 text-center">
          <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-4">
            Our Vision
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">
            Building the neutral traffic data rail
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            We&apos;re creating a single source of truth for real-time traffic intelligence—where fleets, nav platforms, and OEMs can all plug into the same sub-10-second feed.
          </p>
          <Link
            href="/company/our-vision"
            className="inline-flex items-center text-[#0F172A] font-semibold hover:text-[#C9A23A] transition-colors"
          >
            Learn about our vision
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

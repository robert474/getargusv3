'use client';

import { Truck, Navigation, Car, Radio, ArrowRight, ArrowLeft } from 'lucide-react';

export default function RailProtocol() {
  const contributors = [
    { icon: Truck, label: 'Fleets' },
    { icon: Navigation, label: 'Nav Platforms' },
    { icon: Car, label: 'OEMs' },
    { icon: Radio, label: 'Telematics' }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#F2F5F9] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-4">
            The Protocol
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
            Built as the neutral traffic data rail
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Fleets, nav platforms, OEMs, and telematics can all plug into the same sub-10-second traffic feed. Contributors who share signals get cheaper, better access; everyone benefits from a single source of truth.
          </p>
        </div>

        {/* Rail Diagram */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Contributors Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
              {contributors.map((contributor, index) => {
                const Icon = contributor.icon;
                return (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl shadow-lg border border-gray-200 flex items-center justify-center mb-3">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#0F172A]" />
                    </div>
                    <span className="text-sm md:text-base font-semibold text-[#0F172A]">{contributor.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Arrows Down */}
            <div className="flex justify-around mb-4 px-8 md:px-16">
              {contributors.map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <ArrowRight className="w-5 h-5 text-[#C9A23A] rotate-90" />
                </div>
              ))}
            </div>

            {/* Central Rail Box */}
            <div className="bg-[#0F172A] rounded-2xl p-6 md:p-8 mb-4 relative">
              <div className="text-center">
                <div className="inline-block bg-[#C9A23A] text-[#0F172A] text-xs font-bold px-3 py-1 rounded-full mb-4">
                  SINGLE SOURCE OF TRUTH
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Argus Rail
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  Sub-10-second traffic intelligence layer
                </p>
              </div>
            </div>

            {/* Arrows Down */}
            <div className="flex justify-center mb-4">
              <ArrowRight className="w-6 h-6 text-[#C9A23A] rotate-90" />
            </div>

            {/* Output Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#7FB7FF]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Truck className="w-6 h-6 text-[#7FB7FF]" />
                </div>
                <h4 className="font-bold text-[#0F172A] mb-1">Real-time Alerts API</h4>
                <p className="text-sm text-gray-600">Crash and slowdown alerts for your platform</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#7FB7FF]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Navigation className="w-6 h-6 text-[#7FB7FF]" />
                </div>
                <h4 className="font-bold text-[#0F172A] mb-1">Driver App</h4>
                <p className="text-sm text-gray-600">Direct alerts to drivers in the cab</p>
              </div>
            </div>

            {/* Contributor Benefit Tag */}
            <div className="mt-8 text-center">
              <span className="inline-flex items-center bg-[#C9A23A]/10 text-[#C9A23A] text-sm font-semibold px-4 py-2 rounded-full border border-[#C9A23A]/30">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Contributors pay less per alert
                <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

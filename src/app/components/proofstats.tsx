'use client';

import { Clock, Shield, Zap } from 'lucide-react';

export default function ProofStats() {
  const stats = [
    {
      icon: Clock,
      value: 'Up to 20 minutes faster',
      label: '911 response times in pilots',
      description: 'Reduction in emergency response times during initial deployments with public safety partners.'
    },
    {
      icon: Shield,
      value: '10–30% fewer fatalities',
      label: 'In early deployments',
      description: 'Potential reduction in traffic fatalities based on faster incident detection and response.'
    },
    {
      icon: Zap,
      value: 'Sub-10s detection',
      label: 'Crashes and abnormal slowdowns',
      description: 'Real-time detection from DOT cameras—6x faster than crowd-sourced alternatives.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-4">
            Proven Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Real-world impact from day one
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A23A]/20 rounded-full mb-6">
                  <Icon className="w-8 h-8 text-[#C9A23A]" />
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#C9A23A] mb-2">
                  {stat.value}
                </div>
                <div className="text-lg md:text-xl font-semibold text-white mb-3">
                  {stat.label}
                </div>
                <p className="text-gray-400 text-sm md:text-base max-w-xs mx-auto">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom connector sentence */}
        <div className="text-center border-t border-white/10 pt-10">
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Those same signals let fleets and nav platforms protect drivers, assets, and on-time performance in real time.
          </p>
        </div>
      </div>
    </section>
  );
}

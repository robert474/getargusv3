import { Metadata } from 'next';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import CallToAction from '@/app/components/calltoaction';
import { Truck, CheckCircle, Clock, DollarSign, Fuel, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Trucking Traffic Alerts | Real-Time Incident Detection for Trucking Companies | Argus AI',
  description: 'Sub-10-second crash alerts for trucking fleets. Reduce fuel costs, improve HOS compliance, increase on-time delivery. Works with your existing ELD and telematics.',
  keywords: 'trucking traffic alerts, truck routing, OTR trucking, freight traffic, trucking fleet management, ELD integration, HOS compliance, truck driver alerts',
  openGraph: {
    title: 'Trucking Traffic Alerts | Argus AI',
    description: 'Sub-10-second crash alerts for trucking fleets. Reduce fuel costs and improve on-time delivery.',
  },
};

export default function TruckingPage() {
  const stats = [
    { stat: '28%', label: 'Fuel cost reduction', icon: Fuel },
    { stat: '96%', label: 'On-time delivery rate', icon: Clock },
    { stat: '$4,200', label: 'Annual savings per truck', icon: DollarSign },
  ];

  const features = [
    'Real-time crash and slowdown alerts on major highways',
    'HOS-aware routing - avoid delays that burn drive time',
    'Integration with ELDs and dispatch systems',
    'Hazmat and oversized load routing considerations',
    'Weather and construction zone alerts',
    'Works with Platform Science, Geotab, Samsara, Omnitracs',
  ];

  const challenges = [
    {
      problem: 'Driver stuck in 2-hour delay',
      cost: '$180+ in driver wages',
      solution: 'Alert received before backup formed',
    },
    {
      problem: 'HOS violation from unexpected traffic',
      cost: '$16,000 average FMCSA fine',
      solution: 'Reroute to protect remaining drive time',
    },
    {
      problem: 'Missed delivery window',
      cost: '$500+ detention fees',
      solution: 'Proactive shipper notification',
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#0F172A] text-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-[#C9A23A] text-sm font-semibold uppercase tracking-wider mb-4">
                  For Trucking Companies
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Protect your drivers&apos; hours from traffic surprises
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  One unexpected delay can burn 2 hours of HOS and blow a delivery window.
                  Our sub-10-second alerts give dispatchers time to reroute before drivers hit congestion.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/#get-started"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#C9A23A] hover:bg-[#E7C873] text-[#0F172A] rounded-lg font-semibold transition-colors"
                  >
                    Get Fleet Alerts
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    href="/industries#fleet"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-colors border border-white/20"
                  >
                    See Case Study
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-gradient-to-br from-[#1e293b] to-[#0F172A] rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <Truck className="w-12 h-12 text-[#C9A23A]" />
                    <div>
                      <div className="font-semibold">Driver Alert</div>
                      <div className="text-sm text-gray-400">I-80 Eastbound, Exit 42</div>
                    </div>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
                    <div className="text-red-400 font-semibold">3-vehicle crash ahead</div>
                    <div className="text-sm text-gray-400">Detected 8 seconds ago</div>
                  </div>
                  <div className="text-sm text-gray-400">
                    Recommended: Exit 40 to US-30, rejoin I-80 at Exit 55
                    <div className="text-green-400 mt-1">Saves ~45 minutes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 bg-[#0F172A] rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-[#C9A23A]" />
                    </div>
                    <div className="text-4xl font-bold text-[#0F172A] mb-2">{item.stat}</div>
                    <div className="text-gray-600">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cost of Delays Section */}
        <section className="py-16 bg-[#F2F5F9]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                The true cost of traffic surprises
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every delay costs more than just time. Protect your bottom line with earlier alerts.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {challenges.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-200">
                  <div className="bg-red-50 p-4 border-b border-red-100">
                    <div className="font-semibold text-red-800">{item.problem}</div>
                    <div className="text-2xl font-bold text-red-600 mt-1">{item.cost}</div>
                  </div>
                  <div className="bg-green-50 p-4">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span className="text-green-800 font-medium">Argus Solution</span>
                    </div>
                    <div className="text-green-700 text-sm mt-1">{item.solution}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                Built for trucking operations
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-[#F2F5F9] rounded-lg p-5">
                  <CheckCircle className="w-5 h-5 text-[#C9A23A] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-16 bg-[#0F172A] text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Works with your existing systems</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              No rip-and-replace required. Argus integrates with the telematics and ELD systems you already use.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <span className="text-lg">Platform Science</span>
              <span className="text-lg">Geotab</span>
              <span className="text-lg">Samsara</span>
              <span className="text-lg">Motive</span>
              <span className="text-lg">Omnitracs</span>
              <span className="text-lg">Trimble</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

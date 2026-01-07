import { Metadata } from 'next';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import CallToAction from '@/app/components/calltoaction';
import { Truck, CheckCircle, Clock, DollarSign, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fleet Traffic Alerts | Real-Time Incident Detection for Fleet Managers | Argus AI',
  description: 'Get sub-10-second crash and slowdown alerts for your fleet. Reduce fuel costs 28%, increase on-time delivery to 96%. Works with Platform Science, Geotab, Samsara, Motive.',
  keywords: 'fleet traffic alerts, fleet management, real-time incident detection, truck routing, delivery optimization, fleet telematics, Platform Science, Geotab',
  openGraph: {
    title: 'Fleet Traffic Alerts | Argus AI',
    description: 'Sub-10-second crash and slowdown alerts for fleets. Reduce fuel costs 28%, increase on-time delivery to 96%.',
  },
};

export default function FleetsPage() {
  const stats = [
    { stat: '5-15%', label: 'More deliveries per hour', icon: Truck },
    { stat: '28%', label: 'Fuel cost reduction', icon: DollarSign },
    { stat: '96%', label: 'On-time delivery rate', icon: Clock },
  ];

  const features = [
    'Sub-10-second incident detection - know about crashes before traffic builds',
    'Real-time alerts pushed directly to driver screens',
    'Works with Platform Science, Geotab, Samsara, Motive',
    'No complex integration - available on telematics marketplaces',
    'Automatic rerouting suggestions around incidents',
    'Coverage across major US metros and highways',
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
                  For Fleet Managers
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Stop losing drivers to avoidable traffic delays
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Your drivers waste 2+ hours daily stuck in traffic they could have avoided.
                  Our sub-10-second incident detection alerts them before congestion even forms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/solutions/app"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#7FB7FF] hover:bg-[#A5CEFF] text-[#0F172A] rounded-lg font-semibold transition-colors"
                  >
                    Get the App
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    href="/developer/api"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-colors border border-white/20"
                  >
                    See API Docs
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-gradient-to-br from-[#1e293b] to-[#0F172A] rounded-2xl p-8 border border-white/10">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-[#C9A23A] mb-2">&lt;10s</div>
                    <div className="text-gray-400">Incident detection time</div>
                    <div className="mt-6 text-sm text-gray-500">
                      vs 5-15 minutes for Google Maps, Waze, INRIX
                    </div>
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

        {/* Features Section */}
        <section className="py-16 bg-[#F2F5F9]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                What you get with Argus Fleet Alerts
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real-time traffic intelligence that actually arrives in time to make a difference.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-5 border border-gray-200">
                  <CheckCircle className="w-5 h-5 text-[#C9A23A] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                <h3 className="text-xl font-bold text-red-800 mb-4">The Problem</h3>
                <ul className="space-y-3 text-red-700">
                  <li>Traditional traffic data arrives 5-15 minutes late</li>
                  <li>Drivers stuck in avoidable congestion daily</li>
                  <li>Fuel wasted, deliveries missed, customers frustrated</li>
                  <li>No warning before incidents cause delays</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
                <h3 className="text-xl font-bold text-green-800 mb-4">The Argus Solution</h3>
                <ul className="space-y-3 text-green-700">
                  <li>Computer vision detects incidents in under 10 seconds</li>
                  <li>Alerts reach drivers before traffic builds</li>
                  <li>Reroute around problems, not through them</li>
                  <li>5-15% more deliveries per hour in congested areas</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-16 bg-[#0F172A] text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Works with your existing telematics</h2>
            <p className="text-gray-400 mb-8">
              No complex integration required. Available on marketplace apps.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <span className="text-lg">Platform Science</span>
              <span className="text-lg">Geotab</span>
              <span className="text-lg">Samsara</span>
              <span className="text-lg">Motive</span>
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

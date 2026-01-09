import Header from '../../components/header';
import Footer from '../../components/footer';
import Link from 'next/link';
import { Check, TrendingUp, Clock, Shield, DollarSign, Code, Smartphone, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Argus AI for Fleet Managers | Real-Time Traffic Intelligence | Argus AI',
  description: 'Give your fleet real-time crash alerts and traffic intelligence. Reduce delays, save fuel, and improve on-time delivery with Argus AI.',
  keywords: 'fleet traffic alerts, fleet management traffic, commercial fleet navigation, fleet route optimization, fleet telematics traffic',
  openGraph: {
    title: 'Argus AI for Fleet Managers | Real-Time Traffic Intelligence',
    description: 'Give your fleet real-time crash alerts. Reduce delays, save fuel, improve on-time delivery.',
    type: 'website',
  },
};

export default function FleetManagersUseCasePage() {
  const benefits = [
    {
      metric: "10+ min",
      label: "Faster incident alerts",
      description: "Know about crashes before they back up for miles",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      metric: "15-20%",
      label: "Reduction in delays",
      description: "Proactive rerouting keeps trucks moving",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      metric: "$50K+",
      label: "Saved per low bridge avoided",
      description: "Clearance warnings protect your assets",
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      metric: "24/7",
      label: "AI monitoring",
      description: "40,000+ cameras watched in real-time",
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-[#0F172A] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block bg-[#C9A23A]/20 text-[#C9A23A] text-sm font-semibold px-4 py-2 rounded-full mb-6">
                For Fleet Managers
              </span>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Your Drivers Shouldn&apos;t Be{' '}
                <span className="text-[#C9A23A]">The Last to Know</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                When there&apos;s a crash on your route, Waze and Google take 10-15 minutes
                to alert drivers. By then, they&apos;re stuck. Argus AI detects incidents in
                under 10 seconds—giving your fleet time to reroute.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/developer/api"
                  className="inline-flex items-center px-8 py-4 bg-[#C9A23A] text-[#0F172A] rounded-lg font-bold hover:bg-[#E7C873] transition-colors"
                >
                  <Code className="w-5 h-5 mr-2" />
                  Integrate the API
                </Link>
                <Link
                  href="/solutions/app"
                  className="inline-flex items-center px-8 py-4 bg-[#7FB7FF] text-[#0F172A] rounded-lg font-bold hover:bg-[#A5CEFF] transition-colors"
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  Get the Driver App
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-[#F2F5F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] text-center mb-12">
              Impact on Your Fleet Operations
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <div className="w-12 h-12 bg-[#C9A23A]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#C9A23A]">
                    {benefit.icon}
                  </div>
                  <div className="text-3xl font-bold text-[#0F172A] mb-1">{benefit.metric}</div>
                  <div className="font-semibold text-gray-700 mb-2">{benefit.label}</div>
                  <p className="text-gray-500 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Two Solutions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] text-center mb-4">
              Two Ways to Get Started
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Deploy the driver app for immediate value, or integrate our API into your existing systems.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* App Solution */}
              <div className="bg-[#7FB7FF]/10 rounded-2xl p-8 border-2 border-[#7FB7FF]">
                <div className="flex items-center gap-3 mb-4">
                  <Smartphone className="w-8 h-8 text-[#7FB7FF]" />
                  <h3 className="text-2xl font-bold text-[#0F172A]">Argus Nav App</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Give every driver in your fleet real-time crash alerts and truck-safe routing.
                  No integration required—just download and drive.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-[#7FB7FF]" />
                    Crash alerts in under 10 seconds
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-[#7FB7FF]" />
                    Low bridge & clearance warnings
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-[#7FB7FF]" />
                    Truck-specific routing
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-[#7FB7FF]" />
                    $7/driver/month
                  </li>
                </ul>
                <Link
                  href="/solutions/app"
                  className="inline-flex items-center px-6 py-3 bg-[#7FB7FF] text-[#0F172A] rounded-lg font-bold hover:bg-[#A5CEFF] transition-colors"
                >
                  Join App Waiting List
                </Link>
              </div>

              {/* API Solution */}
              <div className="bg-[#C9A23A]/10 rounded-2xl p-8 border-2 border-[#C9A23A]">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-8 h-8 text-[#C9A23A]" />
                  <h3 className="text-2xl font-bold text-[#0F172A]">Argus API</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Integrate real-time incident data directly into your TMS, routing engine,
                  or fleet management platform.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-[#C9A23A]" />
                    REST API with webhooks
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-[#C9A23A]" />
                    Sub-10-second incident detection
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-[#C9A23A]" />
                    50+ US metro coverage
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-[#C9A23A]" />
                    Usage-based pricing
                  </li>
                </ul>
                <Link
                  href="/developer/api"
                  className="inline-flex items-center px-6 py-3 bg-[#C9A23A] text-[#0F172A] rounded-lg font-bold hover:bg-[#E7C873] transition-colors"
                >
                  View API Documentation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator Concept */}
        <section className="py-20 bg-[#0F172A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              The Cost of Slow Alerts
            </h2>

            <div className="bg-white/10 rounded-xl p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-red-400 mb-2">$75-150</div>
                  <p className="text-gray-300">Cost per hour of driver delay</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-400 mb-2">2+ hours</div>
                  <p className="text-gray-300">Average delay from major incidents</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#C9A23A] mb-2">$150-300</div>
                  <p className="text-gray-300">Saved per avoided incident</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20 text-center">
                <p className="text-gray-300 mb-4">
                  For a 100-truck fleet, avoiding just <strong className="text-white">2 incidents per month</strong> saves
                  <strong className="text-[#C9A23A]"> $3,600-7,200/year</strong>—not including fuel savings from
                  reduced idling and better routing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
              Ready to Give Your Fleet an Edge?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Talk to us about deploying Argus for your fleet.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center px-8 py-4 bg-[#0F172A] text-white rounded-lg font-bold hover:bg-[#1e293b] transition-colors"
              >
                <Users className="w-5 h-5 mr-2" />
                Contact Sales
              </Link>
              <Link
                href="/developer/api"
                className="inline-flex items-center px-8 py-4 border-2 border-[#0F172A] text-[#0F172A] rounded-lg font-bold hover:bg-[#0F172A] hover:text-white transition-colors"
              >
                View API Docs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

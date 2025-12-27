import { Metadata } from 'next';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import CallToAction from '@/app/components/calltoaction';
import { Car, CheckCircle, Clock, DollarSign, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Traffic Alerts for Rideshare & Delivery Drivers | Uber, Lyft, DoorDash | Argus AI',
  description: 'Get crash and slowdown alerts 5-15 minutes faster than Waze or Google Maps. Boost earnings 27% by avoiding traffic delays. Built for Uber, Lyft, DoorDash drivers.',
  keywords: 'rideshare traffic alerts, Uber driver app, Lyft driver traffic, DoorDash navigation, gig driver tools, traffic avoidance, faster than Waze',
  openGraph: {
    title: 'Traffic Alerts for Rideshare Drivers | Argus AI',
    description: 'Know about crashes 5-15 minutes before Waze. Boost earnings by avoiding delays.',
  },
};

export default function RideshareDriversPage() {
  const stats = [
    { stat: '27%', label: 'Driver earnings boost', icon: DollarSign },
    { stat: '40%', label: 'Wait time reduction', icon: Clock },
    { stat: '38%', label: 'Less idle time', icon: Car },
  ];

  const features = [
    'Know about crashes 5-15 minutes before Waze or Google Maps',
    'Real-time alerts on your phone while you drive',
    'Avoid surge pricing traps caused by hidden incidents',
    'Find faster routes to pickup locations',
    'Works alongside your existing navigation app',
    'Coverage in LA, SF, NYC, Chicago, and more metros',
  ];

  const earnings = [
    { city: 'Los Angeles', annual: '$2,400', description: 'Average annual savings from avoided delays' },
    { city: 'San Francisco', annual: '$2,100', description: 'Per driver productivity gains' },
    { city: 'New York', annual: '$2,800', description: 'Estimated from reduced idle time' },
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
                  For Rideshare & Delivery Drivers
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Know about crashes before Waze does
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Every minute stuck in traffic is money lost. Our computer vision spots incidents
                  5-15 minutes faster than crowd-sourced apps. More rides. More deliveries. More earnings.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/#get-started"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#C9A23A] hover:bg-[#E7C873] text-[#0F172A] rounded-lg font-semibold transition-colors"
                  >
                    Get Early Access
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    href="/industries#rideshare"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-colors border border-white/20"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-gradient-to-br from-[#1e293b] to-[#0F172A] rounded-2xl p-8 border border-white/10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-red-400">
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                      <span>Crash detected on I-405 NB</span>
                    </div>
                    <div className="text-sm text-gray-500">Just now - Argus AI</div>
                    <div className="border-t border-white/10 pt-4 mt-4">
                      <div className="flex items-center gap-3 text-gray-400">
                        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                        <span>Same incident reported</span>
                      </div>
                      <div className="text-sm text-gray-500">12 minutes later - Waze</div>
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

        {/* Earnings Impact Section */}
        <section className="py-16 bg-[#F2F5F9]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                The real cost of traffic delays
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Rideshare and delivery drivers lose thousands annually to avoidable traffic delays.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {earnings.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-[#C9A23A]" />
                    <span className="font-semibold text-[#0F172A]">{item.city}</span>
                  </div>
                  <div className="text-3xl font-bold text-[#C9A23A] mb-2">{item.annual}</div>
                  <div className="text-sm text-gray-600">{item.description}</div>
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
                Why drivers choose Argus
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

        {/* How It Works Section */}
        <section className="py-16 bg-[#0F172A] text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How we beat Waze by 15 minutes</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                While crowd-sourced apps wait for user reports, our AI watches traffic cameras directly.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#C9A23A] rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-[#0F172A]">1</div>
                <h3 className="font-semibold mb-2">AI Watches Cameras</h3>
                <p className="text-gray-400 text-sm">Computer vision monitors thousands of traffic cameras 24/7</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#C9A23A] rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-[#0F172A]">2</div>
                <h3 className="font-semibold mb-2">Instant Detection</h3>
                <p className="text-gray-400 text-sm">Crashes and slowdowns detected in under 10 seconds</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#C9A23A] rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-[#0F172A]">3</div>
                <h3 className="font-semibold mb-2">You Get Alerted First</h3>
                <p className="text-gray-400 text-sm">Alerts reach you before congestion forms</p>
              </div>
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

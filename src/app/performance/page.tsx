import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';
import { Activity, Bell, MapPin, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Performance Dashboard | Coming Soon | Argus AI',
  description: 'Live traffic alerts and performance metrics dashboard. See real-time incident detection and route optimization in action. Coming soon from Argus AI.',
  keywords: 'live traffic dashboard, real-time traffic alerts, traffic performance metrics, incident detection dashboard',
};

export default function PerformancePage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-[70vh]">
        {/* Hero Section */}
        <section className="bg-[#0F172A] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-[#C9A23A]/20 text-[#C9A23A] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                Coming Soon
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Live Performance Dashboard
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Watch real-time traffic alerts populate as they happen. See the power of
                sub-10-second incident detection and multi-source aggregation in action.
              </p>
            </div>
          </div>
        </section>

        {/* Preview Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-12 text-center">
              What&apos;s Coming
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-[#F2F5F9] rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-[#0F172A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-6 h-6 text-[#C9A23A]" />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2">Live Alert Feed</h3>
                <p className="text-gray-600 text-sm">
                  Real-time stream of traffic incidents as they&apos;re detected
                </p>
              </div>

              <div className="bg-[#F2F5F9] rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-[#0F172A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-[#C9A23A]" />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2">Interactive Map</h3>
                <p className="text-gray-600 text-sm">
                  Visual representation of incidents across covered regions
                </p>
              </div>

              <div className="bg-[#F2F5F9] rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-[#0F172A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-[#C9A23A]" />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2">Latency Metrics</h3>
                <p className="text-gray-600 text-sm">
                  See detection times proving sub-10-second performance
                </p>
              </div>

              <div className="bg-[#F2F5F9] rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-[#0F172A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell className="w-6 h-6 text-[#C9A23A]" />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2">Source Attribution</h3>
                <p className="text-gray-600 text-sm">
                  See which data source detected each incident first
                </p>
              </div>
            </div>

            {/* Placeholder Dashboard Preview */}
            <div className="bg-[#0F172A] rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold">Live Feed</span>
                </div>
                <span className="text-gray-500 text-sm">Dashboard Preview</span>
              </div>

              <div className="space-y-4">
                {/* Placeholder alert items */}
                <div className="bg-white/5 rounded-lg p-4 flex items-center gap-4">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-white/10 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-white/5 rounded w-1/2"></div>
                  </div>
                  <div className="text-gray-500 text-xs">--:--</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 flex items-center gap-4">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-white/10 rounded w-2/3 mb-2"></div>
                    <div className="h-3 bg-white/5 rounded w-1/3"></div>
                  </div>
                  <div className="text-gray-500 text-xs">--:--</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 flex items-center gap-4">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-white/10 rounded w-1/2 mb-2"></div>
                    <div className="h-3 bg-white/5 rounded w-2/5"></div>
                  </div>
                  <div className="text-gray-500 text-xs">--:--</div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm">
                  Real data coming soon. Want early access?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#F2F5F9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">
              Get Notified When We Launch
            </h2>
            <p className="text-gray-600 mb-8">
              Be the first to see the live performance dashboard in action.
              Contact us to get early access.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/company/contact"
                className="px-8 py-3 bg-[#C9A23A] text-white font-semibold rounded-lg hover:bg-[#E7C873] transition-colors"
              >
                Request Early Access
              </Link>
              <Link
                href="/developer"
                className="px-8 py-3 bg-[#0F172A] text-white font-semibold rounded-lg hover:bg-[#1e293b] transition-colors"
              >
                Explore the API
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

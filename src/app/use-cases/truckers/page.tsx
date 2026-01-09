import Header from '../../components/header';
import Footer from '../../components/footer';
import Link from 'next/link';
import { Check, AlertTriangle, Clock, Shield, Navigation, Smartphone, DollarSign } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Argus Nav for Truckers | Crash Alerts 10 Min Before Waze | Argus AI',
  description: 'Stop sitting in traffic you could have avoided. Argus Nav alerts truckers to crashes and slowdowns 10+ minutes before Waze or Google Maps.',
  keywords: 'trucker navigation app, truck GPS, commercial truck navigation, trucker traffic alerts, low bridge warning, truck route planner',
  openGraph: {
    title: 'Argus Nav for Truckers | Crash Alerts 10 Min Before Waze',
    description: 'Stop sitting in traffic you could have avoided. AI-powered crash alerts for truckers.',
    type: 'website',
  },
};

export default function TruckersUseCasePage() {
  const painPoints = [
    {
      problem: "Sat in traffic for 2 hours because Waze didn't warn you",
      solution: "Get crash alerts in under 10 seconds, not 10 minutes",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      problem: "Hit a low bridge, $50K+ in damages",
      solution: "Automatic clearance warnings for your rig's height",
      icon: <AlertTriangle className="w-6 h-6" />,
    },
    {
      problem: "GPS routed you down a road trucks can't use",
      solution: "Routes built for commercial trucks, not cars",
      icon: <Navigation className="w-6 h-6" />,
    },
    {
      problem: "Missed a delivery window because of unexpected delay",
      solution: "Know about slowdowns before they back up for miles",
      icon: <DollarSign className="w-6 h-6" />,
    },
  ];

  const features = [
    "AI-powered crash detection from 40,000+ traffic cameras",
    "Low bridge and clearance warnings",
    "Truck-specific routing (height, weight, HazMat)",
    "Weigh station status alerts",
    "Real-time congestion avoidance",
    "Works standalone—no ELD integration required",
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
                For Truckers
              </span>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Know About That Crash{' '}
                <span className="text-[#C9A23A]">Before Anyone Else</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Argus Nav uses AI to detect crashes from traffic cameras in under 10 seconds.
                That&apos;s 10+ minutes before Waze, Google Maps, or any other app.
                Stop sitting in traffic you could have avoided.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/solutions/app"
                  className="inline-flex items-center px-8 py-4 bg-[#7FB7FF] text-[#0F172A] rounded-lg font-bold hover:bg-[#A5CEFF] transition-colors"
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  Join the Waiting List
                </Link>
                <Link
                  href="/company/blog/best-truck-navigation-apps-2025"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Compare Truck GPS Apps
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-20 bg-[#F2F5F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] text-center mb-12">
              Sound Familiar?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {painPoints.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-[#0F172A] mb-2">
                        &quot;{item.problem}&quot;
                      </p>
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <p className="text-gray-600">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] text-center mb-12">
              How We Beat Other Apps by 10+ Minutes
            </h2>

            <div className="bg-[#0F172A] rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-red-400 mb-4">Other Apps (Waze, Google)</h3>
                  <ol className="space-y-3 text-gray-400">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">1.</span>
                      Driver sees crash
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">2.</span>
                      Driver opens app, taps &quot;report&quot;
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">3.</span>
                      Other drivers confirm (takes time)
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">4.</span>
                      Alert finally reaches you
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 font-bold">→</span>
                      <span className="text-red-400 font-bold">10-15 minutes later</span>
                    </li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#C9A23A] mb-4">Argus Nav</h3>
                  <ol className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-[#C9A23A]">1.</span>
                      AI watches 40,000+ traffic cameras
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#C9A23A]">2.</span>
                      Computer vision detects crash instantly
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#C9A23A]">3.</span>
                      Alert pushed to your phone
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#C9A23A] font-bold">→</span>
                      <span className="text-[#C9A23A] font-bold">Under 10 seconds</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-[#F2F5F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] text-center mb-12">
              Built for Commercial Trucks
            </h2>

            <div className="max-w-2xl mx-auto">
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm">
                    <Check className="w-6 h-6 text-[#C9A23A] flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl border-2 border-[#7FB7FF] overflow-hidden">
              <div className="bg-[#7FB7FF] py-3 text-center">
                <span className="text-[#0F172A] font-semibold">COMING SOON</span>
              </div>
              <div className="p-8 text-center">
                <div className="text-5xl font-bold text-[#0F172A] mb-2">
                  $7<span className="text-2xl font-normal text-gray-500">/month</span>
                </div>
                <p className="text-gray-600 mb-6">after 7-day free trial</p>
                <p className="text-gray-600 mb-8">
                  Most drivers save more than that in fuel and time on their first avoided traffic jam.
                </p>
                <Link
                  href="/solutions/app"
                  className="inline-flex items-center px-8 py-4 bg-[#0F172A] text-white rounded-lg font-bold hover:bg-[#1e293b] transition-colors"
                >
                  Join Waiting List for Free Trial
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-[#0F172A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stop Sitting in Traffic You Could Have Avoided
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of truckers waiting for the app that actually warns you in time.
            </p>
            <Link
              href="/solutions/app"
              className="inline-flex items-center px-8 py-4 bg-[#C9A23A] text-[#0F172A] rounded-lg font-bold hover:bg-[#E7C873] transition-colors"
            >
              <Smartphone className="w-5 h-5 mr-2" />
              Join the Waiting List
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

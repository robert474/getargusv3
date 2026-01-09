import Header from '../../components/header';
import Footer from '../../components/footer';
import Link from 'next/link';
import { Check, Zap, Clock, Code, Globe, Shield } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traffic API for Navigation Apps | Sub-10-Second Incident Detection | Argus AI',
  description: 'Add real-time traffic incident detection to your navigation app. Argus AI API detects crashes in under 10 seconds—10x faster than Google Maps.',
  keywords: 'navigation app API, traffic API, incident detection API, real-time traffic data, navigation SDK, routing API',
  openGraph: {
    title: 'Traffic API for Navigation Apps | Sub-10-Second Detection',
    description: 'Add real-time traffic incident detection to your app. 10x faster than Google Maps.',
    type: 'website',
  },
};

export default function NavigationAppsUseCasePage() {
  const comparisons = [
    { provider: 'Argus AI', latency: '<10 sec', icon: '🏆' },
    { provider: 'INRIX', latency: '~6 min', icon: '' },
    { provider: 'HERE', latency: '~8 min', icon: '' },
    { provider: 'Google Maps', latency: '~12 min', icon: '' },
    { provider: 'TomTom', latency: '~16 min', icon: '' },
  ];

  const features = [
    {
      title: "Sub-10-Second Detection",
      description: "AI watches 40,000+ traffic cameras, detecting incidents the moment they happen.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Simple REST API",
      description: "JSON responses, webhook support, comprehensive documentation. Integrate in hours.",
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "50+ US Metros",
      description: "Coverage across major highways and metro areas. Expanding continuously.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "High Reliability",
      description: "99.9% uptime SLA. Built for production navigation applications.",
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
                For Navigation App Developers
              </span>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Your Users Deserve{' '}
                <span className="text-[#C9A23A]">Faster Traffic Alerts</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Google Maps and Waze take 10-15 minutes to show incidents. By then, your users
                are already stuck in traffic. Argus AI detects crashes in under 10 seconds—giving
                your app a real competitive advantage.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/developer/api"
                  className="inline-flex items-center px-8 py-4 bg-[#C9A23A] text-[#0F172A] rounded-lg font-bold hover:bg-[#E7C873] transition-colors"
                >
                  <Code className="w-5 h-5 mr-2" />
                  View API Documentation
                </Link>
                <Link
                  href="/company/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latency Comparison */}
        <section className="py-20 bg-[#F2F5F9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] text-center mb-4">
              Incident Detection Speed Comparison
            </h2>
            <p className="text-gray-600 text-center mb-12">
              How long after a crash occurs until it appears in the API?
            </p>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 ${
                    index === 0 ? 'bg-[#C9A23A]/10 border-l-4 border-[#C9A23A]' : 'border-b border-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon && <span className="text-xl">{item.icon}</span>}
                    <span className={`font-semibold ${index === 0 ? 'text-[#0F172A]' : 'text-gray-600'}`}>
                      {item.provider}
                    </span>
                  </div>
                  <span className={`font-mono ${index === 0 ? 'text-[#C9A23A] font-bold' : 'text-gray-500'}`}>
                    {item.latency}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-500 text-sm mt-4">
              Based on internal testing and published research. Results may vary.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] text-center mb-12">
              Why Navigation Apps Choose Argus AI
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-[#C9A23A]/20 rounded-xl flex items-center justify-center text-[#C9A23A] flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="py-20 bg-[#0F172A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Simple Integration
            </h2>
            <p className="text-gray-300 text-center mb-12">
              Get real-time incidents with a single API call
            </p>

            <div className="bg-[#1e293b] rounded-xl p-6 overflow-x-auto">
              <pre className="text-sm text-gray-300">
{`// Get incidents near a location
const response = await fetch(
  'https://api.getargus.ai/v1/incidents?' +
  'lat=40.7128&lng=-74.0060&radius=25',
  {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  }
);

const data = await response.json();

// Response
{
  "incidents": [
    {
      "id": "inc_abc123",
      "type": "crash",
      "severity": "major",
      "location": {
        "lat": 40.7589,
        "lng": -73.9851,
        "road": "I-495 W",
        "description": "Between Exit 17 and Exit 16"
      },
      "detected_at": "2025-01-09T14:32:08Z",
      "lanes_blocked": 2,
      "estimated_delay_minutes": 25
    }
  ],
  "meta": {
    "detection_latency_ms": 8420
  }
}`}
              </pre>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/developer/api"
                className="inline-flex items-center px-6 py-3 bg-[#C9A23A] text-[#0F172A] rounded-lg font-bold hover:bg-[#E7C873] transition-colors"
              >
                Full API Documentation →
              </Link>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] text-center mb-12">
              Perfect For
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#F2F5F9] rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Navigation Apps</h3>
                <p className="text-gray-600 mb-4">
                  Give your users faster rerouting around incidents. Stand out from competitors
                  using slow crowdsourced data.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    Real-time incident feed
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    Estimated delay times
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    Incident cleared notifications
                  </li>
                </ul>
              </div>

              <div className="bg-[#F2F5F9] rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Logistics Platforms</h3>
                <p className="text-gray-600 mb-4">
                  Improve ETA accuracy and reduce delays. Alert dispatchers and drivers
                  to incidents affecting their routes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    Webhook alerts
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    Geofence monitoring
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    Historical data access
                  </li>
                </ul>
              </div>

              <div className="bg-[#F2F5F9] rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Mobility Platforms</h3>
                <p className="text-gray-600 mb-4">
                  Rideshare, delivery, and mobility apps can provide better ETAs and
                  smarter routing with real-time incident data.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    High-volume pricing
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    Low-latency endpoints
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    99.9% uptime SLA
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-[#F2F5F9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
              Ready to Add Real-Time Traffic Intelligence?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get started with our API. Free tier available for development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/developer/api"
                className="inline-flex items-center px-8 py-4 bg-[#0F172A] text-white rounded-lg font-bold hover:bg-[#1e293b] transition-colors"
              >
                <Code className="w-5 h-5 mr-2" />
                Get API Access
              </Link>
              <Link
                href="/company/blog/best-traffic-api-for-developers-2025"
                className="inline-flex items-center px-8 py-4 border-2 border-[#0F172A] text-[#0F172A] rounded-lg font-bold hover:bg-[#0F172A] hover:text-white transition-colors"
              >
                Compare Traffic APIs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

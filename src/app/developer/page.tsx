import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';
import { Code, Database, Zap, Shield, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Developer Hub | Argus AI Traffic Intelligence API',
  description: 'Access real-time traffic data through the Argus AI API. Aggregate 911 alerts, telematics, roadway sensors, and AI video inference into your applications with sub-10-second latency.',
  keywords: 'traffic API, real-time traffic data, 911 alerts API, telematics API, incident detection API, route optimization API',
  openGraph: {
    title: 'Argus AI Developer Hub | Real-Time Traffic Intelligence API',
    description: 'Build with aggregated traffic data from 911, telematics, sensors, and AI video inference. Sub-10-second incident detection.',
    type: 'website',
  },
};

export default function DeveloperPage() {
  const features = [
    {
      icon: Zap,
      title: 'Sub-10-Second Latency',
      description: 'Detect incidents before congestion forms. Our low-latency pipeline delivers alerts faster than traditional sources.',
    },
    {
      icon: Database,
      title: 'Multi-Source Aggregation',
      description: 'One API, multiple data sources: 911/PSAP alerts, telematics, public sensors, traffic camera AI, and dashcam inference.',
    },
    {
      icon: Code,
      title: 'RESTful API',
      description: 'Clean, documented endpoints with JSON responses. Integrate traffic intelligence into any application in minutes.',
    },
    {
      icon: Shield,
      title: 'Enterprise Ready',
      description: 'Built for scale with high availability, rate limiting, and enterprise SLAs for mission-critical applications.',
    },
  ];

  const useCases = [
    { industry: 'Fleet & Logistics', description: 'Dynamic route optimization with real-time incident avoidance' },
    { industry: 'Ride-Share Platforms', description: 'Accurate ETAs and proactive driver routing' },
    { industry: 'Insurance & Forensics', description: 'Historical incident data and crash analytics' },
    { industry: 'Government & DOTs', description: 'Traffic management center integration' },
  ];

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-[#0F172A] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-4">
                Developer Hub
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Build with Real-Time Traffic Intelligence
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Access aggregated traffic data from 911 dispatch, telematics providers, roadway sensors,
                and AI-powered video inference through a single, unified API.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://argusapi.ai/documentation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#C9A23A] text-white font-semibold rounded-lg hover:bg-[#E7C873] transition-colors"
                >
                  View API Docs
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
                <Link
                  href="/developer/data-sources"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0F172A] transition-colors"
                >
                  Explore Data Sources
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
                Why Developers Choose Argus AI
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Stop juggling multiple data providers. Get unified, normalized traffic intelligence in one integration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="bg-[#F2F5F9] rounded-xl p-6">
                    <div className="w-12 h-12 bg-[#0F172A] rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#C9A23A]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-[#F2F5F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/developer/api" className="group">
                <div className="bg-white rounded-xl p-8 border-2 border-transparent hover:border-[#C9A23A] transition-all h-full">
                  <Code className="w-10 h-10 text-[#C9A23A] mb-4" />
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#C9A23A] transition-colors">
                    API Documentation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Endpoints, authentication, request/response formats, and code examples to get started quickly.
                  </p>
                  <span className="text-[#C9A23A] font-semibold inline-flex items-center">
                    Read the docs
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>

              <Link href="/developer/data-sources" className="group">
                <div className="bg-white rounded-xl p-8 border-2 border-transparent hover:border-[#C9A23A] transition-all h-full">
                  <Database className="w-10 h-10 text-[#C9A23A] mb-4" />
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#C9A23A] transition-colors">
                    Aggregated Data Sources
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn about our data sources: 911 alerts, telematics, roadway sensors, and AI video inference.
                  </p>
                  <span className="text-[#C9A23A] font-semibold inline-flex items-center">
                    Explore sources
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8 text-center">
              Built for Every Use Case
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, idx) => (
                <div key={idx} className="border-l-4 border-[#C9A23A] pl-4">
                  <h3 className="font-bold text-[#0F172A] mb-2">{useCase.industry}</h3>
                  <p className="text-gray-600 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0F172A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Building?
            </h2>
            <p className="text-gray-300 mb-8">
              Get API access and integrate real-time traffic intelligence into your application today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://argusapi.ai/documentation"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#C9A23A] text-white font-semibold rounded-lg hover:bg-[#E7C873] transition-colors"
              >
                Get Started
              </a>
              <Link
                href="/company/contact"
                className="px-8 py-3 bg-[#7FB7FF] text-[#0F172A] font-semibold rounded-lg hover:bg-[#A5CEFF] transition-colors"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section for GEO */}
        <section className="py-20 bg-[#F2F5F9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-[#0F172A] mb-2">What data sources does the Argus AI API aggregate?</h3>
                <p className="text-gray-600">
                  The Argus AI API aggregates traffic data from multiple sources including 911/PSAP dispatch alerts,
                  telematics providers, public roadway sensors (radar, loop detectors), traffic camera video inference,
                  and dashcam AI analysis. This multi-source approach provides more comprehensive coverage than any single data provider.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-[#0F172A] mb-2">How fast is the incident detection?</h3>
                <p className="text-gray-600">
                  Argus AI delivers incident alerts in under 10 seconds from detection. Traditional traffic data
                  sources often have 30-60 second delays or more. Our low-latency pipeline enables proactive
                  routing decisions before congestion forms.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-[#0F172A] mb-2">What makes Argus AI different from connected vehicle data?</h3>
                <p className="text-gray-600">
                  Connected vehicles only represent 3-5% of vehicles on the road today, and they only provide
                  telematics data (speed, location). Argus AI adds video context through AI inference,
                  integrates 911 dispatch data, and aggregates public sensor feeds for comprehensive coverage
                  that connected vehicles alone cannot provide.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

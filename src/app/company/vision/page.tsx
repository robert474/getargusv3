import Header from '../../components/header';
import Footer from '../../components/footer';
import Link from 'next/link';
import { AlertTriangle, Layers, Zap, Eye, CheckCircle, XCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Vision | Solving Fragmented Roadway Data | Argus AI',
  description: 'Roadway data is fragmented across DOTs, telematics silos, and limited connected vehicles. Argus AI unifies traffic intelligence from 911, sensors, and AI video inference into one platform.',
  keywords: 'fragmented roadway data, connected vehicle limitations, traffic data silos, unified traffic intelligence, real-time traffic platform, telematics limitations, DOT data fragmentation',
  openGraph: {
    title: 'The Vision Behind Argus AI | Solving Fragmented Traffic Data',
    description: 'Why roadway data is broken and how Argus AI is building the unified traffic intelligence layer the industry needs.',
    type: 'article',
  },
};

export default function VisionPage() {
  const fragmentationProblems = [
    {
      title: 'DOTs Operate in Silos',
      description: 'Each state DOT maintains separate systems. Data sharing between states is minimal, creating gaps at borders and along major corridors.',
    },
    {
      title: 'Telematics Providers Don\'t Share',
      description: 'Fleet telematics companies treat data as competitive advantage. Even combined, they cover only a fraction of total traffic.',
    },
    {
      title: 'Connected Vehicles Are Overhyped',
      description: 'Despite industry promises, only 3-5% of vehicles on the road have connected telematics. The 95%+ majority remain invisible.',
    },
    {
      title: '30-60 Second Delays',
      description: 'Traditional traffic data sources have latency measured in minutes, not seconds. By the time you know about an incident, congestion has already formed.',
    },
  ];

  const connectedVehicleLimitations = [
    {
      limitation: 'Low Market Penetration',
      reality: 'Only 3-5% of vehicles have connected telematics today. Full penetration is decades away.',
      icon: XCircle,
    },
    {
      limitation: 'Telematics Only',
      reality: 'Connected vehicles report speed and location. They can\'t identify debris, pedestrians, or incident severity.',
      icon: XCircle,
    },
    {
      limitation: 'Data Silos',
      reality: 'OEMs and telematics providers don\'t share data. GM data doesn\'t talk to Ford data doesn\'t talk to fleet data.',
      icon: XCircle,
    },
    {
      limitation: 'Privacy Restrictions',
      reality: 'Consumer privacy concerns limit what data can be collected and shared, reducing utility.',
      icon: XCircle,
    },
    {
      limitation: 'No Visual Context',
      reality: 'A hard brake event looks the same whether caused by traffic, an accident, or a pedestrian. Context is missing.',
      icon: XCircle,
    },
  ];

  const argusApproach = [
    {
      title: 'Aggregate Everything',
      description: 'We integrate 911 dispatch, telematics (all providers), roadway sensors, traffic cameras, and dashcam feeds into one unified pipeline.',
      icon: Layers,
    },
    {
      title: 'AI Video Inference',
      description: 'Computer vision on traffic cameras and dashcams provides visual context that telematics cannot: incident type, severity, lanes blocked, and more.',
      icon: Eye,
    },
    {
      title: 'Sub-10-Second Latency',
      description: 'Our low-latency data pipeline delivers alerts before congestion forms, enabling proactive routing instead of reactive.',
      icon: Zap,
    },
    {
      title: 'One Normalized API',
      description: 'Regardless of source, all data is normalized into a single schema. One integration, complete traffic intelligence.',
      icon: CheckCircle,
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
              <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-4">
                Our Vision
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Roadway Data is Broken. We&apos;re Fixing It.
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Traffic data is fragmented across dozens of siloed sources. DOTs don&apos;t share.
                Telematics providers compete instead of collaborate. Connected vehicles cover
                only a fraction of traffic. The result? Blind spots everywhere.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mt-4">
                Argus AI is building the unified traffic intelligence layer the industry needs.
              </p>
            </div>
          </div>
        </section>

        {/* The Problem: Fragmentation */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <AlertTriangle className="w-12 h-12 text-[#C9A23A] mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                The Problem: Fragmented Roadway Data
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every organization managing traffic&mdash;from DOTs to fleet operators to ride-share
                platforms&mdash;struggles with the same fundamental problem: incomplete, delayed,
                and siloed data.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {fragmentationProblems.map((problem, idx) => (
                <div key={idx} className="bg-[#F2F5F9] rounded-xl p-6 border-l-4 border-red-400">
                  <h3 className="font-bold text-[#0F172A] mb-2">{problem.title}</h3>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Connected Vehicle Reality Check */}
        <section className="py-20 bg-[#0F172A] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Connected Vehicles Won&apos;t Save Us
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The automotive industry has promised &quot;connected vehicle&quot; solutions for years.
                Here&apos;s why they fall short of solving the traffic intelligence problem.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {connectedVehicleLimitations.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white/10 rounded-xl p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Icon className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                      <h3 className="font-bold text-white">{item.limitation}</h3>
                    </div>
                    <p className="text-gray-300 text-sm">{item.reality}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 max-w-3xl mx-auto">
              <div className="bg-[#C9A23A]/20 border border-[#C9A23A] rounded-xl p-6">
                <h3 className="font-bold text-[#C9A23A] mb-3">The Math Doesn&apos;t Work</h3>
                <p className="text-gray-300">
                  Even at 5% connected vehicle penetration, you&apos;re blind to 95% of traffic.
                  A major accident could happen with no connected vehicles involved. A debris
                  incident won&apos;t trigger any telematics event. Waiting for full connected vehicle
                  penetration means waiting decades&mdash;and still missing the visual context
                  that only cameras can provide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Argus AI Approach */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                The Argus AI Approach
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Instead of waiting for the connected vehicle future, we&apos;re building comprehensive
                traffic intelligence today by aggregating every available data source.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {argusApproach.map((approach, idx) => {
                const Icon = approach.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#0F172A] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#C9A23A]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0F172A] mb-2">{approach.title}</h3>
                      <p className="text-gray-600">{approach.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* The Data Rails Vision */}
        <section className="py-20 bg-[#F2F5F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
                Building the Data Rails for Traffic Intelligence
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We envision a future where traffic data flows as seamlessly as financial transactions.
                Just as payment rails connect banks, merchants, and consumers, Argus AI is building
                the data rails that connect traffic data producers to the applications that need it.
              </p>

              <div className="bg-white rounded-xl p-8 text-left">
                <h3 className="font-bold text-[#0F172A] mb-4">The Low-Latency Pipeline</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C9A23A] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      <strong className="text-[#0F172A]">Real-time ingestion</strong> from 911 centers,
                      telematics APIs, sensor networks, and video feeds
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C9A23A] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      <strong className="text-[#0F172A]">AI-powered normalization</strong> that transforms
                      disparate formats into unified, actionable intelligence
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C9A23A] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      <strong className="text-[#0F172A]">Sub-10-second delivery</strong> to routing engines,
                      fleet management systems, and traffic management centers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C9A23A] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      <strong className="text-[#0F172A]">Video inference context</strong> that tells you
                      not just that something happened, but what happened and how severe it is
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8 text-center">
              Traditional vs. Argus AI Approach
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto">
                <thead>
                  <tr className="border-b-2 border-[#0F172A] bg-[#F2F5F9]">
                    <th className="text-left py-4 px-4 font-bold text-[#0F172A]">Capability</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-600">Traditional Sources</th>
                    <th className="text-center py-4 px-4 font-bold text-[#C9A23A]">Argus AI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="py-4 px-4 text-[#0F172A] font-medium">Detection Latency</td>
                    <td className="py-4 px-4 text-center text-gray-600">30-60+ seconds</td>
                    <td className="py-4 px-4 text-center text-[#0F172A] font-semibold">&lt;10 seconds</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-[#F2F5F9]/50">
                    <td className="py-4 px-4 text-[#0F172A] font-medium">Vehicle Coverage</td>
                    <td className="py-4 px-4 text-center text-gray-600">3-5% (connected only)</td>
                    <td className="py-4 px-4 text-center text-[#0F172A] font-semibold">All vehicles (via video)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="py-4 px-4 text-[#0F172A] font-medium">Visual Context</td>
                    <td className="py-4 px-4 text-center text-gray-600">None</td>
                    <td className="py-4 px-4 text-center text-[#0F172A] font-semibold">Full AI inference</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-[#F2F5F9]/50">
                    <td className="py-4 px-4 text-[#0F172A] font-medium">Data Sources</td>
                    <td className="py-4 px-4 text-center text-gray-600">Single provider silos</td>
                    <td className="py-4 px-4 text-center text-[#0F172A] font-semibold">6+ aggregated sources</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="py-4 px-4 text-[#0F172A] font-medium">911 Integration</td>
                    <td className="py-4 px-4 text-center text-gray-600">Rare</td>
                    <td className="py-4 px-4 text-center text-[#0F172A] font-semibold">Native</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-[#F2F5F9]/50">
                    <td className="py-4 px-4 text-[#0F172A] font-medium">Incident Severity</td>
                    <td className="py-4 px-4 text-center text-gray-600">Estimated from speed</td>
                    <td className="py-4 px-4 text-center text-[#0F172A] font-semibold">Visual confirmation</td>
                  </tr>
                </tbody>
              </table>
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
                <h3 className="font-bold text-[#0F172A] mb-2">Why is roadway data so fragmented?</h3>
                <p className="text-gray-600">
                  Roadway data fragmentation stems from how transportation infrastructure evolved. Each state DOT
                  built independent systems. Telematics providers emerged as competitors, not collaborators. The
                  automotive industry prioritized proprietary connected vehicle data. No organization had incentive
                  to create a unified layer&mdash;until now.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-[#0F172A] mb-2">What are the limitations of connected vehicle data?</h3>
                <p className="text-gray-600">
                  Connected vehicles face several fundamental limitations: only 3-5% market penetration today,
                  telematics-only data without visual context, siloed data between manufacturers and providers,
                  and privacy restrictions on data collection. These limitations mean connected vehicles alone
                  cannot provide comprehensive traffic intelligence.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-[#0F172A] mb-2">How does video inference improve traffic detection?</h3>
                <p className="text-gray-600">
                  Video inference from traffic cameras and dashcams provides visual context that telematics cannot.
                  AI can identify incident type (accident vs. debris vs. weather), estimate severity, count lanes
                  blocked, detect pedestrians or stopped vehicles, and confirm clearance. This context enables
                  more accurate routing and faster response.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-[#0F172A] mb-2">What makes Argus AI different from other traffic data providers?</h3>
                <p className="text-gray-600">
                  Argus AI is the only platform that aggregates ALL major traffic data source types: 911 dispatch,
                  multiple telematics providers, public sensors, traffic camera AI, and dashcam inference.
                  This multi-source approach combined with sub-10-second latency provides coverage and speed
                  that single-source providers cannot match.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0F172A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Us in Building Better Traffic Intelligence
            </h2>
            <p className="text-gray-300 mb-8">
              Whether you&apos;re a data provider, a platform builder, or an organization that needs
              better traffic data, we want to talk.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/developer"
                className="px-8 py-3 bg-[#C9A23A] text-white font-semibold rounded-lg hover:bg-[#E7C873] transition-colors"
              >
                Explore the API
              </Link>
              <Link
                href="/company/contact"
                className="px-8 py-3 bg-[#7FB7FF] text-[#0F172A] font-semibold rounded-lg hover:bg-[#A5CEFF] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

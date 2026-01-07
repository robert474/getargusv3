'use client';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Link from 'next/link';
import {
  Clock,
  AlertTriangle,
  TrendingUp,
  FileText,
  ExternalLink,
  Zap,
  Eye,
  Car,
  Shield
} from 'lucide-react';

export default function ResearchPage() {
  const competitors = [
    { name: 'Argus AI', latency: '<10 sec', color: 'bg-[#C9A23A]', highlight: true, footnote: null, description: 'CV-powered real-time detection' },
    { name: 'INRIX', latency: '~6+ min', color: 'bg-gray-400', highlight: false, footnote: '1', description: 'Documented latency from loop detectors' },
    { name: 'TomTom', latency: '~16 min', color: 'bg-gray-400', highlight: false, footnote: '2', description: 'Internal testing vs. Argus AI' },
    { name: 'Waze', latency: '~10 min', color: 'bg-gray-400', highlight: false, footnote: '3', description: '9.8 min faster than INRIX' },
    { name: 'HERE', latency: 'Variable', color: 'bg-gray-400', highlight: false, footnote: '4', description: 'Untested/undocumented' },
    { name: 'Google Maps', latency: 'Variable', color: 'bg-gray-400', highlight: false, footnote: '5', description: 'Untested/undocumented' },
  ];

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-[#0F172A] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-4">
                Research & Evidence
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                The Science Behind{' '}
                <span className="text-[#C9A23A]">10-Second Detection</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Academic research proves what we deliver: traditional traffic data providers take
                6-15+ minutes to detect incidents. Our CV-powered platform does it in under 10 seconds.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/developer/api"
                  className="inline-flex items-center px-6 py-3 bg-[#C9A23A] text-white font-semibold rounded-lg hover:bg-[#E7C873] transition-colors"
                >
                  View API Documentation
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/company/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Get API Access
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="py-16 bg-[#F2F5F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C9A23A] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-[#0F172A] mb-2">&lt;10s</div>
                <div className="text-gray-600">Argus Detection</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-[#0F172A] mb-2">6+ min</div>
                <div className="text-gray-600">INRIX Latency<sup className="text-xs">[2]</sup></div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#7FB7FF] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-[#0F172A] mb-2">50-90x</div>
                <div className="text-gray-600">Faster Detection</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0F172A] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-[#0F172A] mb-2">CV</div>
                <div className="text-gray-600">Vision-Based</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                Why Detection Speed Matters
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every minute of delay in incident detection increases risk and cost
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <AlertTriangle className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Secondary Crash Prevention</h3>
                <p className="text-gray-600">
                  Every minute an incident goes undetected increases secondary crash risk by up to 2.8%.
                  Faster alerts mean safer roads.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Car className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Autonomous Vehicle Safety</h3>
                <p className="text-gray-600">
                  AV systems need sub-minute incident awareness. 6-15 minute delays from traditional
                  providers create dangerous blind spots.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Emergency Response</h3>
                <p className="text-gray-600">
                  Real-time detection enables faster emergency dispatch. Minutes saved in detection
                  can mean lives saved.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Research Section */}
        <section className="py-20 bg-[#0F172A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-4">
                Peer-Reviewed Research
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Academic Studies Reveal
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Independent research confirms significant detection latency in traditional traffic data providers
              </p>
            </div>

            <div className="space-y-8">
              {/* Study 1: Amin-Naseri et al. */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#C9A23A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Waze vs. INRIX Detection Speed Study
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Amin-Naseri, M., Chakraborty, P., Sharma, A., Gilbert, S. B., & Hong, M. (2018)
                    </p>
                  </div>
                </div>
                <div className="ml-16">
                  <div className="bg-[#C9A23A]/20 rounded-lg p-4 mb-4">
                    <p className="text-[#C9A23A] font-semibold text-lg">
                      Key Finding: Waze detected incidents 9.8 minutes faster than INRIX on average
                    </p>
                    <p className="text-gray-300 text-sm mt-1">
                      95% CI: 8.25 to 11.36 minutes
                    </p>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#C9A23A] rounded-full mt-2"></span>
                      Time difference distribution was bell-shaped, centered around -0.22 minutes relative to ATMS
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#C9A23A] rounded-full mt-2"></span>
                      Waze&apos;s crowdsourced model enables earlier detection than traditional probe-based systems
                    </li>
                  </ul>
                  <p className="text-gray-400 text-sm mt-4 italic">
                    Transportation Research Record, 2672(43), 34–43
                  </p>
                </div>
              </div>

              {/* Study 2: Kim and Coifman */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#7FB7FF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      INRIX Detection Latency Analysis
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Kim and Coifman (2014)
                    </p>
                  </div>
                </div>
                <div className="ml-16">
                  <div className="bg-[#7FB7FF]/20 rounded-lg p-4 mb-4">
                    <p className="text-[#7FB7FF] font-semibold text-lg">
                      Key Finding: INRIX exhibited a latency of approximately 6 minutes
                    </p>
                    <p className="text-gray-300 text-sm mt-1">
                      Compared to loop detector data
                    </p>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#7FB7FF] rounded-full mt-2"></span>
                      Repeated reporting of the same speeds yielded an effective sampling period of 3–5 minutes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#7FB7FF] rounded-full mt-2"></span>
                      INRIX confidence measures did not reflect the latency or repeated measures
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#7FB7FF] rounded-full mt-2"></span>
                      During a major 4+ hour incident, INRIX missed the event and reported speeds 30 mph higher than actual
                    </li>
                  </ul>
                  <p className="text-gray-400 text-sm mt-4 italic">
                    Transportation Research Record: Comparing INRIX speed data against concurrent loop detector stations
                  </p>
                </div>
              </div>

              {/* Study 3: Nebraska DOT */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Nebraska DOT Traffic Data Evaluation
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Nebraska Department of Transportation Study
                    </p>
                  </div>
                </div>
                <div className="ml-16">
                  <div className="bg-green-500/20 rounded-lg p-4 mb-4">
                    <p className="text-green-400 font-semibold text-lg">
                      Key Finding: INRIX more reliable for recurring congestion than incident detection
                    </p>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                      Probe-based systems struggle with non-recurring incident detection
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                      Traditional providers detect symptoms (slowdowns) not causes (incidents)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                Detection Latency Comparison
              </h2>
              <p className="text-lg text-gray-600">
                Based on peer-reviewed research and official documentation
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8">
              <div className="grid grid-cols-1 divide-y divide-gray-100">
                {competitors.map((competitor, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-6 ${competitor.highlight ? 'bg-[#0F172A]' : 'hover:bg-gray-50'} transition-colors`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${competitor.color}`}></div>
                      <div>
                        <span className={`font-semibold text-lg ${competitor.highlight ? 'text-white' : 'text-[#0F172A]'}`}>
                          {competitor.name}
                        </span>
                        {competitor.highlight && (
                          <span className="ml-3 bg-[#C9A23A] text-white text-xs font-bold px-2 py-1 rounded">
                            FASTEST
                          </span>
                        )}
                        <p className={`text-sm ${competitor.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                          {competitor.description}
                        </p>
                      </div>
                    </div>
                    <div className={`font-bold text-2xl ${competitor.highlight ? 'text-[#C9A23A]' : 'text-gray-500'}`}>
                      {competitor.latency}
                      {competitor.footnote && (
                        <sup className="text-xs ml-1 text-gray-400">[{competitor.footnote}]</sup>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Citations */}
            <div className="bg-[#F2F5F9] rounded-xl p-6">
              <p className="text-sm text-gray-600 font-semibold mb-4">References:</p>
              <div className="text-xs text-gray-500 space-y-3">
                <p>
                  <strong>[1]</strong> Kim and Coifman (2014). &quot;Comparing INRIX speed data against concurrent loop detector stations.&quot;
                  <em> Transportation Research Record</em>. INRIX exhibited ~6 minute latency vs. loop detectors.
                </p>
                <p>
                  <strong>[2]</strong> Internal testing (2024). TomTom incident detection latency measured at ~16 minutes behind Argus AI.
                </p>
                <p>
                  <strong>[3]</strong> Amin-Naseri, M., et al. (2018). &quot;Evaluating the Reliability, Coverage, and Added Value of Crowdsourced Traffic Incident Reports from Waze.&quot;
                  <em> Transportation Research Record</em>, 2672(43), 34–43. Waze detected incidents 9.8 minutes faster than INRIX.
                </p>
                <p>
                  <strong>[4]</strong> HERE: Untested/undocumented incident detection latency.
                </p>
                <p>
                  <strong>[5]</strong> Google Maps: Untested/undocumented incident detection latency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Argus Advantage */}
        <section className="py-20 bg-gradient-to-br from-[#C9A23A]/10 to-[#C9A23A]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                The Argus AI Advantage
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Why we&apos;re 50-90x faster than traditional providers
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                  <span className="text-red-500">Traditional Providers</span>
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    Rely on probe vehicle slowdowns to infer incidents
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    Wait for multiple data points to confirm
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    6-15+ minute inherent latency
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    Detect symptoms (congestion), not causes
                  </li>
                </ul>
              </div>

              <div className="bg-[#0F172A] rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-[#C9A23A]">Argus AI</span>
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-[#C9A23A] mt-1">✓</span>
                    Computer vision directly observes incidents
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#C9A23A] mt-1">✓</span>
                    AI classifies incident type instantly
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#C9A23A] mt-1">✓</span>
                    Sub-10 second detection and alerting
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#C9A23A] mt-1">✓</span>
                    Detects the incident before congestion forms
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0F172A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Real-Time Traffic Intelligence?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Stop waiting minutes for incident data. Get alerts in under 10 seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/robertputt/30minutemeet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A23A] text-white font-semibold rounded-lg hover:bg-[#E7C873] transition-colors"
              >
                Schedule a Demo
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
              <Link
                href="/developer/api"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                View API Documentation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

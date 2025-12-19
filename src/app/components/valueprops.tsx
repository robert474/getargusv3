'use client';

import { Zap, Layers, Eye, Clock } from 'lucide-react';

export default function ValueProps() {
  const competitors = [
    { name: 'Argus AI', latency: '<10 sec', color: 'bg-[#C9A23A]', highlight: true, footnote: null },
    { name: 'INRIX', latency: '~6+ min', color: 'bg-gray-400', highlight: false, footnote: '1' },
    { name: 'TomTom', latency: '30s + delay', color: 'bg-gray-400', highlight: false, footnote: '2' },
    { name: 'HERE', latency: '1-2 min', color: 'bg-gray-400', highlight: false, footnote: '3' },
    { name: 'Waze', latency: '~10 min', color: 'bg-gray-400', highlight: false, footnote: '4' },
    { name: 'Google Maps', latency: 'Variable', color: 'bg-gray-400', highlight: false, footnote: '5' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#F2F5F9] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-4">
            Why Argus AI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            The Only Platform Combining CV + Aggregated Data
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We&apos;re the only traffic intelligence provider using computer vision on camera networks
            while aggregating DOT feeds, connected vehicles, and sensor data into a single API.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
          {/* Computer Vision */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-[#C9A23A] to-[#E7C873] rounded-xl flex items-center justify-center mb-5 shadow-md">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Computer Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              The only provider using CV on traffic cameras for instant incident detection
            </p>
          </div>

          {/* Aggregated Sources */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-[#7FB7FF] to-[#A5CEFF] rounded-xl flex items-center justify-center mb-5 shadow-md">
              <Layers className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Aggregated Data</h3>
            <p className="text-gray-600 leading-relaxed">
              DOT sensors, connected vehicles, probe data—all unified in one API
            </p>
          </div>

          {/* Sub-10 Second Latency */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-[#233247] to-[#0F172A] rounded-xl flex items-center justify-center mb-5 shadow-md">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Sub-10 Sec Latency</h3>
            <p className="text-gray-600 leading-relaxed">
              Fastest incident alerts in the industry—6x faster than competitors
            </p>
          </div>

          {/* One API */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-[#10B981] to-[#34D399] rounded-xl flex items-center justify-center mb-5 shadow-md">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Single API</h3>
            <p className="text-gray-600 leading-relaxed">
              No more juggling multiple data providers—one integration, all sources
            </p>
          </div>
        </div>

        {/* Competitor Comparison */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-3">
              Incident Detection Latency
            </h3>
            <p className="text-gray-600">
              Based on peer-reviewed research and official documentation. Faster detection = safer roads.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 divide-y divide-gray-100">
              {competitors.map((competitor, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-5 ${competitor.highlight ? 'bg-[#0F172A]' : 'hover:bg-gray-50'} transition-colors`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${competitor.color}`}></div>
                    <span className={`font-semibold text-lg ${competitor.highlight ? 'text-white' : 'text-[#0F172A]'}`}>
                      {competitor.name}
                    </span>
                    {competitor.highlight && (
                      <span className="bg-[#C9A23A] text-white text-xs font-bold px-2 py-1 rounded">
                        FASTEST
                      </span>
                    )}
                  </div>
                  <div className={`font-bold text-xl ${competitor.highlight ? 'text-[#C9A23A]' : 'text-gray-500'}`}>
                    {competitor.latency}
                    {competitor.footnote && (
                      <sup className="text-xs ml-1 text-gray-400">[{competitor.footnote}]</sup>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-3 font-semibold">Sources (Peer-Reviewed Research):</p>
            <div className="text-xs text-gray-400 space-y-2">
              <p>[1] Kim & Coifman (2014). &quot;Comparing INRIX speed data against concurrent loop detector stations.&quot; <em>Transportation Research Record</em>. INRIX exhibited ~6 minute latency vs. loop detectors.</p>
              <p>[2] TomTom Technical Documentation (2023-2025). 30-second processing cycle plus data collection delays.</p>
              <p>[3] HERE Traffic API Developer Guide. 1-2 minute refresh intervals per official documentation.</p>
              <p>[4] Amin-Naseri et al. (2018). &quot;Evaluating Crowdsourced Traffic Incident Reports from Waze.&quot; <em>Transportation Research Record</em>, 2672(43). Waze detected incidents 9.8 min faster than INRIX.</p>
              <p>[5] Historical research indicates Google Maps latency varies from minutes to 30+ minutes based on user density.</p>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              <a href="/company/research" className="underline hover:text-gray-600">View full research summary →</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

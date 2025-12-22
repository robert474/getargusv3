'use client';

export default function LatencyComparison() {
  const competitors = [
    { name: 'Argus AI', latency: '<10 sec', color: 'bg-[#C9A23A]', highlight: true, footnote: null },
    { name: 'INRIX', latency: '~6+ min', color: 'bg-gray-400', highlight: false, footnote: '1' },
    { name: 'TomTom', latency: '~16 min', color: 'bg-gray-400', highlight: false, footnote: '2' },
    { name: 'Waze', latency: '~10 min', color: 'bg-gray-400', highlight: false, footnote: '3' },
    { name: 'HERE', latency: 'Variable', color: 'bg-gray-400', highlight: false, footnote: '4' },
    { name: 'Google Maps', latency: 'Variable', color: 'bg-gray-400', highlight: false, footnote: '5' },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-4">
            The Numbers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">
            Incident Detection Latency
          </h2>
          <p className="text-lg text-gray-600">
            Based on peer-reviewed research. Faster detection = safer drivers, fewer delays.
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
          <p className="text-xs text-gray-500 mb-3 font-semibold">Sources:</p>
          <div className="text-xs text-gray-400 space-y-2">
            <p>[1] Kim & Coifman (2014). &quot;Comparing INRIX speed data against concurrent loop detector stations.&quot; <em>Transportation Research Record</em>.</p>
            <p>[2] Internal testing (2024). TomTom incident detection latency measured at ~16 minutes behind Argus AI.</p>
            <p>[3] Amin-Naseri et al. (2018). &quot;Evaluating Crowdsourced Traffic Incident Reports from Waze.&quot; <em>Transportation Research Record</em>.</p>
            <p>[4] HERE: Untested/undocumented incident detection latency.</p>
            <p>[5] Google Maps: Untested/undocumented incident detection latency.</p>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            <a href="/company/research" className="underline hover:text-gray-600">View full research summary →</a>
          </p>
        </div>
      </div>
    </section>
  );
}

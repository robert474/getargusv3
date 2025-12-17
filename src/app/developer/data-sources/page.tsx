import Header from '../../components/header';
import Footer from '../../components/footer';
import Link from 'next/link';
import Script from 'next/script';
import { Radio, Car, Video, AlertTriangle, Wifi, Eye } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aggregated Data Sources | Argus AI Traffic Intelligence',
  description: 'Argus AI aggregates traffic data from 911/PSAP dispatch, telematics providers, roadway sensors, traffic camera AI, and dashcam video inference into a unified API.',
  keywords: '911 traffic data, telematics aggregation, traffic camera AI, dashcam inference, roadway sensors, traffic data sources, unified traffic API',
  openGraph: {
    title: 'Argus AI Data Sources | Multi-Source Traffic Intelligence',
    description: 'One API aggregating 911 alerts, telematics, sensors, and AI video inference for comprehensive traffic intelligence.',
    type: 'website',
  },
};

export default function DataSourcesPage() {
  const dataSources = [
    {
      icon: AlertTriangle,
      name: '911/PSAP Dispatch',
      description: 'Direct integration with emergency dispatch centers for verified incident alerts.',
      coverage: 'High',
      latency: '< 30 seconds',
      dataTypes: ['Accidents', 'Road hazards', 'Weather events', 'Emergency closures'],
      uniqueValue: 'Authoritative, human-verified incidents with emergency response context.',
    },
    {
      icon: Car,
      name: 'Telematics Providers',
      description: 'Aggregated vehicle telemetry data from fleet and consumer devices.',
      coverage: 'Medium-High',
      latency: '< 15 seconds',
      dataTypes: ['Speed anomalies', 'Hard braking events', 'Traffic flow', 'Route patterns'],
      uniqueValue: 'Real-world vehicle behavior data across diverse road networks.',
    },
    {
      icon: Radio,
      name: 'Public Roadway Sensors',
      description: 'Loop detectors, radar sensors, and infrastructure monitoring systems.',
      coverage: 'Interstate/Major roads',
      latency: '< 60 seconds',
      dataTypes: ['Traffic volume', 'Speed measurements', 'Occupancy data', 'Queue detection'],
      uniqueValue: 'Fixed-location, continuous monitoring with high accuracy.',
    },
    {
      icon: Video,
      name: 'Traffic Camera AI Inference',
      description: 'Computer vision analysis of DOT traffic cameras and private feeds.',
      coverage: 'Expanding',
      latency: '< 10 seconds',
      dataTypes: ['Visual incident detection', 'Lane blockage', 'Vehicle classification', 'Congestion levels'],
      uniqueValue: 'Real-time visual context that telematics cannot provide.',
    },
    {
      icon: Eye,
      name: 'Dashcam Video Inference',
      description: 'AI-powered analysis of commercial fleet and consumer dashcam footage.',
      coverage: 'Growing',
      latency: '< 10 seconds',
      dataTypes: ['Road hazards', 'Near-miss events', 'Infrastructure damage', 'Weather conditions'],
      uniqueValue: 'Ground-level, driver-perspective intelligence at scale.',
    },
    {
      icon: Wifi,
      name: 'Public Data Feeds',
      description: 'DOT feeds, construction notices, event schedules, and weather services.',
      coverage: 'Comprehensive',
      latency: 'Variable',
      dataTypes: ['Planned closures', 'Construction zones', 'Special events', 'Weather alerts'],
      uniqueValue: 'Contextual data for predictive routing and planning.',
    },
  ];

  return (
    <>
      {/* DataCatalog Schema for GEO */}
      <Script
        id="schema-datacatalog"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DataCatalog",
            "name": "Argus AI Traffic Data Sources",
            "description": "Aggregated real-time traffic data from 911 dispatch, telematics, roadway sensors, traffic camera AI, and dashcam video inference.",
            "url": "https://www.getargus.ai/developer/data-sources",
            "provider": {
              "@type": "Organization",
              "name": "Traffic Data Group, Inc.",
              "alternateName": "Argus AI"
            },
            "dataset": [
              {
                "@type": "Dataset",
                "name": "911/PSAP Dispatch Data",
                "description": "Real-time emergency dispatch alerts for traffic incidents",
                "temporalCoverage": "Real-time"
              },
              {
                "@type": "Dataset",
                "name": "Telematics Data",
                "description": "Connected vehicle and fleet telematics for traffic flow and incidents",
                "temporalCoverage": "Real-time"
              },
              {
                "@type": "Dataset",
                "name": "Roadway Sensor Data",
                "description": "Loop detector and radar sensor measurements for traffic volume and speed",
                "temporalCoverage": "Real-time"
              },
              {
                "@type": "Dataset",
                "name": "Traffic Camera Video Inference",
                "description": "AI-powered incident detection from traffic camera feeds",
                "temporalCoverage": "Real-time"
              },
              {
                "@type": "Dataset",
                "name": "Dashcam Video Inference",
                "description": "AI-powered road condition and incident detection from dashcam footage",
                "temporalCoverage": "Real-time"
              }
            ]
          })
        }}
      />
      {/* BreadcrumbList Schema */}
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.getargus.ai"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Developer",
                "item": "https://www.getargus.ai/developer"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Data Sources",
                "item": "https://www.getargus.ai/developer/data-sources"
              }
            ]
          })
        }}
      />
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-[#0F172A] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Link href="/developer" className="hover:text-[#C9A23A]">Developer</Link>
              <span>/</span>
              <span className="text-white">Data Sources</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Aggregated Data Sources</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Argus AI unifies fragmented traffic data from multiple sources into a single,
              normalized API. No more managing separate integrations or reconciling conflicting data.
            </p>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-16 bg-[#F2F5F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-6">
                Why Multi-Source Aggregation Matters
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                No single traffic data source provides complete coverage. Each has blind spots,
                latency limitations, and coverage gaps. By aggregating multiple sources, Argus AI
                delivers more accurate, timely, and comprehensive traffic intelligence.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-white rounded-lg p-6">
                  <div className="text-3xl font-bold text-[#C9A23A] mb-2">3-5%</div>
                  <p className="text-gray-600 text-sm">
                    of vehicles are &quot;connected&quot; with telematics, leaving 95%+ of traffic invisible
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="text-3xl font-bold text-[#C9A23A] mb-2">30-60s</div>
                  <p className="text-gray-600 text-sm">
                    typical delay from traditional sources&mdash;too slow for real-time routing
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="text-3xl font-bold text-[#C9A23A] mb-2">&lt;10s</div>
                  <p className="text-gray-600 text-sm">
                    Argus AI detection latency through AI video inference and multi-source fusion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Sources Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4 text-center">
              Our Data Sources
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Each source contributes unique intelligence. Together, they create comprehensive
              traffic awareness that no single provider can match.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dataSources.map((source, idx) => {
                const Icon = source.icon;
                return (
                  <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="bg-[#0F172A] p-4">
                      <div className="flex items-center gap-3">
                        <Icon className="w-6 h-6 text-[#C9A23A]" />
                        <h3 className="text-lg font-bold text-white">{source.name}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{source.description}</p>

                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Coverage:</span>
                          <span className="font-medium text-[#0F172A]">{source.coverage}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Latency:</span>
                          <span className="font-medium text-[#C9A23A]">{source.latency}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Data Types:</span>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {source.dataTypes.map((type, i) => (
                            <span key={i} className="px-2 py-1 bg-[#F2F5F9] rounded text-xs text-gray-600">
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-gray-100 pt-4">
                        <span className="text-xs font-semibold text-[#C9A23A] uppercase tracking-wider">Unique Value:</span>
                        <p className="text-sm text-gray-600 mt-1">{source.uniqueValue}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-[#F2F5F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-12 text-center">
              How We Aggregate
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#C9A23A] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                <h3 className="font-bold text-[#0F172A] mb-2">Ingest</h3>
                <p className="text-gray-600 text-sm">
                  Real-time streams from all data sources flow into our processing pipeline
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#C9A23A] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                <h3 className="font-bold text-[#0F172A] mb-2">Normalize</h3>
                <p className="text-gray-600 text-sm">
                  Data is standardized into a unified schema regardless of source format
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#C9A23A] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                <h3 className="font-bold text-[#0F172A] mb-2">Deduplicate</h3>
                <p className="text-gray-600 text-sm">
                  Multi-source events are correlated and merged to prevent duplicates
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#C9A23A] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
                <h3 className="font-bold text-[#0F172A] mb-2">Deliver</h3>
                <p className="text-gray-600 text-sm">
                  Clean, enriched data available via REST API or real-time WebSocket
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Connected Vehicles Limitation */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0F172A] rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Why Connected Vehicles Alone Aren&apos;t Enough
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="text-[#C9A23A] font-semibold">Limited market penetration:</span> Only 3-5% of
                  vehicles on the road today have connected telematics, leaving massive blind spots in coverage.
                </p>
                <p>
                  <span className="text-[#C9A23A] font-semibold">No visual context:</span> Telematics only provides
                  speed and location. It can&apos;t distinguish between a traffic jam and a major accident, or identify
                  debris in the road.
                </p>
                <p>
                  <span className="text-[#C9A23A] font-semibold">Siloed data:</span> Major telematics providers
                  don&apos;t share data with each other, fragmenting the already limited connected vehicle intelligence.
                </p>
                <p>
                  <span className="text-[#C9A23A] font-semibold">Argus AI solution:</span> We combine telematics
                  with 911 dispatch, video inference, and sensor data to fill the gaps that connected vehicles
                  leave behind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section for GEO */}
        <section className="py-20 bg-[#F2F5F9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8 text-center">
              Data Source FAQ
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-[#0F172A] mb-2">Where does Argus AI get its traffic data?</h3>
                <p className="text-gray-600">
                  Argus AI aggregates traffic data from six primary sources: 911/PSAP emergency dispatch,
                  telematics providers (fleet and consumer), public roadway sensors (loops, radar), traffic camera
                  video inference, dashcam AI analysis, and public data feeds (DOT, weather, events). This multi-source
                  approach provides more comprehensive coverage than any single data provider.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-[#0F172A] mb-2">How does video inference improve traffic data?</h3>
                <p className="text-gray-600">
                  Video inference adds visual context that telematics cannot provide. Our AI can identify the
                  type of incident (accident, debris, weather), estimate severity, count lanes blocked, and
                  detect situations like stopped vehicles or pedestrians. This context enables more accurate
                  routing decisions and ETA predictions.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-[#0F172A] mb-2">What is the latency for each data source?</h3>
                <p className="text-gray-600">
                  Video inference (traffic cameras, dashcams): under 10 seconds. Telematics: under 15 seconds.
                  911/PSAP dispatch: under 30 seconds. Roadway sensors: under 60 seconds. Our fusion pipeline
                  delivers the fastest available detection regardless of source, typically achieving sub-10-second
                  alerts for critical incidents.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-[#0F172A] mb-2">How do you handle conflicting data from multiple sources?</h3>
                <p className="text-gray-600">
                  Our pipeline includes intelligent deduplication and correlation algorithms. When multiple sources
                  report the same incident, we merge the data, taking the earliest detection time and richest
                  metadata. Each incident includes source attribution so you can see which sources confirmed it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0F172A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Access Unified Traffic Intelligence
            </h2>
            <p className="text-gray-300 mb-8">
              Stop managing multiple integrations. Get all traffic data through a single API.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/developer/api"
                className="px-8 py-3 bg-[#C9A23A] text-white font-semibold rounded-lg hover:bg-[#E7C873] transition-colors"
              >
                View API Docs
              </Link>
              <Link
                href="/company/contact"
                className="px-8 py-3 bg-[#7FB7FF] text-[#0F172A] font-semibold rounded-lg hover:bg-[#A5CEFF] transition-colors"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

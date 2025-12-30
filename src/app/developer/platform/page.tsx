import Header from '../../components/header';
import Footer from '../../components/footer';
import Link from 'next/link';
import {
  ArrowRight,
  Zap,
  Lock,
  TrendingUp,
  Layers,
  Code,
  Shield,
  Clock,
  Database,
  GitBranch,
  CheckCircle2,
  XCircle,
  AlertTriangle
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traffic Data Ontology & Platform | Universal Traffic Intelligence API | Argus AI',
  description: 'One API for all traffic data sources. The Argus ontology translates TomTom, HERE, Waze, 511 feeds, and computer vision into a unified, routing-ready format. Stop building custom parsers.',
  keywords: 'traffic data ontology, traffic API, TomTom alternative, HERE alternative, traffic data integration, fleet routing API, universal traffic format, traffic incident API, real-time traffic data',
  openGraph: {
    title: 'Argus Platform | Universal Traffic Data Ontology',
    description: 'One API, any traffic data source. Stop building custom parsers for every provider.',
    type: 'website',
  },
};

export default function PlatformPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-[#0F172A] text-white py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-4">
              The Argus Platform
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Universal Traffic Intelligence<br />
              <span className="text-[#C9A23A]">Infrastructure</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8">
              Every traffic data source speaks a different language. We translate chaos into clarity with a universal ontology that works with any routing engine.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center px-6 py-3 bg-[#C9A23A] hover:bg-[#E7C873] text-[#0F172A] rounded-lg font-semibold transition-colors"
              >
                Get API Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/developer/api"
                className="inline-flex items-center px-6 py-3 border border-white/30 hover:border-white text-white rounded-lg font-semibold transition-colors"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-4">
                The Problem
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
                Traffic Data is a Fragmented Mess
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your engineering team spends months building custom parsers that break when APIs change. Here&apos;s what you&apos;re dealing with:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Problem 1: Proprietary Formats */}
              <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <XCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                  Proprietary Formats
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  TomTom uses numeric severity codes. HERE wraps everything in XML chaos. Waze reports &quot;moderate traffic&quot; (meaningless). 511 feeds vary by state.
                </p>
                <p className="text-red-600 text-sm font-semibold">
                  Result: Custom parsers for every source
                </p>
              </div>

              {/* Problem 2: Crowdsource Lag */}
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                  Crowdsource Lag
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Waze and Google Maps rely on user reports. By the time enough drivers report an incident, 10-15 minutes have passed and thousands are stuck.
                </p>
                <p className="text-orange-600 text-sm font-semibold">
                  Result: Alerts arrive after the traffic jam
                </p>
              </div>

              {/* Problem 3: Vendor Lock-In */}
              <div className="bg-purple-50 border border-purple-100 rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                  Vendor Lock-In
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  You&apos;re trapped in pricing and contracts. Your engineering and solutions become rigid. When they raise prices, you pay or rebuild everything.
                </p>
                <p className="text-purple-600 text-sm font-semibold">
                  Result: No flexibility, no negotiating power
                </p>
              </div>

              {/* Problem 4: Innovation Dead End */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                  Innovation Dead End
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  New data sources emerge&mdash;dashcams, computer vision, connected vehicles. Your architecture is too brittle to plug them in without rewriting your stack.
                </p>
                <p className="text-blue-600 text-sm font-semibold">
                  Result: Stuck with yesterday&apos;s technology
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution Section */}
        <section className="py-20 bg-[#F2F5F9]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-4">
                The Solution
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
                The Argus Traffic Data Ontology
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                One universal format. Any data source. Plug-and-play with any routing engine.
              </p>
            </div>

            {/* Visual Diagram */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Input Sources */}
                <div className="space-y-3">
                  <h3 className="font-bold text-[#0F172A] mb-4 text-center">Any Input</h3>
                  <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-600 text-center">TomTom API</div>
                  <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-600 text-center">HERE Traffic</div>
                  <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-600 text-center">Waze Feed</div>
                  <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-600 text-center">511 / DOT Data</div>
                  <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-600 text-center">INRIX</div>
                  <div className="bg-[#C9A23A]/20 rounded-lg p-3 text-sm text-[#0F172A] font-semibold text-center">Argus CV Detection</div>
                </div>

                {/* Arrow + Ontology Engine */}
                <div className="flex flex-col items-center justify-center">
                  <div className="hidden md:block text-4xl text-gray-300 mb-4">&#8594;</div>
                  <div className="bg-[#0F172A] text-white rounded-xl p-6 text-center w-full">
                    <Layers className="w-10 h-10 mx-auto mb-3 text-[#C9A23A]" />
                    <p className="font-bold text-lg">Argus Ontology Engine</p>
                    <p className="text-gray-400 text-sm mt-2">Semantic translation + fusion</p>
                  </div>
                  <div className="hidden md:block text-4xl text-gray-300 mt-4">&#8594;</div>
                </div>

                {/* Output */}
                <div className="space-y-3">
                  <h3 className="font-bold text-[#0F172A] mb-4 text-center">One Output</h3>
                  <div className="bg-[#C9A23A]/20 rounded-lg p-3 text-sm text-[#0F172A] font-semibold text-center">Standardized Schema</div>
                  <div className="bg-[#C9A23A]/20 rounded-lg p-3 text-sm text-[#0F172A] font-semibold text-center">Semantic Enrichment</div>
                  <div className="bg-[#C9A23A]/20 rounded-lg p-3 text-sm text-[#0F172A] font-semibold text-center">Conflict Resolution</div>
                  <div className="bg-[#C9A23A]/20 rounded-lg p-3 text-sm text-[#0F172A] font-semibold text-center">Routing-Ready Format</div>
                  <p className="text-center text-gray-500 text-sm pt-2">Works with Valhalla, OSRM, GraphHopper, or custom engines</p>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#0F172A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#C9A23A] font-bold">1</span>
                </div>
                <h4 className="font-bold text-[#0F172A] mb-2">Universal Ingestion</h4>
                <p className="text-gray-600 text-sm">We consume any traffic format&mdash;REST APIs, XML feeds, webhooks, streaming data.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#0F172A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#C9A23A] font-bold">2</span>
                </div>
                <h4 className="font-bold text-[#0F172A] mb-2">Semantic Translation</h4>
                <p className="text-gray-600 text-sm">AI-powered schema mapping converts any format to Argus ontology without custom code.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#0F172A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#C9A23A] font-bold">3</span>
                </div>
                <h4 className="font-bold text-[#0F172A] mb-2">Intelligent Fusion</h4>
                <p className="text-gray-600 text-sm">Deduplicate incidents across sources. Merge complementary data. Resolve conflicts with confidence scoring.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#0F172A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#C9A23A] font-bold">4</span>
                </div>
                <h4 className="font-bold text-[#0F172A] mb-2">Routing Optimization</h4>
                <p className="text-gray-600 text-sm">Output adapters for Valhalla, OSRM, GraphHopper, or your custom routing engine.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Ontology Matters */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-4">
                  Why It Matters
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
                  Speed Isn&apos;t Enough. You Need Context.
                </h2>
                <p className="text-gray-600 mb-6">
                  Traditional traffic APIs tell you &quot;incident detected.&quot; That&apos;s useless. Is it a fender bender or a multi-car pileup? One lane or all lanes? 10 minutes to clear or 2 hours?
                </p>
                <p className="text-gray-600 mb-8">
                  The Argus ontology gives you actionable intelligence:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-[#0F172A]">Actionable</span>
                      <span className="text-gray-600"> &mdash; Severity, duration estimate, lane impact</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-[#0F172A]">Contextual</span>
                      <span className="text-gray-600"> &mdash; Weather, road type, vehicle restrictions</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-[#0F172A]">Temporal</span>
                      <span className="text-gray-600"> &mdash; Detected &#8594; Active &#8594; Clearing &#8594; Resolved</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-[#0F172A]">Semantic</span>
                      <span className="text-gray-600"> &mdash; &quot;Multi-car pileup&quot; = different routing decision than &quot;debris&quot;</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0F172A] rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-5 h-5 text-[#C9A23A]" />
                  <span className="text-gray-400 text-sm">Argus Ontology Schema</span>
                </div>
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code>{`{
  "incident_id": "ARG_LA_405N_001",
  "detected_at": "2025-01-15T14:47:00Z",
  "classification": {
    "type": "collision",
    "subtype": "multi_vehicle",
    "severity": "major",
    "confidence": 0.94
  },
  "impact": {
    "lanes_affected": 3,
    "lane_total": 4,
    "emergency_response": true,
    "clearance_estimate_min": 60
  },
  "location": {
    "lat": 34.0522,
    "lon": -118.2437,
    "road": "I-405N",
    "direction": "northbound"
  },
  "routing_recommendation": {
    "action": "hard_avoid",
    "radius_miles": 5.0,
    "vehicle_restrictions": ["truck"],
    "expires_at": "2025-01-15T15:47:00Z"
  },
  "sources": [
    {"provider": "argus_cv", "confidence": 0.94},
    {"provider": "tomtom", "confidence": 0.78}
  ]
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-[#0F172A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-4">
                The Difference
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Traditional APIs vs. Argus Ontology
              </h2>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-100 p-4 font-semibold text-[#0F172A] text-sm">
                <div></div>
                <div className="text-center">Traditional APIs</div>
                <div className="text-center text-[#C9A23A]">Argus</div>
              </div>

              <div className="divide-y divide-gray-100">
                <div className="grid grid-cols-3 p-4 items-center">
                  <div className="font-medium text-[#0F172A]">Output Format</div>
                  <div className="text-center text-gray-500 text-sm">&quot;Incident detected&quot;</div>
                  <div className="text-center text-[#0F172A] text-sm font-semibold">&quot;MAJOR collision, 3 lanes blocked, 60min estimate, hard avoid for trucks&quot;</div>
                </div>
                <div className="grid grid-cols-3 p-4 items-center bg-gray-50">
                  <div className="font-medium text-[#0F172A]">Detection Speed</div>
                  <div className="text-center text-gray-500 text-sm">5-15 minutes</div>
                  <div className="text-center text-[#C9A23A] text-sm font-bold">&lt;10 seconds</div>
                </div>
                <div className="grid grid-cols-3 p-4 items-center">
                  <div className="font-medium text-[#0F172A]">Data Sources</div>
                  <div className="text-center text-gray-500 text-sm">Single provider</div>
                  <div className="text-center text-[#0F172A] text-sm font-semibold">Multi-source fusion</div>
                </div>
                <div className="grid grid-cols-3 p-4 items-center bg-gray-50">
                  <div className="font-medium text-[#0F172A]">Vendor Lock-In</div>
                  <div className="text-center text-gray-500 text-sm">Proprietary format</div>
                  <div className="text-center text-[#0F172A] text-sm font-semibold">Swap sources anytime</div>
                </div>
                <div className="grid grid-cols-3 p-4 items-center">
                  <div className="font-medium text-[#0F172A]">Routing Ready</div>
                  <div className="text-center text-gray-500 text-sm">Custom parsing required</div>
                  <div className="text-center text-[#0F172A] text-sm font-semibold">Plug-and-play adapters</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-4">
                Use Cases
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
                Built for Developers, Fleets, and Platforms
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border border-gray-200 rounded-xl p-6 hover:border-[#C9A23A] transition-colors">
                <Database className="w-10 h-10 text-[#C9A23A] mb-4" />
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Routing Engines</h3>
                <p className="text-gray-600">Stop writing custom parsers for every traffic API. One integration, any data source. Works with Valhalla, OSRM, and GraphHopper.</p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 hover:border-[#C9A23A] transition-colors">
                <TrendingUp className="w-10 h-10 text-[#C9A23A] mb-4" />
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Fleet Management</h3>
                <p className="text-gray-600">Give drivers incident context: &quot;Major accident ahead, 45min delay, rerouting.&quot; Reduce idle time and fuel costs.</p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 hover:border-[#C9A23A] transition-colors">
                <Shield className="w-10 h-10 text-[#C9A23A] mb-4" />
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Autonomous Vehicles</h3>
                <p className="text-gray-600">Machine-readable incident classification for decision-making systems. Semantic data your AV stack can understand.</p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 hover:border-[#C9A23A] transition-colors">
                <GitBranch className="w-10 h-10 text-[#C9A23A] mb-4" />
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Smart Cities</h3>
                <p className="text-gray-600">Publish incidents in a standard format that any navigation app can consume. Enable interoperability across platforms.</p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 hover:border-[#C9A23A] transition-colors">
                <Zap className="w-10 h-10 text-[#C9A23A] mb-4" />
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Mobility Platforms</h3>
                <p className="text-gray-600">Merge traffic data from multiple providers without vendor lock-in. Future-proof your architecture.</p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 hover:border-[#C9A23A] transition-colors">
                <Code className="w-10 h-10 text-[#C9A23A] mb-4" />
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Navigation Apps</h3>
                <p className="text-gray-600">Fastest incident data available. The app that reroutes users first wins their trust.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Options */}
        <section className="py-20 bg-[#F2F5F9]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-4">
                Integration
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
                Three Ways to Integrate
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="text-sm text-[#C9A23A] font-semibold mb-2">Option 1</div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Ontology API</h3>
                <p className="text-gray-500 text-sm mb-4">Easiest</p>
                <p className="text-gray-600 mb-6">Send us your traffic data, we return Argus ontology format. Perfect for quick integrations.</p>
                <div className="bg-[#0F172A] rounded-lg p-4 overflow-x-auto">
                  <code className="text-xs text-gray-300">
                    {`curl -X POST https://api.getargus.ai/v1/translate \\
  -H "Authorization: Bearer YOUR_KEY" \\
  -d '{"source": "tomtom", "data": {...}}'`}
                  </code>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-[#C9A23A]">
                <div className="text-sm text-[#C9A23A] font-semibold mb-2">Option 2</div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Data Pipeline</h3>
                <p className="text-[#C9A23A] text-sm mb-4 font-semibold">Most Popular</p>
                <p className="text-gray-600 mb-6">We ingest your sources (TomTom, HERE, 511), merge with Argus CV detection, return unified feed.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Bring your own API keys
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Multi-source fusion
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Real-time streaming
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="text-sm text-[#C9A23A] font-semibold mb-2">Option 3</div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Self-Hosted</h3>
                <p className="text-gray-500 text-sm mb-4">Enterprise</p>
                <p className="text-gray-600 mb-6">Deploy Argus ontology engine in your infrastructure. Full control, your data never leaves.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    On-premise deployment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Custom ontology extensions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Dedicated support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0F172A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Simplify Your Traffic Integration?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Stop building custom parsers. Start shipping features.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center px-8 py-4 bg-[#C9A23A] hover:bg-[#E7C873] text-[#0F172A] rounded-lg font-semibold transition-colors text-lg"
              >
                Get API Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/developer/api"
                className="inline-flex items-center px-8 py-4 border border-white/30 hover:border-white text-white rounded-lg font-semibold transition-colors text-lg"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </section>

        {/* Related Blog Posts */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-8">Learn More</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/company/blog/why-tomtom-here-apis-slow-development" className="group">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-[#C9A23A] transition-colors">
                  <p className="text-sm text-[#C9A23A] mb-2">Development</p>
                  <p className="font-semibold text-[#0F172A] group-hover:text-[#C9A23A] transition-colors">Why TomTom and HERE APIs Slow Down Development</p>
                </div>
              </Link>
              <Link href="/company/blog/crowdsourced-traffic-data-15-minutes-late" className="group">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-[#C9A23A] transition-colors">
                  <p className="text-sm text-[#C9A23A] mb-2">Analysis</p>
                  <p className="font-semibold text-[#0F172A] group-hover:text-[#C9A23A] transition-colors">Why Crowdsourced Traffic Data Is Always 15 Minutes Late</p>
                </div>
              </Link>
              <Link href="/company/blog/hidden-cost-traffic-api-vendor-lock-in" className="group">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-[#C9A23A] transition-colors">
                  <p className="text-sm text-[#C9A23A] mb-2">Strategy</p>
                  <p className="font-semibold text-[#0F172A] group-hover:text-[#C9A23A] transition-colors">The Hidden Cost of Traffic API Vendor Lock-In</p>
                </div>
              </Link>
              <Link href="/company/blog/traffic-integration-cant-keep-up-innovation" className="group">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-[#C9A23A] transition-colors">
                  <p className="text-sm text-[#C9A23A] mb-2">Architecture</p>
                  <p className="font-semibold text-[#0F172A] group-hover:text-[#C9A23A] transition-colors">Why Your Traffic Integration Can&apos;t Keep Up With Innovation</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

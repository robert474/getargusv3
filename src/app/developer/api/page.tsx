import Header from '../../components/header';
import Footer from '../../components/footer';
import Link from 'next/link';
import { ExternalLink, Copy, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'API Documentation | Argus AI Traffic Intelligence',
  description: 'Complete API documentation for Argus AI real-time traffic intelligence. RESTful endpoints for incident alerts, traffic data, route optimization, and historical analytics.',
  keywords: 'traffic API documentation, incident detection API, real-time traffic API, route optimization API, traffic data endpoints',
  openGraph: {
    title: 'Argus AI API Documentation | Traffic Intelligence Endpoints',
    description: 'RESTful API for real-time traffic intelligence. Integrate incident alerts, traffic data, and route optimization.',
    type: 'website',
  },
};

export default function APIDocsPage() {
  const endpoints = [
    {
      method: 'GET',
      path: '/v1/incidents',
      description: 'Retrieve real-time traffic incidents within a geographic area',
      params: ['lat', 'lng', 'radius', 'types'],
    },
    {
      method: 'GET',
      path: '/v1/incidents/{id}',
      description: 'Get detailed information about a specific incident',
      params: ['id'],
    },
    {
      method: 'GET',
      path: '/v1/traffic/flow',
      description: 'Get current traffic flow data for road segments',
      params: ['bbox', 'road_class'],
    },
    {
      method: 'POST',
      path: '/v1/routes/optimize',
      description: 'Calculate optimized route avoiding current incidents',
      params: ['origin', 'destination', 'waypoints'],
    },
    {
      method: 'GET',
      path: '/v1/alerts/subscribe',
      description: 'WebSocket endpoint for real-time incident alerts',
      params: ['area', 'types'],
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-[#0F172A] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Link href="/developer" className="hover:text-[#C9A23A]">Developer</Link>
              <span>/</span>
              <span className="text-white">API Documentation</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">API Documentation</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Integrate real-time traffic intelligence into your applications with our RESTful API.
              JSON responses, comprehensive documentation, and code examples included.
            </p>
            <div className="mt-6">
              <a
                href="https://argusapi.ai/documentation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#C9A23A] text-white font-semibold rounded-lg hover:bg-[#E7C873] transition-colors"
              >
                Full API Reference
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Quick Start</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">1. Get Your API Key</h3>
                <p className="text-gray-600 mb-4">
                  Contact our team to receive your API credentials. Enterprise plans include
                  dedicated support and custom rate limits.
                </p>
                <Link
                  href="/company/contact"
                  className="text-[#C9A23A] font-semibold hover:underline"
                >
                  Request API Access
                </Link>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">2. Make Your First Request</h3>
                <div className="bg-[#0F172A] rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300">
                    <code>{`curl -X GET "https://api.argusapi.ai/v1/incidents" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"lat": 40.7128, "lng": -74.0060, "radius": 10}'`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Authentication */}
        <section className="py-16 bg-[#F2F5F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Authentication</h2>
            <div className="bg-white rounded-xl p-6 max-w-3xl">
              <p className="text-gray-600 mb-4">
                All API requests require authentication via Bearer token in the Authorization header:
              </p>
              <div className="bg-[#0F172A] rounded-lg p-4 mb-4">
                <code className="text-[#C9A23A]">Authorization: Bearer YOUR_API_KEY</code>
              </div>
              <p className="text-gray-600">
                API keys are issued per organization. Contact us for enterprise key management
                with multiple keys, usage tracking, and team access controls.
              </p>
            </div>
          </div>
        </section>

        {/* Endpoints */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Core Endpoints</h2>

            <div className="space-y-4">
              {endpoints.map((endpoint, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-[#F2F5F9] px-4 py-3 flex items-center gap-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      endpoint.method === 'GET' ? 'bg-green-100 text-green-700' :
                      endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-[#0F172A] font-mono">{endpoint.path}</code>
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-gray-600 mb-2">{endpoint.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {endpoint.params.map((param, i) => (
                        <span key={i} className="px-2 py-1 bg-[#F2F5F9] rounded text-xs text-gray-600 font-mono">
                          {param}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://argusapi.ai/documentation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#C9A23A] font-semibold hover:underline"
              >
                View complete endpoint documentation
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Response Format */}
        <section className="py-16 bg-[#F2F5F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Response Format</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">Incident Response Example</h3>
                <div className="bg-[#0F172A] rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300">
                    <code>{`{
  "incidents": [
    {
      "id": "inc_abc123",
      "type": "accident",
      "severity": "major",
      "location": {
        "lat": 40.7128,
        "lng": -74.0060,
        "road": "I-95 N",
        "mile_marker": 45.2
      },
      "detected_at": "2024-01-15T14:32:00Z",
      "source": "video_inference",
      "confidence": 0.94,
      "lanes_affected": 2,
      "estimated_clearance": "2024-01-15T15:30:00Z"
    }
  ],
  "meta": {
    "total": 1,
    "radius_km": 10,
    "query_time_ms": 45
  }
}`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">Data Fields</h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <code className="text-[#C9A23A] font-mono text-sm">source</code>
                    <p className="text-gray-600 text-sm mt-1">
                      Origin of the incident data: <code>911_dispatch</code>, <code>telematics</code>,
                      <code>video_inference</code>, <code>sensor</code>, or <code>dashcam</code>
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <code className="text-[#C9A23A] font-mono text-sm">confidence</code>
                    <p className="text-gray-600 text-sm mt-1">
                      AI confidence score (0.0-1.0) for video/dashcam inference detections
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <code className="text-[#C9A23A] font-mono text-sm">detected_at</code>
                    <p className="text-gray-600 text-sm mt-1">
                      ISO 8601 timestamp of when the incident was first detected. Sub-10-second latency from detection to API availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rate Limits */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Rate Limits</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#0F172A]">
                    <th className="text-left py-3 px-4 font-bold text-[#0F172A]">Plan</th>
                    <th className="text-left py-3 px-4 font-bold text-[#0F172A]">Requests/Minute</th>
                    <th className="text-left py-3 px-4 font-bold text-[#0F172A]">Requests/Day</th>
                    <th className="text-left py-3 px-4 font-bold text-[#0F172A]">WebSocket Connections</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">Starter</td>
                    <td className="py-3 px-4">60</td>
                    <td className="py-3 px-4">10,000</td>
                    <td className="py-3 px-4">1</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">Growth</td>
                    <td className="py-3 px-4">300</td>
                    <td className="py-3 px-4">100,000</td>
                    <td className="py-3 px-4">5</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">Enterprise</td>
                    <td className="py-3 px-4">Custom</td>
                    <td className="py-3 px-4">Unlimited</td>
                    <td className="py-3 px-4">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ for GEO */}
        <section className="py-16 bg-[#F2F5F9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8 text-center">
              API FAQ
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-[#0F172A] mb-2">What response time can I expect from the API?</h3>
                <p className="text-gray-600">
                  The Argus AI API typically responds in under 100ms for most queries. Incident data is
                  available within 10 seconds of detection, making it one of the fastest traffic intelligence
                  APIs available.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-[#0F172A] mb-2">What geographic coverage does the API provide?</h3>
                <p className="text-gray-600">
                  Argus AI currently covers major metropolitan areas and interstate highways across the
                  United States. Coverage is expanding continuously. Contact us for specific regional availability.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-[#0F172A] mb-2">Can I get historical incident data?</h3>
                <p className="text-gray-600">
                  Yes. The API provides access to historical incident data for analytics, forensics, and
                  insurance use cases. Historical data includes all incident metadata, timestamps, and
                  source attribution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0F172A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Integrate?
            </h2>
            <p className="text-gray-300 mb-8">
              Get API access and start building with real-time traffic intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://argusapi.ai/documentation"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#C9A23A] text-white font-semibold rounded-lg hover:bg-[#E7C873] transition-colors"
              >
                Full Documentation
              </a>
              <Link
                href="/company/contact"
                className="px-8 py-3 bg-[#7FB7FF] text-[#0F172A] font-semibold rounded-lg hover:bg-[#A5CEFF] transition-colors"
              >
                Request Access
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

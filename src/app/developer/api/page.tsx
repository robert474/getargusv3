import Header from '../../components/header';
import Footer from '../../components/footer';
import Link from 'next/link';
import Script from 'next/script';
import { Code, Shield, Zap, Clock, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'API Documentation | Argus AI Traffic Intelligence',
  description: 'Complete reference for the Argus Subscription API. Webhook-based real-time traffic incident alerts with sub-10-second detection for crashes, construction, disabled vehicles, and first responders.',
  keywords: 'traffic API documentation, webhook API, incident detection API, real-time traffic API, traffic intelligence API, navigation data API',
  openGraph: {
    title: 'Argus AI API Documentation | Traffic Intelligence Webhooks',
    description: 'Webhook-based API for real-time traffic incident alerts. Subscribe to crashes, construction, disabled vehicles, and first responder events with sub-10-second latency.',
    type: 'website',
  },
};

export default function APIDocsPage() {
  return (
    <>
      <Header />
      <Script
        id="schema-api-docs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Argus AI Traffic Intelligence API Documentation",
            "description": "Complete API reference for the Argus Subscription API. Webhook-based real-time traffic incident alerts.",
            "author": {
              "@type": "Organization",
              "name": "Traffic Data Group, Inc."
            },
            "publisher": {
              "@type": "Organization",
              "name": "Argus AI"
            },
            "dateModified": new Date().toISOString(),
            "mainEntity": {
              "@type": "WebAPI",
              "name": "Argus Subscription API",
              "description": "Webhook-based real-time traffic incident detection API",
              "documentation": "https://www.getargus.ai/developer/api"
            }
          })
        }}
      />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-[#0F172A] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Link href="/developer" className="hover:text-[#C9A23A]">Developer</Link>
              <span>/</span>
              <span className="text-white">API Documentation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">API Documentation</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Complete reference for the Argus Subscription API
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#endpoints" className="px-6 py-3 bg-[#C9A23A] text-white font-semibold rounded-lg hover:bg-[#E7C873] transition-colors">
                View Endpoints
              </a>
              <a href="#webhook-payload" className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Webhook Schema
              </a>
            </div>
          </div>
        </section>

        {/* Endpoints Overview */}
        <section id="endpoints" className="py-16 bg-[#F2F5F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Endpoints</h2>

            <div className="grid gap-4 mb-12">
              <div className="bg-white rounded-lg p-4 flex items-center gap-4 shadow-sm">
                <span className="px-3 py-1 bg-green-500 text-white text-sm font-bold rounded min-w-[70px] text-center">POST</span>
                <code className="text-[#0F172A] font-mono">/webhooks/subscribe</code>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center gap-4 shadow-sm">
                <span className="px-3 py-1 bg-blue-500 text-white text-sm font-bold rounded min-w-[70px] text-center">GET</span>
                <code className="text-[#0F172A] font-mono">/webhooks/{'{id}'}</code>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center gap-4 shadow-sm">
                <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-bold rounded min-w-[70px] text-center">PATCH</span>
                <code className="text-[#0F172A] font-mono">/webhooks/{'{id}'}</code>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center gap-4 shadow-sm">
                <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded min-w-[70px] text-center">DELETE</span>
                <code className="text-[#0F172A] font-mono">/webhooks/{'{id}'}</code>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center gap-4 shadow-sm">
                <span className="px-3 py-1 bg-blue-500 text-white text-sm font-bold rounded min-w-[70px] text-center">GET</span>
                <code className="text-[#0F172A] font-mono">/webhooks</code>
              </div>
            </div>
          </div>
        </section>

        {/* POST /webhooks/subscribe */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="px-6 py-4 bg-[#0F172A] flex items-center gap-4">
                <span className="px-3 py-1 bg-green-500 text-white text-sm font-bold rounded">POST</span>
                <code className="text-white font-mono">/webhooks/subscribe</code>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6 text-lg">
                  Register a new webhook endpoint with preferences
                </p>

                {/* Authentication */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4">Authentication</h3>
                  <p className="text-gray-700 mb-4">
                    All requests require authentication via Bearer Token:
                  </p>
                  <div className="bg-[#0F172A] rounded-lg p-4">
                    <code className="text-[#C9A23A]">Authorization: Bearer YOUR_API_KEY</code>
                  </div>
                </div>

                {/* Request Body */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4">Request Body</h3>
                  <div className="bg-[#0F172A] rounded-xl overflow-hidden">
                    <div className="px-4 py-2 bg-[#1E293B]">
                      <span className="text-xs text-gray-400">JSON</span>
                    </div>
                    <div className="p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-300">
                        <code>{`{
  "url": "https://customer.com/webhook/123",
  "events": [
    "event.crash",
    "event.disabled_vehicle",
    "event.first_responder",
    "event.construction"
  ],
  "preferences": {
    "geographic_location": {
      "country": "US",
      "region": "CA"
    }
  }
}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Response */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4">Response</h3>
                  <p className="text-gray-600 mb-4 font-medium">201 Created</p>
                  <div className="bg-[#0F172A] rounded-xl overflow-hidden">
                    <div className="p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-300">
                        <code>{`{
  "id": "wh_abc123",
  "url": "https://customer.com/webhook/123",
  "events": ["event.crash", "event.disabled_vehicle"],
  "preferences": {
    "geographic_location": {
      "country": "US",
      "region": "CA"
    }
  },
  "created_at": "2025-09-24T10:00:00Z",
  "status": "active"
}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Parameters Table */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4">Parameters</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-[#F2F5F9]">
                          <th className="text-left py-3 px-4 font-semibold text-[#0F172A]">Parameter</th>
                          <th className="text-left py-3 px-4 font-semibold text-[#0F172A]">Type</th>
                          <th className="text-left py-3 px-4 font-semibold text-[#0F172A]">Required</th>
                          <th className="text-left py-3 px-4 font-semibold text-[#0F172A]">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4"><code className="text-[#C9A23A]">url</code></td>
                          <td className="py-3 px-4 text-gray-600">string</td>
                          <td className="py-3 px-4"><span className="text-green-600 font-medium">Yes</span></td>
                          <td className="py-3 px-4 text-gray-600">HTTPS endpoint URL to receive webhooks</td>
                        </tr>
                        <tr className="border-b border-gray-100 bg-[#F2F5F9]/50">
                          <td className="py-3 px-4"><code className="text-[#C9A23A]">events</code></td>
                          <td className="py-3 px-4 text-gray-600">array</td>
                          <td className="py-3 px-4"><span className="text-green-600 font-medium">Yes</span></td>
                          <td className="py-3 px-4 text-gray-600">Array of event types to subscribe to</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4"><code className="text-[#C9A23A]">preferences</code></td>
                          <td className="py-3 px-4 text-gray-600">object</td>
                          <td className="py-3 px-4"><span className="text-gray-500">No</span></td>
                          <td className="py-3 px-4 text-gray-600">Geographic and other filtering preferences</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Available Event Types */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4">Available Event Types</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-[#F2F5F9] rounded-lg p-4">
                      <code className="text-[#C9A23A] font-semibold">event.crash</code>
                      <p className="text-gray-600 mt-1">Traffic accidents and crashes</p>
                    </div>
                    <div className="bg-[#F2F5F9] rounded-lg p-4">
                      <code className="text-[#C9A23A] font-semibold">event.construction</code>
                      <p className="text-gray-600 mt-1">Construction and roadwork events</p>
                    </div>
                    <div className="bg-[#F2F5F9] rounded-lg p-4">
                      <code className="text-[#C9A23A] font-semibold">event.disabled_vehicle</code>
                      <p className="text-gray-600 mt-1">Disabled or broken down vehicles</p>
                    </div>
                    <div className="bg-[#F2F5F9] rounded-lg p-4">
                      <code className="text-[#C9A23A] font-semibold">event.first_responder</code>
                      <p className="text-gray-600 mt-1">Emergency responder activity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Webhook Payload Schema */}
        <section id="webhook-payload" className="py-16 bg-[#F2F5F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Webhook Payload Schema</h2>
            <p className="text-gray-700 mb-8 text-lg">
              When an event occurs, Argus will send a POST request to your registered webhook URL with the following payload structure:
            </p>

            {/* Webhook POST Payload */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Webhook POST Payload</h3>
              <div className="bg-[#0F172A] rounded-xl overflow-hidden">
                <div className="p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300">
                    <code>{`{
  "id": "del_abc123xyz",
  "event": "event.crash",
  "timestamp": "2025-11-07T14:32:15.234Z",
  "data": {
    "severity": "critical",
    "location": {
      "latitude": 47.6062,
      "longitude": -122.3321,
      "address": "I-405 Northbound, Mile 23.4",
      "city": "Seattle",
      "state": "WA",
      "country": "US",
      "road": "I-405",
      "direction": "Northbound"
    },
    "description": "Multi-vehicle collision blocking two lanes",
    "lanes_affected": 2,
    "estimated_duration_minutes": 45
  },
  "metadata": {
    "source": "traffic_camera_ai",
    "confidence_score": 0.94
  }
}`}</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Payload Fields Table */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Payload Fields</h3>
              <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#0F172A]">
                      <th className="text-left py-4 px-4 font-bold text-white">Field</th>
                      <th className="text-left py-4 px-4 font-bold text-white">Type</th>
                      <th className="text-left py-4 px-4 font-bold text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4"><code className="text-[#C9A23A]">id</code></td>
                      <td className="py-4 px-4 text-gray-600">string</td>
                      <td className="py-4 px-4 text-gray-600">Unique delivery ID for this webhook notification</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-[#F2F5F9]/50">
                      <td className="py-4 px-4"><code className="text-[#C9A23A]">event</code></td>
                      <td className="py-4 px-4 text-gray-600">string</td>
                      <td className="py-4 px-4 text-gray-600">Event type (event.crash, event.construction, event.disabled_vehicle, event.first_responder)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4"><code className="text-[#C9A23A]">timestamp</code></td>
                      <td className="py-4 px-4 text-gray-600">string</td>
                      <td className="py-4 px-4 text-gray-600">ISO 8601 timestamp when the event was detected</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-[#F2F5F9]/50">
                      <td className="py-4 px-4"><code className="text-[#C9A23A]">data</code></td>
                      <td className="py-4 px-4 text-gray-600">object</td>
                      <td className="py-4 px-4 text-gray-600">Event-specific data including location, severity, and details (structure varies by event type)</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4"><code className="text-[#C9A23A]">metadata</code></td>
                      <td className="py-4 px-4 text-gray-600">object</td>
                      <td className="py-4 px-4 text-gray-600">Optional metadata including AI confidence scores and data sources</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* HTTP Headers */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">HTTP Headers</h3>
              <p className="text-gray-700 mb-4">Each webhook request includes these custom headers:</p>
              <div className="bg-[#0F172A] rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-300">
                  <code>{`Content-Type: application/json
User-Agent: WebhookDelivery/1.0
X-Webhook-Event: event.crash
X-Webhook-ID: del_abc123xyz
X-Webhook-Timestamp: 2025-11-07T14:32:15.234Z`}</code>
                </pre>
              </div>
            </div>

            {/* Response Requirements */}
            <div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Response Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Respond with HTTP 200-299 status code to acknowledge successful receipt</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Response must be returned within 30 seconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Failed deliveries are automatically retried up to 3 times with exponential backoff</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Your webhook endpoint must use HTTPS</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Other Endpoints */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Managing Webhooks</h2>

            <div className="space-y-6">
              {/* GET /webhooks/{id} */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <div className="px-6 py-4 bg-[#0F172A] flex items-center gap-4">
                  <span className="px-3 py-1 bg-blue-500 text-white text-sm font-bold rounded">GET</span>
                  <code className="text-white font-mono">/webhooks/{'{id}'}</code>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">
                    Retrieve details about a specific webhook subscription by ID.
                  </p>
                </div>
              </div>

              {/* PATCH /webhooks/{id} */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <div className="px-6 py-4 bg-[#0F172A] flex items-center gap-4">
                  <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-bold rounded">PATCH</span>
                  <code className="text-white font-mono">/webhooks/{'{id}'}</code>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">
                    Update an existing webhook subscription. Modify the URL, events, or preferences.
                  </p>
                </div>
              </div>

              {/* DELETE /webhooks/{id} */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <div className="px-6 py-4 bg-[#0F172A] flex items-center gap-4">
                  <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded">DELETE</span>
                  <code className="text-white font-mono">/webhooks/{'{id}'}</code>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">
                    Delete a webhook subscription. You will no longer receive events at the registered URL.
                  </p>
                </div>
              </div>

              {/* GET /webhooks */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <div className="px-6 py-4 bg-[#0F172A] flex items-center gap-4">
                  <span className="px-3 py-1 bg-blue-500 text-white text-sm font-bold rounded">GET</span>
                  <code className="text-white font-mono">/webhooks</code>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">
                    List all webhook subscriptions for your account.
                  </p>
                </div>
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
              Get API access and start receiving real-time traffic incident alerts. Our team is ready
              to help you integrate webhook-based traffic intelligence into your application.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/company/contact"
                className="px-8 py-3 bg-[#C9A23A] text-white font-semibold rounded-lg hover:bg-[#E7C873] transition-colors"
              >
                Request API Access
              </Link>
              <Link
                href="/developer/platform"
                className="px-8 py-3 bg-[#7FB7FF] text-[#0F172A] font-semibold rounded-lg hover:bg-[#A5CEFF] transition-colors"
              >
                Learn About the Ontology
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="bg-[#F2F5F9] py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Traffic Data Group, Inc. All rights reserved.
        </div>
      </main>
      <Footer />
    </>
  );
}

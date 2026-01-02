import Header from '../../components/header';
import Footer from '../../components/footer';
import Link from 'next/link';
import Script from 'next/script';
import { Code, Shield, Zap, Clock, Database, AlertTriangle, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'API Documentation | Argus AI Traffic Intelligence',
  description: 'Complete API documentation for Argus AI real-time traffic intelligence. RESTful endpoints for incident alerts, traffic flow, volume data, and 9 detection types. Sub-10-second latency.',
  keywords: 'traffic API documentation, incident detection API, real-time traffic API, traffic flow API, traffic volume API, traffic intelligence API, navigation data API',
  openGraph: {
    title: 'Argus AI API Documentation | Traffic Intelligence Endpoints',
    description: 'RESTful API for real-time traffic intelligence. Integrate incident alerts, traffic data, and route optimization with sub-10-second latency.',
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
            "description": "Complete API reference for integrating real-time traffic intelligence, incident detection, and route optimization.",
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
              "name": "Argus AI Traffic Intelligence API",
              "description": "Real-time traffic data API aggregating 911/PSAP, telematics, roadway sensors, traffic camera AI, and dashcam inference",
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
              Complete reference for integrating Argus AI real-time traffic intelligence into your applications.
              RESTful endpoints, WebSocket streams, and comprehensive code examples.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#quick-start" className="px-6 py-3 bg-[#C9A23A] text-white font-semibold rounded-lg hover:bg-[#E7C873] transition-colors">
                Quick Start Guide
              </a>
              <a href="#endpoints" className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                View Endpoints
              </a>
            </div>
          </div>
        </section>

        {/* API Overview Stats */}
        <section className="py-12 bg-[#F2F5F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0F172A]">&lt;10s</div>
                <div className="text-gray-600 text-sm">Detection Latency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0F172A]">&lt;100ms</div>
                <div className="text-gray-600 text-sm">API Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0F172A]">99.9%</div>
                <div className="text-gray-600 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0F172A]">9</div>
                <div className="text-gray-600 text-sm">Detection Types</div>
              </div>
            </div>
          </div>
        </section>

        {/* Detection Types */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-4">What We Detect</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Others detect the symptoms (jams, congestion). We detect the <strong>incident</strong> that causes them—and forecast the impact before it happens.
              </p>
            </div>

            {/* Detection Types Grid */}
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 mb-12">
              <div className="bg-[#F2F5F9] rounded-xl p-4 text-center">
                <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-red-500" />
                <p className="text-xs font-medium text-[#0F172A]">Incidents & Crashes</p>
              </div>
              <div className="bg-[#F2F5F9] rounded-xl p-4 text-center">
                <Database className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                <p className="text-xs font-medium text-[#0F172A]">Congestion</p>
              </div>
              <div className="bg-[#F2F5F9] rounded-xl p-4 text-center">
                <Clock className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                <p className="text-xs font-medium text-[#0F172A]">Traffic Jams</p>
              </div>
              <div className="bg-[#F2F5F9] rounded-xl p-4 text-center">
                <Zap className="w-8 h-8 mx-auto mb-2 text-red-600" />
                <p className="text-xs font-medium text-[#0F172A]">Emergency Vehicles</p>
              </div>
              <div className="bg-[#F2F5F9] rounded-xl p-4 text-center">
                <Code className="w-8 h-8 mx-auto mb-2 text-gray-500" />
                <p className="text-xs font-medium text-[#0F172A]">Disabled Vehicles</p>
              </div>
              <div className="bg-[#F2F5F9] rounded-xl p-4 text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                <p className="text-xs font-medium text-[#0F172A]">First Responders</p>
              </div>
              <div className="bg-[#F2F5F9] rounded-xl p-4 text-center">
                <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-orange-400" />
                <p className="text-xs font-medium text-[#0F172A]">Traffic Stops</p>
              </div>
              <div className="bg-[#F2F5F9] rounded-xl p-4 text-center">
                <Database className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                <p className="text-xs font-medium text-[#0F172A]">Construction</p>
              </div>
              <div className="bg-[#F2F5F9] rounded-xl p-4 text-center">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-500" />
                <p className="text-xs font-medium text-[#0F172A]">Pedestrians</p>
              </div>
            </div>

            {/* Current & Coming Soon */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-[#F2F5F9] rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">Current Data Available</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Real-time incident alerts (all 9 types)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Traffic flow data
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Traffic volume counts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Aggregated multi-source intelligence
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#C9A23A]/20 to-[#C9A23A]/5 rounded-xl p-6 border border-[#C9A23A]/30">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-xl font-bold text-[#0F172A]">Predictive Flow</h3>
                  <span className="bg-[#C9A23A] text-white text-xs font-bold px-2 py-1 rounded">COMING SOON</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Vision-based predictive traffic flow—anticipating conditions in 10-minute intervals, up to 90 minutes ahead.
                </p>
                <p className="text-sm text-gray-600 italic">
                  No one else predicts because they don&apos;t see what&apos;s happening. We do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section id="quick-start" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Quick Start Guide</h2>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-[#F2F5F9] rounded-xl p-6">
                <div className="w-10 h-10 bg-[#C9A23A] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">Get Your API Key</h3>
                <p className="text-gray-600 mb-4">
                  Contact our team to receive your API credentials. Keys are issued per organization with custom rate limits.
                </p>
                <Link href="/company/contact" className="text-[#C9A23A] font-semibold hover:underline">
                  Request Access →
                </Link>
              </div>

              <div className="bg-[#F2F5F9] rounded-xl p-6">
                <div className="w-10 h-10 bg-[#C9A23A] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">Authenticate</h3>
                <p className="text-gray-600 mb-4">
                  Include your API key in the Authorization header as a Bearer token on all requests.
                </p>
                <a href="#authentication" className="text-[#C9A23A] font-semibold hover:underline">
                  See Authentication →
                </a>
              </div>

              <div className="bg-[#F2F5F9] rounded-xl p-6">
                <div className="w-10 h-10 bg-[#C9A23A] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">Make Requests</h3>
                <p className="text-gray-600 mb-4">
                  Query incidents, traffic flow, or subscribe to real-time WebSocket alerts for your coverage area.
                </p>
                <a href="#endpoints" className="text-[#C9A23A] font-semibold hover:underline">
                  View Endpoints →
                </a>
              </div>
            </div>

            {/* First Request Example */}
            <div className="bg-[#0F172A] rounded-xl overflow-hidden">
              <div className="px-4 py-3 bg-[#1E293B] flex items-center justify-between">
                <span className="text-white font-semibold">Your First API Request</span>
                <span className="text-xs text-gray-400">cURL</span>
              </div>
              <div className="p-4 overflow-x-auto">
                <pre className="text-sm text-gray-300">
                  <code>{`curl -X GET "https://api.getargus.ai/v1/incidents" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "lat": 40.7128,
    "lng": -74.0060,
    "radius_km": 10,
    "types": ["accident", "congestion", "road_closure"]
  }'`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Authentication */}
        <section id="authentication" className="py-16 bg-[#F2F5F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Authentication</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6">
                  All API requests require authentication using a Bearer token. Include your API key in the
                  <code className="mx-1 px-2 py-1 bg-[#0F172A] text-[#C9A23A] rounded text-sm">Authorization</code>
                  header of every request.
                </p>

                <div className="bg-[#0F172A] rounded-lg p-4 mb-6">
                  <code className="text-[#C9A23A]">Authorization: Bearer YOUR_API_KEY</code>
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] mb-4">Security Best Practices</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#C9A23A] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Never expose API keys in client-side code or public repositories</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#C9A23A] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Use environment variables to store API keys securely</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#C9A23A] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Rotate keys periodically and revoke compromised keys immediately</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#C9A23A] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Use IP whitelisting for production environments</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">Example: Node.js</h3>
                <div className="bg-[#0F172A] rounded-xl overflow-hidden">
                  <div className="px-4 py-2 bg-[#1E293B]">
                    <span className="text-xs text-gray-400">JavaScript</span>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300">
                      <code>{`const axios = require('axios');

const argusClient = axios.create({
  baseURL: 'https://api.getargus.ai/v1',
  headers: {
    'Authorization': \`Bearer \${process.env.ARGUS_API_KEY}\`,
    'Content-Type': 'application/json'
  }
});

// Fetch incidents in area
const incidents = await argusClient.get('/incidents', {
  params: {
    lat: 40.7128,
    lng: -74.0060,
    radius_km: 10
  }
});`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Base URL */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Base URL</h2>

            <div className="bg-[#F2F5F9] rounded-xl p-6 mb-6">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-bold rounded">PRODUCTION</span>
                <code className="text-lg font-mono text-[#0F172A]">https://api.getargus.ai/v1</code>
              </div>
            </div>

            <p className="text-gray-600">
              All API endpoints are relative to this base URL. The API uses HTTPS exclusively for all communications.
              HTTP requests will be redirected to HTTPS.
            </p>
          </div>
        </section>

        {/* Endpoints */}
        <section id="endpoints" className="py-16 bg-[#F2F5F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8">API Endpoints</h2>

            {/* Endpoints Overview */}
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

            {/* Subscribe Endpoint */}
            <div className="bg-white rounded-xl overflow-hidden mb-8 shadow-sm">
              <div className="px-6 py-4 bg-[#0F172A] flex items-center gap-4">
                <span className="px-3 py-1 bg-green-500 text-white text-sm font-bold rounded">POST</span>
                <code className="text-white font-mono">/webhooks/subscribe</code>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  Register a new webhook endpoint with preferences. Receive real-time traffic incident alerts
                  pushed directly to your server with sub-10-second latency from detection.
                </p>

                <h4 className="font-bold text-[#0F172A] mb-3">Request Body</h4>
                <div className="bg-[#0F172A] rounded-lg p-4 overflow-x-auto mb-6">
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

                <h4 className="font-bold text-[#0F172A] mb-3">Parameters</h4>
                <div className="overflow-x-auto mb-6">
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
                      <tr>
                        <td className="py-3 px-4"><code className="text-[#C9A23A]">preferences</code></td>
                        <td className="py-3 px-4 text-gray-600">object</td>
                        <td className="py-3 px-4"><span className="text-gray-500">No</span></td>
                        <td className="py-3 px-4 text-gray-600">Geographic and other filtering preferences</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="font-bold text-[#0F172A] mb-3">Available Event Types</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
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

                <h4 className="font-bold text-[#0F172A] mb-3">Response Example</h4>
                <p className="text-gray-600 mb-2 font-medium">201 Created</p>
                <div className="bg-[#0F172A] rounded-lg p-4 overflow-x-auto">
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

            {/* Webhook Payload Schema */}
            <div className="bg-white rounded-xl overflow-hidden mb-8 shadow-sm">
              <div className="px-6 py-4 bg-[#0F172A]">
                <h3 className="text-white font-bold text-lg">Webhook Payload Schema</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  When an event occurs, Argus will send a POST request to your registered webhook URL with the following payload structure:
                </p>

                <h4 className="font-bold text-[#0F172A] mb-3">Webhook POST Payload</h4>
                <div className="bg-[#0F172A] rounded-lg p-4 overflow-x-auto mb-6">
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

                <h4 className="font-bold text-[#0F172A] mb-3">Payload Fields</h4>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#F2F5F9]">
                        <th className="text-left py-3 px-4 font-semibold text-[#0F172A]">Field</th>
                        <th className="text-left py-3 px-4 font-semibold text-[#0F172A]">Type</th>
                        <th className="text-left py-3 px-4 font-semibold text-[#0F172A]">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4"><code className="text-[#C9A23A]">id</code></td>
                        <td className="py-3 px-4 text-gray-600">string</td>
                        <td className="py-3 px-4 text-gray-600">Unique delivery ID for this webhook notification</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-[#F2F5F9]/50">
                        <td className="py-3 px-4"><code className="text-[#C9A23A]">event</code></td>
                        <td className="py-3 px-4 text-gray-600">string</td>
                        <td className="py-3 px-4 text-gray-600">Event type (event.crash, event.construction, event.disabled_vehicle, event.first_responder)</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4"><code className="text-[#C9A23A]">timestamp</code></td>
                        <td className="py-3 px-4 text-gray-600">string</td>
                        <td className="py-3 px-4 text-gray-600">ISO 8601 timestamp when the event was detected</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-[#F2F5F9]/50">
                        <td className="py-3 px-4"><code className="text-[#C9A23A]">data</code></td>
                        <td className="py-3 px-4 text-gray-600">object</td>
                        <td className="py-3 px-4 text-gray-600">Event-specific data including location, severity, and details (structure varies by event type)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4"><code className="text-[#C9A23A]">metadata</code></td>
                        <td className="py-3 px-4 text-gray-600">object</td>
                        <td className="py-3 px-4 text-gray-600">Optional metadata including AI confidence scores and data sources</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="font-bold text-[#0F172A] mb-3">HTTP Headers</h4>
                <p className="text-gray-700 mb-3">Each webhook request includes these custom headers:</p>
                <div className="bg-[#0F172A] rounded-lg p-4 overflow-x-auto mb-6">
                  <pre className="text-sm text-gray-300">
                    <code>{`Content-Type: application/json
User-Agent: WebhookDelivery/1.0
X-Webhook-Event: event.crash
X-Webhook-ID: del_abc123xyz
X-Webhook-Timestamp: 2025-11-07T14:32:15.234Z`}</code>
                  </pre>
                </div>

                <h4 className="font-bold text-[#0F172A] mb-3">Response Requirements</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Respond with HTTP 200-299 status code to acknowledge successful receipt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Response must be returned within 30 seconds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Failed deliveries are automatically retried up to 3 times with exponential backoff</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Your webhook endpoint must use HTTPS</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Managing Webhooks */}
            <div className="bg-white rounded-xl overflow-hidden mb-8 shadow-sm">
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

            <div className="bg-white rounded-xl overflow-hidden mb-8 shadow-sm">
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

            <div className="bg-white rounded-xl overflow-hidden mb-8 shadow-sm">
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

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
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
        </section>

        {/* Error Handling */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Error Handling</h2>

            <p className="text-gray-700 mb-6">
              The API uses conventional HTTP status codes and returns detailed error messages in JSON format.
              All errors include a unique error code for debugging.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0F172A]">
                    <th className="text-left py-4 px-4 font-bold text-white">Status Code</th>
                    <th className="text-left py-4 px-4 font-bold text-white">Error Code</th>
                    <th className="text-left py-4 px-4 font-bold text-white">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="py-4 px-4 text-[#0F172A] font-semibold">400</td>
                    <td className="py-4 px-4"><code className="text-[#C9A23A]">invalid_request</code></td>
                    <td className="py-4 px-4 text-gray-600">Missing or invalid parameters</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-[#F2F5F9]">
                    <td className="py-4 px-4 text-[#0F172A] font-semibold">401</td>
                    <td className="py-4 px-4"><code className="text-[#C9A23A]">unauthorized</code></td>
                    <td className="py-4 px-4 text-gray-600">Invalid or missing API key</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="py-4 px-4 text-[#0F172A] font-semibold">403</td>
                    <td className="py-4 px-4"><code className="text-[#C9A23A]">forbidden</code></td>
                    <td className="py-4 px-4 text-gray-600">API key lacks required permissions</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-[#F2F5F9]">
                    <td className="py-4 px-4 text-[#0F172A] font-semibold">404</td>
                    <td className="py-4 px-4"><code className="text-[#C9A23A]">not_found</code></td>
                    <td className="py-4 px-4 text-gray-600">Resource not found</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="py-4 px-4 text-[#0F172A] font-semibold">429</td>
                    <td className="py-4 px-4"><code className="text-[#C9A23A]">rate_limited</code></td>
                    <td className="py-4 px-4 text-gray-600">Rate limit exceeded</td>
                  </tr>
                  <tr className="bg-[#F2F5F9]">
                    <td className="py-4 px-4 text-[#0F172A] font-semibold">500</td>
                    <td className="py-4 px-4"><code className="text-[#C9A23A]">server_error</code></td>
                    <td className="py-4 px-4 text-gray-600">Internal server error</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Error Response Format</h3>
            <div className="bg-[#0F172A] rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-gray-300">
                <code>{`{
  "success": false,
  "error": {
    "code": "invalid_request",
    "message": "Parameter 'lat' must be between -90 and 90",
    "details": {
      "field": "lat",
      "value": 95.5,
      "constraint": "range(-90, 90)"
    },
    "request_id": "req_xyz123abc"
  }
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Rate Limits */}
        <section className="py-16 bg-[#F2F5F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Rate Limits</h2>

            <p className="text-gray-700 mb-6">
              Rate limits vary by plan and are applied per API key. Rate limit headers are included in every response
              to help you monitor usage.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0F172A]">
                    <th className="text-left py-4 px-4 font-bold text-white">Plan</th>
                    <th className="text-left py-4 px-4 font-bold text-white">Requests/Minute</th>
                    <th className="text-left py-4 px-4 font-bold text-white">Requests/Day</th>
                    <th className="text-left py-4 px-4 font-bold text-white">WebSocket Connections</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="py-4 px-4 text-[#0F172A] font-semibold">Starter</td>
                    <td className="py-4 px-4 text-[#0F172A]">60</td>
                    <td className="py-4 px-4 text-[#0F172A]">10,000</td>
                    <td className="py-4 px-4 text-[#0F172A]">1</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-[#F2F5F9]">
                    <td className="py-4 px-4 text-[#0F172A] font-semibold">Growth</td>
                    <td className="py-4 px-4 text-[#0F172A]">300</td>
                    <td className="py-4 px-4 text-[#0F172A]">100,000</td>
                    <td className="py-4 px-4 text-[#0F172A]">5</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-4 text-[#C9A23A] font-bold">Enterprise</td>
                    <td className="py-4 px-4 text-[#0F172A] font-medium">Custom</td>
                    <td className="py-4 px-4 text-[#0F172A] font-medium">Unlimited</td>
                    <td className="py-4 px-4 text-[#0F172A] font-medium">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Rate Limit Headers</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <code className="text-[#C9A23A] text-sm">X-RateLimit-Limit</code>
                <p className="text-sm text-gray-600 mt-1">Maximum requests per minute for your plan</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <code className="text-[#C9A23A] text-sm">X-RateLimit-Remaining</code>
                <p className="text-sm text-gray-600 mt-1">Requests remaining in current window</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <code className="text-[#C9A23A] text-sm">X-RateLimit-Reset</code>
                <p className="text-sm text-gray-600 mt-1">Unix timestamp when limit resets</p>
              </div>
            </div>
          </div>
        </section>

        {/* SDK & Libraries */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8">SDKs & Code Examples</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">Python</h3>
                <div className="bg-[#0F172A] rounded-xl overflow-hidden">
                  <div className="px-4 py-2 bg-[#1E293B]">
                    <span className="text-xs text-gray-400">Python 3.x</span>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300">
                      <code>{`import requests
import os

ARGUS_API_KEY = os.environ['ARGUS_API_KEY']
BASE_URL = 'https://api.getargus.ai/v1'

def get_incidents(lat, lng, radius_km=10):
    response = requests.get(
        f'{BASE_URL}/incidents',
        headers={
            'Authorization': f'Bearer {ARGUS_API_KEY}'
        },
        params={
            'lat': lat,
            'lng': lng,
            'radius_km': radius_km
        }
    )
    return response.json()

# Get incidents near NYC
incidents = get_incidents(40.7128, -74.0060)
for inc in incidents['data']['incidents']:
    print(f"{inc['type']}: {inc['location']['road']}")`}</code>
                    </pre>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">JavaScript/TypeScript</h3>
                <div className="bg-[#0F172A] rounded-xl overflow-hidden">
                  <div className="px-4 py-2 bg-[#1E293B]">
                    <span className="text-xs text-gray-400">TypeScript</span>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300">
                      <code>{`interface Incident {
  id: string;
  type: string;
  severity: string;
  location: {
    lat: number;
    lng: number;
    road: string;
  };
}

async function getIncidents(
  lat: number,
  lng: number
): Promise<Incident[]> {
  const res = await fetch(
    \`https://api.getargus.ai/v1/incidents?lat=\${lat}&lng=\${lng}\`,
    {
      headers: {
        'Authorization': \`Bearer \${process.env.ARGUS_API_KEY}\`
      }
    }
  );
  const data = await res.json();
  return data.data.incidents;
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#F2F5F9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8 text-center">
              API FAQ
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-[#0F172A] mb-2">What is the API response time?</h3>
                <p className="text-gray-600">
                  The Argus AI API typically responds in under 100ms for most queries. Incident data is
                  available within 10 seconds of detection, making it the fastest traffic intelligence
                  API available for navigation and routing applications.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-[#0F172A] mb-2">What geographic coverage does the API provide?</h3>
                <p className="text-gray-600">
                  Argus AI currently covers major metropolitan areas and interstate highways across the
                  United States. Coverage includes real-time data from traffic cameras, telematics partners,
                  911/PSAP systems, and roadway sensors. Contact us for specific regional availability.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-[#0F172A] mb-2">How does Argus AI achieve sub-10-second latency?</h3>
                <p className="text-gray-600">
                  Our AI video inference processes traffic camera and dashcam feeds in real-time, detecting
                  incidents within seconds of occurrence. Combined with direct 911/PSAP integrations and
                  telematics partnerships, we eliminate the delays inherent in crowdsourced or GPS-only solutions.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-[#0F172A] mb-2">Can I access historical incident data?</h3>
                <p className="text-gray-600">
                  Yes. The /v1/incidents/history endpoint provides access to historical incident data for
                  analytics, forensics, route planning optimization, and insurance use cases. Historical data
                  includes all incident metadata, timestamps, duration, and source attribution.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-[#0F172A] mb-2">What data sources feed the API?</h3>
                <p className="text-gray-600">
                  Argus AI aggregates five distinct data sources: 911/PSAP dispatch systems, commercial
                  telematics networks, public roadway sensors, AI-powered traffic camera analysis, and
                  dashcam video inference. Each incident includes source attribution so you know the
                  data origin and confidence level.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-[#0F172A] mb-2">Do you offer enterprise SLAs?</h3>
                <p className="text-gray-600">
                  Enterprise plans include 99.9% uptime SLA, dedicated support, custom rate limits,
                  priority WebSocket connections, and optional dedicated infrastructure. Contact our
                  team to discuss enterprise requirements and custom integrations.
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
              Get API access and start building with real-time traffic intelligence. Our team is ready
              to help you integrate comprehensive traffic data into your navigation application.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/company/contact"
                className="px-8 py-3 bg-[#C9A23A] text-white font-semibold rounded-lg hover:bg-[#E7C873] transition-colors"
              >
                Request API Access
              </Link>
              <Link
                href="/developer/data-sources"
                className="px-8 py-3 bg-[#7FB7FF] text-[#0F172A] font-semibold rounded-lg hover:bg-[#A5CEFF] transition-colors"
              >
                Explore Data Sources
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

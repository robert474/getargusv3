import Header from '../../components/header';
import Footer from '../../components/footer';
import Link from 'next/link';
import Script from 'next/script';
import { Code, Shield, Zap, Clock, Database, AlertTriangle, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'API Documentation | Argus AI Traffic Intelligence',
  description: 'Complete API documentation for Argus AI real-time traffic intelligence. RESTful endpoints for incident alerts, traffic data, route optimization, and historical analytics. Sub-10-second latency.',
  keywords: 'traffic API documentation, incident detection API, real-time traffic API, route optimization API, traffic data endpoints, traffic intelligence API, navigation data API',
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
                <div className="text-3xl font-bold text-[#0F172A]">5</div>
                <div className="text-gray-600 text-sm">Data Sources</div>
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

            {/* Incidents Endpoint */}
            <div className="bg-white rounded-xl overflow-hidden mb-8 shadow-sm">
              <div className="px-6 py-4 bg-[#0F172A] flex items-center gap-4">
                <span className="px-3 py-1 bg-green-500 text-white text-sm font-bold rounded">GET</span>
                <code className="text-white font-mono">/v1/incidents</code>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  Retrieve real-time traffic incidents within a geographic area. Returns incidents from all data sources
                  including 911/PSAP dispatch, telematics, roadway sensors, traffic camera AI, and dashcam inference.
                </p>

                <h4 className="font-bold text-[#0F172A] mb-3">Request Parameters</h4>
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
                        <td className="py-3 px-4"><code className="text-[#C9A23A]">lat</code></td>
                        <td className="py-3 px-4 text-gray-600">float</td>
                        <td className="py-3 px-4"><span className="text-green-600 font-medium">Yes</span></td>
                        <td className="py-3 px-4 text-gray-600">Center latitude for search area (-90 to 90)</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-[#F2F5F9]/50">
                        <td className="py-3 px-4"><code className="text-[#C9A23A]">lng</code></td>
                        <td className="py-3 px-4 text-gray-600">float</td>
                        <td className="py-3 px-4"><span className="text-green-600 font-medium">Yes</span></td>
                        <td className="py-3 px-4 text-gray-600">Center longitude for search area (-180 to 180)</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4"><code className="text-[#C9A23A]">radius_km</code></td>
                        <td className="py-3 px-4 text-gray-600">float</td>
                        <td className="py-3 px-4"><span className="text-gray-500">No</span></td>
                        <td className="py-3 px-4 text-gray-600">Search radius in kilometers (default: 10, max: 100)</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-[#F2F5F9]/50">
                        <td className="py-3 px-4"><code className="text-[#C9A23A]">types</code></td>
                        <td className="py-3 px-4 text-gray-600">array</td>
                        <td className="py-3 px-4"><span className="text-gray-500">No</span></td>
                        <td className="py-3 px-4 text-gray-600">Filter by incident types: accident, congestion, road_closure, construction, hazard, weather</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4"><code className="text-[#C9A23A]">severity</code></td>
                        <td className="py-3 px-4 text-gray-600">string</td>
                        <td className="py-3 px-4"><span className="text-gray-500">No</span></td>
                        <td className="py-3 px-4 text-gray-600">Filter by severity: minor, moderate, major, critical</td>
                      </tr>
                      <tr className="bg-[#F2F5F9]/50">
                        <td className="py-3 px-4"><code className="text-[#C9A23A]">sources</code></td>
                        <td className="py-3 px-4 text-gray-600">array</td>
                        <td className="py-3 px-4"><span className="text-gray-500">No</span></td>
                        <td className="py-3 px-4 text-gray-600">Filter by data source: 911_psap, telematics, sensor, camera_ai, dashcam</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="font-bold text-[#0F172A] mb-3">Response Example</h4>
                <div className="bg-[#0F172A] rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300">
                    <code>{`{
  "success": true,
  "data": {
    "incidents": [
      {
        "id": "inc_a1b2c3d4e5",
        "type": "accident",
        "severity": "major",
        "location": {
          "lat": 40.7145,
          "lng": -74.0089,
          "road": "I-95 Northbound",
          "mile_marker": 45.2,
          "address": "Near Exit 14, Jersey City, NJ"
        },
        "detected_at": "2024-12-15T14:32:08Z",
        "updated_at": "2024-12-15T14:35:22Z",
        "source": "camera_ai",
        "confidence": 0.96,
        "details": {
          "lanes_affected": 2,
          "total_lanes": 4,
          "vehicles_involved": 3,
          "injuries_reported": true,
          "emergency_response": true
        },
        "estimated_clearance": "2024-12-15T15:45:00Z",
        "delay_minutes": 25
      }
    ],
    "meta": {
      "total": 1,
      "center": { "lat": 40.7128, "lng": -74.0060 },
      "radius_km": 10,
      "query_time_ms": 42
    }
  }
}`}</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Single Incident Endpoint */}
            <div className="bg-white rounded-xl overflow-hidden mb-8 shadow-sm">
              <div className="px-6 py-4 bg-[#0F172A] flex items-center gap-4">
                <span className="px-3 py-1 bg-green-500 text-white text-sm font-bold rounded">GET</span>
                <code className="text-white font-mono">/v1/incidents/{'{id}'}</code>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  Retrieve detailed information about a specific incident by ID. Includes full incident history,
                  source attribution, and real-time status updates.
                </p>

                <h4 className="font-bold text-[#0F172A] mb-3">Path Parameters</h4>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#F2F5F9]">
                        <th className="text-left py-3 px-4 font-semibold text-[#0F172A]">Parameter</th>
                        <th className="text-left py-3 px-4 font-semibold text-[#0F172A]">Type</th>
                        <th className="text-left py-3 px-4 font-semibold text-[#0F172A]">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 px-4"><code className="text-[#C9A23A]">id</code></td>
                        <td className="py-3 px-4 text-gray-600">string</td>
                        <td className="py-3 px-4 text-gray-600">Unique incident identifier (e.g., inc_a1b2c3d4e5)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Traffic Flow Endpoint */}
            <div className="bg-white rounded-xl overflow-hidden mb-8 shadow-sm">
              <div className="px-6 py-4 bg-[#0F172A] flex items-center gap-4">
                <span className="px-3 py-1 bg-green-500 text-white text-sm font-bold rounded">GET</span>
                <code className="text-white font-mono">/v1/traffic/flow</code>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  Get current traffic flow data for road segments within a bounding box. Returns speed,
                  congestion levels, and travel time estimates for each segment.
                </p>

                <h4 className="font-bold text-[#0F172A] mb-3">Request Parameters</h4>
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
                        <td className="py-3 px-4"><code className="text-[#C9A23A]">bbox</code></td>
                        <td className="py-3 px-4 text-gray-600">string</td>
                        <td className="py-3 px-4"><span className="text-green-600 font-medium">Yes</span></td>
                        <td className="py-3 px-4 text-gray-600">Bounding box: min_lng,min_lat,max_lng,max_lat</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-[#F2F5F9]/50">
                        <td className="py-3 px-4"><code className="text-[#C9A23A]">road_class</code></td>
                        <td className="py-3 px-4 text-gray-600">array</td>
                        <td className="py-3 px-4"><span className="text-gray-500">No</span></td>
                        <td className="py-3 px-4 text-gray-600">Filter by road class: interstate, highway, arterial, local</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4"><code className="text-[#C9A23A]">include_geometry</code></td>
                        <td className="py-3 px-4 text-gray-600">boolean</td>
                        <td className="py-3 px-4"><span className="text-gray-500">No</span></td>
                        <td className="py-3 px-4 text-gray-600">Include GeoJSON polylines for road segments (default: false)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="font-bold text-[#0F172A] mb-3">Response Example</h4>
                <div className="bg-[#0F172A] rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300">
                    <code>{`{
  "success": true,
  "data": {
    "segments": [
      {
        "segment_id": "seg_i95_n_42_45",
        "road_name": "I-95 Northbound",
        "road_class": "interstate",
        "current_speed_mph": 35,
        "free_flow_speed_mph": 65,
        "congestion_level": "heavy",
        "travel_time_minutes": 12.5,
        "delay_minutes": 8.2,
        "confidence": 0.92
      }
    ],
    "meta": {
      "segments_count": 1,
      "bbox": "-74.05,40.70,-74.00,40.75",
      "query_time_ms": 38
    }
  }
}`}</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Route Optimization Endpoint */}
            <div className="bg-white rounded-xl overflow-hidden mb-8 shadow-sm">
              <div className="px-6 py-4 bg-[#0F172A] flex items-center gap-4">
                <span className="px-3 py-1 bg-blue-500 text-white text-sm font-bold rounded">POST</span>
                <code className="text-white font-mono">/v1/routes/optimize</code>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  Calculate the optimal route between two points, accounting for current incidents and real-time
                  traffic conditions. Returns multiple route alternatives with ETA comparisons.
                </p>

                <h4 className="font-bold text-[#0F172A] mb-3">Request Body</h4>
                <div className="bg-[#0F172A] rounded-lg p-4 overflow-x-auto mb-6">
                  <pre className="text-sm text-gray-300">
                    <code>{`{
  "origin": {
    "lat": 40.7128,
    "lng": -74.0060
  },
  "destination": {
    "lat": 40.7580,
    "lng": -73.9855
  },
  "waypoints": [
    { "lat": 40.7484, "lng": -73.9857 }
  ],
  "avoid": ["tolls", "highways"],
  "depart_at": "2024-12-15T16:00:00Z",
  "alternatives": 3
}`}</code>
                  </pre>
                </div>

                <h4 className="font-bold text-[#0F172A] mb-3">Response Fields</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><code className="text-[#C9A23A]">routes</code> - Array of route alternatives sorted by ETA</li>
                  <li><code className="text-[#C9A23A]">routes[].distance_km</code> - Total route distance</li>
                  <li><code className="text-[#C9A23A]">routes[].duration_minutes</code> - Estimated travel time</li>
                  <li><code className="text-[#C9A23A]">routes[].incidents_on_route</code> - Incidents affecting this route</li>
                  <li><code className="text-[#C9A23A]">routes[].polyline</code> - Encoded route geometry</li>
                </ul>
              </div>
            </div>

            {/* WebSocket Endpoint */}
            <div className="bg-white rounded-xl overflow-hidden mb-8 shadow-sm">
              <div className="px-6 py-4 bg-[#0F172A] flex items-center gap-4">
                <span className="px-3 py-1 bg-purple-500 text-white text-sm font-bold rounded">WS</span>
                <code className="text-white font-mono">/v1/alerts/subscribe</code>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  WebSocket endpoint for real-time incident alerts. Receive push notifications when new incidents
                  are detected, existing incidents are updated, or incidents are cleared. Sub-10-second latency
                  from detection to delivery.
                </p>

                <h4 className="font-bold text-[#0F172A] mb-3">Connection Example</h4>
                <div className="bg-[#0F172A] rounded-lg p-4 overflow-x-auto mb-6">
                  <pre className="text-sm text-gray-300">
                    <code>{`const ws = new WebSocket(
  'wss://api.getargus.ai/v1/alerts/subscribe?token=YOUR_API_KEY'
);

// Subscribe to area
ws.onopen = () => {
  ws.send(JSON.stringify({
    action: 'subscribe',
    area: {
      lat: 40.7128,
      lng: -74.0060,
      radius_km: 25
    },
    types: ['accident', 'road_closure']
  }));
};

// Receive real-time alerts
ws.onmessage = (event) => {
  const alert = JSON.parse(event.data);
  console.log('New incident:', alert);
  // alert.type: 'new_incident' | 'incident_update' | 'incident_cleared'
};`}</code>
                  </pre>
                </div>

                <h4 className="font-bold text-[#0F172A] mb-3">Alert Types</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-[#F2F5F9] rounded-lg p-4">
                    <code className="text-[#C9A23A] text-sm">new_incident</code>
                    <p className="text-sm text-gray-600 mt-1">New incident detected in subscribed area</p>
                  </div>
                  <div className="bg-[#F2F5F9] rounded-lg p-4">
                    <code className="text-[#C9A23A] text-sm">incident_update</code>
                    <p className="text-sm text-gray-600 mt-1">Existing incident severity or details changed</p>
                  </div>
                  <div className="bg-[#F2F5F9] rounded-lg p-4">
                    <code className="text-[#C9A23A] text-sm">incident_cleared</code>
                    <p className="text-sm text-gray-600 mt-1">Incident has been resolved and cleared</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Historical Data Endpoint */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="px-6 py-4 bg-[#0F172A] flex items-center gap-4">
                <span className="px-3 py-1 bg-green-500 text-white text-sm font-bold rounded">GET</span>
                <code className="text-white font-mono">/v1/incidents/history</code>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  Query historical incident data for analytics, forensics, and pattern analysis. Filter by
                  date range, location, incident type, and data source.
                </p>

                <h4 className="font-bold text-[#0F172A] mb-3">Request Parameters</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#F2F5F9]">
                        <th className="text-left py-3 px-4 font-semibold text-[#0F172A]">Parameter</th>
                        <th className="text-left py-3 px-4 font-semibold text-[#0F172A]">Type</th>
                        <th className="text-left py-3 px-4 font-semibold text-[#0F172A]">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4"><code className="text-[#C9A23A]">start_date</code></td>
                        <td className="py-3 px-4 text-gray-600">ISO 8601</td>
                        <td className="py-3 px-4 text-gray-600">Start of date range (required)</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-[#F2F5F9]/50">
                        <td className="py-3 px-4"><code className="text-[#C9A23A]">end_date</code></td>
                        <td className="py-3 px-4 text-gray-600">ISO 8601</td>
                        <td className="py-3 px-4 text-gray-600">End of date range (required)</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4"><code className="text-[#C9A23A]">bbox</code></td>
                        <td className="py-3 px-4 text-gray-600">string</td>
                        <td className="py-3 px-4 text-gray-600">Bounding box filter</td>
                      </tr>
                      <tr className="bg-[#F2F5F9]/50">
                        <td className="py-3 px-4"><code className="text-[#C9A23A]">aggregation</code></td>
                        <td className="py-3 px-4 text-gray-600">string</td>
                        <td className="py-3 px-4 text-gray-600">Aggregate by: hour, day, week, month</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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

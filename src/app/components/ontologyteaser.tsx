'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Layers, Lock, TrendingUp } from 'lucide-react';

export default function OntologyTeaser() {
  return (
    <section className="py-16 md:py-20 bg-[#F2F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-3">
            App + API + Ontology
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">
            An API Without the Rebuild.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Argus Ontology layer handles the data schema complexity and produces one clean feed to your routing and navigation engine.
          </p>
        </div>

        {/* Two Differentiators */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Speed */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#C9A23A]/10 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#C9A23A]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A]">Sub-10 Second Detection</h3>
            </div>
            <p className="text-gray-600 mb-4">
              While others wait for crowdsourced reports, our computer vision watches traffic cameras directly. Incidents detected in under 10 seconds&mdash;not 10 minutes.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#C9A23A] rounded-full"></span>
                <span className="text-gray-500">Argus: &lt;10 sec</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="text-gray-500">Others: 5-15 min</span>
              </div>
            </div>
          </div>

          {/* Ontology */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#C9A23A]/10 rounded-lg flex items-center justify-center">
                <Layers className="w-6 h-6 text-[#C9A23A]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A]">Universal Traffic Ontology</h3>
            </div>
            <p className="text-gray-600 mb-4">
              TomTom, HERE, Waze, 511 feeds&mdash;they all speak different languages. Our ontology translates chaos into a single, routing-ready format. One API, any source.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#C9A23A] rounded-full"></span>
                <span className="text-gray-500">Unified schema</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#C9A23A] rounded-full"></span>
                <span className="text-gray-500">No lock-in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why It Matters - Quick Points */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl p-4 text-center border border-gray-100">
            <Zap className="w-6 h-6 text-[#C9A23A] mx-auto mb-2" />
            <p className="text-sm font-semibold text-[#0F172A]">Fastest Detection</p>
            <p className="text-xs text-gray-500">CV beats crowdsourcing</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-gray-100">
            <Layers className="w-6 h-6 text-[#C9A23A] mx-auto mb-2" />
            <p className="text-sm font-semibold text-[#0F172A]">One Format</p>
            <p className="text-xs text-gray-500">Any data source</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-gray-100">
            <Lock className="w-6 h-6 text-[#C9A23A] mx-auto mb-2" />
            <p className="text-sm font-semibold text-[#0F172A]">No Lock-In</p>
            <p className="text-xs text-gray-500">Swap sources anytime</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-gray-100">
            <TrendingUp className="w-6 h-6 text-[#C9A23A] mx-auto mb-2" />
            <p className="text-sm font-semibold text-[#0F172A]">Future-Proof</p>
            <p className="text-xs text-gray-500">Add new sources easily</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/developer/platform"
            className="inline-flex items-center px-6 py-3 bg-[#0F172A] hover:bg-[#1E293B] text-white rounded-lg font-semibold transition-colors"
          >
            Learn About Our Ontology
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

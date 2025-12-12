import { Metadata } from 'next';
import { Building2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Corporate Info | Argus AI - A Traffic Data Group Company',
  description: 'Argus AI is developed and operated by Traffic Data Group, Inc. Learn about our company history, mission, and the team behind our AI-powered traffic intelligence platform.',
};

export default function CorporateInfoPage() {
  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0F172A] rounded-full mb-6">
            <Building2 className="w-8 h-8 text-[#C9A23A]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            Corporate Info
          </h1>
          <p className="text-lg text-gray-600">
            The story behind Argus AI
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-[#F2F5F9] rounded-xl p-8 mb-12 border-l-4 border-[#C9A23A]">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">
            Argus AI is a product of Traffic Data Group, Inc.
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Traffic Data Group, Inc. is a technology company headquartered in Lincoln, Nebraska, 
            specializing in AI-powered traffic intelligence, real-time route optimization, and 
            geospatial analytics solutions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Founded by industry veterans with deep expertise in logistics, government technology, 
            and machine learning, Traffic Data Group developed Argus AI to transform how businesses 
            approach mobility, delivery, and transportation challenges.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our platform serves ride-sharing companies, food delivery services, last-mile logistics 
            providers, and public safety organizations with real-time traffic intelligence that 
            enables faster, more efficient operations.
          </p>
        </div>

        {/* Key Facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-[#0F172A] mb-2">Legal Entity</h3>
            <p className="text-gray-700">Traffic Data Group, Inc.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-[#0F172A] mb-2">Doing Business As</h3>
            <p className="text-gray-700">Argus AI</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-[#0F172A] mb-2">Headquarters</h3>
            <p className="text-gray-700">Lincoln, Nebraska, USA</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-[#0F172A] mb-2">Website</h3>
            <p className="text-[#C9A23A]">www.getargus.ai</p>
          </div>
        </div>

        {/* CTA Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/about"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg text-white bg-[#0F172A] hover:bg-[#1e293b] transition-colors"
          >
            Meet Our Team
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link 
            href="/terms"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg text-[#0F172A] bg-[#F2F5F9] hover:bg-gray-200 transition-colors"
          >
            Terms of Service
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Traffic Data Group, Inc., doing business as Argus AI. All rights reserved.</p>
        </div>

      </div>
    </section>
  );
}

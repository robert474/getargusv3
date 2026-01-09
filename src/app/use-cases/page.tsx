import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';
import { Truck, Users, Navigation, Smartphone, Code, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Use Cases | Argus Nav App & API Solutions | Argus AI',
  description: 'Explore how truckers, fleet managers, and navigation app developers use Argus AI for real-time traffic intelligence and crash alerts.',
  keywords: 'traffic API use cases, truck navigation app, fleet traffic alerts, navigation app development',
  openGraph: {
    title: 'Use Cases | Argus Nav App & API Solutions',
    description: 'How truckers, fleets, and developers use Argus AI for real-time traffic intelligence.',
    type: 'website',
  },
};

export default function UseCasesPage() {
  const useCases = [
    {
      title: 'Truckers',
      description: 'Get crash alerts 10+ minutes before Waze or Google Maps. Truck-safe routing with low bridge warnings.',
      icon: <Truck className="w-8 h-8" />,
      href: '/use-cases/truckers',
      cta: 'Get the App',
      ctaIcon: <Smartphone className="w-4 h-4" />,
      color: 'bg-[#7FB7FF]',
      features: ['AI crash detection in <10 sec', 'Low bridge warnings', 'Truck-specific routing'],
    },
    {
      title: 'Fleet Managers',
      description: 'Give your entire fleet real-time traffic intelligence. Reduce delays, save fuel, improve on-time delivery.',
      icon: <Users className="w-8 h-8" />,
      href: '/use-cases/fleet-managers',
      cta: 'App + API',
      ctaIcon: <ArrowRight className="w-4 h-4" />,
      color: 'bg-[#C9A23A]',
      features: ['Fleet-wide alerts', 'API integration', 'ROI tracking'],
    },
    {
      title: 'Navigation App Developers',
      description: 'Add real-time incident detection to your app. Sub-10-second alerts via REST API with webhook support.',
      icon: <Navigation className="w-8 h-8" />,
      href: '/use-cases/navigation-apps',
      cta: 'View API Docs',
      ctaIcon: <Code className="w-4 h-4" />,
      color: 'bg-[#0F172A]',
      features: ['REST API', 'Webhook alerts', '99.9% uptime SLA'],
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-[#0F172A] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block bg-[#C9A23A]/20 text-[#C9A23A] text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Use Cases
              </span>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Real-Time Traffic Intelligence for{' '}
                <span className="text-[#C9A23A]">Every Use Case</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Whether you&apos;re a trucker avoiding crashes, a fleet manager reducing delays,
                or a developer building the next great navigation app—Argus AI has a solution for you.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <Link
                  key={index}
                  href={useCase.href}
                  className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-[#C9A23A] transition-all duration-300 overflow-hidden hover:shadow-xl"
                >
                  <div className={`${useCase.color} p-6 text-white`}>
                    <div className="flex items-center justify-between">
                      {useCase.icon}
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                    </div>
                    <h2 className="text-2xl font-bold mt-4">{useCase.title}</h2>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{useCase.description}</p>

                    <ul className="space-y-2 mb-6">
                      {useCase.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-[#C9A23A] rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 text-[#0F172A] font-semibold group-hover:text-[#C9A23A] transition-colors">
                      {useCase.ctaIcon}
                      {useCase.cta}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-[#F2F5F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F172A] text-center mb-12">
              Choose Your Path
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* App Path */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#7FB7FF]/20 rounded-xl flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-[#7FB7FF]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A]">I&apos;m a Driver</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Get the Argus Nav App for real-time crash alerts and truck-safe navigation.
                </p>
                <Link
                  href="/solutions/app"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#7FB7FF] text-[#0F172A] rounded-lg font-semibold hover:bg-[#A5CEFF] transition-colors"
                >
                  <Smartphone className="w-4 h-4" />
                  Join App Waiting List
                </Link>
              </div>

              {/* API Path */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#C9A23A]/20 rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-[#C9A23A]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A]">I&apos;m a Developer</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Integrate real-time traffic incident detection into your app or platform.
                </p>
                <Link
                  href="/developer/api"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A23A] text-[#0F172A] rounded-lg font-semibold hover:bg-[#E7C873] transition-colors"
                >
                  <Code className="w-4 h-4" />
                  View API Documentation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0F172A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Not Sure Which Solution Is Right for You?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Talk to our team and we&apos;ll help you find the best fit.
            </p>
            <Link
              href="/company/contact"
              className="inline-flex items-center px-8 py-4 bg-[#C9A23A] text-[#0F172A] rounded-lg font-bold hover:bg-[#E7C873] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

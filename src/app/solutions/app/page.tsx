'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/header';
import Footer from '../../components/footer';
import {
  AlertTriangle,
  Navigation,
  Gauge,
  Shield,
  Clock,
  MapPin,
  Check,
  ChevronDown,
  Smartphone,
  Zap,
  Eye,
  Route
} from 'lucide-react';

export default function AppLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Crash Alerts in Seconds",
      description: "Get notified about accidents ahead before traffic apps even detect them. Our AI spots incidents from DOT cameras in under 10 seconds."
    },
    {
      icon: <Route className="w-8 h-8" />,
      title: "Truck-Safe Routes",
      description: "Routes built for your rig. We know your height, weight, and cargo—so you never get sent down a road you can't take."
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Low Bridge Warnings",
      description: "Real-time clearance alerts before you're committed. Know about that 11'6\" bridge before it's too late."
    },
    {
      icon: <Navigation className="w-8 h-8" />,
      title: "Congestion Avoidance",
      description: "See slowdowns forming ahead and reroute automatically. Stop sitting in traffic that you could have avoided."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "HazMat Compliant",
      description: "Automatic route compliance for hazardous materials. We handle the restrictions so you can focus on driving."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Weigh Stations & Parking",
      description: "Know which weigh stations are open and find truck stops along your route. Plan your breaks without the guesswork."
    }
  ];

  const painPoints = [
    {
      problem: "Stuck behind a crash for 2 hours",
      solution: "Get alerts 10+ minutes before other apps"
    },
    {
      problem: "Hit a low bridge, $50K damage",
      solution: "Clearance warnings on every route"
    },
    {
      problem: "Waze sent you down a residential street",
      solution: "Routes designed for commercial trucks"
    },
    {
      problem: "Waze routed you to a closed weigh station",
      solution: "Current weigh station status on your route"
    }
  ];

  const faqs = [
    {
      question: "How is this different from Google Maps or Waze?",
      answer: "Those apps are built for cars. They don't know your truck's height, weight, or cargo type. They'll happily send you under a low bridge or down a road with weight restrictions. Argus Nav is built specifically for commercial trucks—and our crash alerts are 10x faster because we use AI to detect incidents from traffic cameras, not crowdsourced reports."
    },
    {
      question: "How do you detect crashes so fast?",
      answer: "We use computer vision AI to analyze thousands of DOT traffic cameras in real-time. When our system spots an incident, you get an alert in under 10 seconds. Traditional apps wait for users to report problems—which can take 10-15 minutes or longer."
    },
    {
      question: "What happens after my free trial?",
      answer: "After your 7-day free trial, it's $7/month. No contracts, cancel anytime. Most drivers tell us they save more than that in fuel and time on their first avoided traffic jam."
    },
    {
      question: "Does it work with my ELD/telematics?",
      answer: "Argus Nav works as a standalone app—no integration required. Just download, enter your truck specs, and start driving smarter."
    },
    {
      question: "What areas do you cover?",
      answer: "We have nationwide coverage across all major US metros and interstates. We're constantly expanding our camera network and traffic intelligence."
    }
  ];

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section - PLG Focus */}
        <section className="relative bg-[#0F172A] overflow-hidden">
          {/* Background gradient effects */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7FB7FF] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C9A23A] rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Copy */}
              <div>
                <div className="inline-flex items-center gap-2 bg-[#C9A23A]/20 text-[#C9A23A] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Clock className="w-4 h-4" />
                  Coming Soon
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Know About That Crash{' '}
                  <span className="text-[#C9A23A]">Before Anyone Else</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Argus Nav alerts you to accidents, slowdowns, and road hazards
                  <span className="text-white font-semibold"> 10+ minutes before Waze or Google Maps</span>.
                  Built for truckers who are tired of sitting in traffic they could have avoided.
                </p>

                {/* Value Props */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Check className="w-5 h-5 text-[#C9A23A]" />
                    <span>7-day free trial</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Check className="w-5 h-5 text-[#C9A23A]" />
                    <span>Then just $7/month</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Check className="w-5 h-5 text-[#C9A23A]" />
                    <span>Cancel anytime</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#notify"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#7FB7FF] text-[#0F172A] rounded-lg text-lg font-bold hover:bg-[#A5CEFF] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <Smartphone className="w-5 h-5 mr-2" />
                    Join the Waiting List
                  </Link>
                  <Link
                    href="#how-it-works"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-lg text-lg font-semibold hover:border-white hover:bg-white/5 transition-all duration-200"
                  >
                    See How It Works
                  </Link>
                </div>

                {/* Social Proof */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-6">
                    <div>
                      <div className="text-3xl font-bold text-white">50+</div>
                      <div className="text-sm text-gray-400">Metro Areas</div>
                    </div>
                    <div className="w-px h-12 bg-white/20"></div>
                    <div>
                      <div className="text-3xl font-bold text-white">40K+</div>
                      <div className="text-sm text-gray-400">Traffic Cameras</div>
                    </div>
                    <div className="w-px h-12 bg-white/20"></div>
                    <div>
                      <div className="text-3xl font-bold text-white">&lt;10s</div>
                      <div className="text-sm text-gray-400">Alert Time</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - App Preview Mockup */}
              <div className="relative">
                <div className="relative mx-auto w-72 md:w-80">
                  {/* Phone frame mockup */}
                  <div className="relative bg-[#1e293b] rounded-[3rem] p-3 shadow-2xl border border-white/10">
                    <div className="bg-[#0F172A] rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                      {/* App screen content */}
                      <div className="p-4 h-full flex flex-col">
                        {/* Status bar mockup */}
                        <div className="flex justify-between items-center text-white/60 text-xs mb-4">
                          <span>9:41</span>
                          <div className="flex gap-1">
                            <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                          </div>
                        </div>

                        {/* App header */}
                        <div className="text-center mb-4">
                          <div className="text-[#C9A23A] font-bold text-lg">ARGUS NAV</div>
                          <div className="text-white/60 text-xs">Route Active</div>
                        </div>

                        {/* Alert card */}
                        <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-3 mb-4">
                          <div className="flex items-center gap-2 mb-1">
                            <AlertTriangle className="w-4 h-4 text-red-400" />
                            <span className="text-red-400 font-semibold text-sm">CRASH AHEAD</span>
                          </div>
                          <p className="text-white text-xs">I-80 W at Exit 42 - 3.2 mi ahead</p>
                          <p className="text-white/60 text-xs mt-1">Detected 8 seconds ago</p>
                        </div>

                        {/* Route info */}
                        <div className="bg-white/5 rounded-xl p-3 mb-4 flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-white/60 text-xs">Current Route</span>
                            <span className="text-[#7FB7FF] text-xs font-semibold">Rerouting...</span>
                          </div>
                          <div className="text-white font-bold text-2xl mb-1">2:45</div>
                          <div className="text-white/60 text-xs">156 mi remaining</div>

                          {/* Mini route preview */}
                          <div className="mt-3 h-16 bg-[#0F172A] rounded-lg flex items-center justify-center">
                            <Route className="w-8 h-8 text-[#7FB7FF]/40" />
                          </div>
                        </div>

                        {/* Bottom stats */}
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="bg-white/5 rounded-lg p-2">
                            <div className="text-white font-bold text-sm">13&apos;6&quot;</div>
                            <div className="text-white/40 text-xs">Clearance</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-2">
                            <div className="text-white font-bold text-sm">45T</div>
                            <div className="text-white/40 text-xs">Weight</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-2">
                            <div className="text-[#C9A23A] font-bold text-sm">OK</div>
                            <div className="text-white/40 text-xs">HazMat</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#C9A23A]/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#7FB7FF]/20 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-16 md:py-24 bg-[#F2F5F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                Sound Familiar?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Every trucker has these stories. Argus Nav makes sure they don&apos;t happen again.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {painPoints.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-semibold text-[#0F172A] mb-2">
                        &quot;{item.problem}&quot;
                      </p>
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <p className="text-gray-600">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                How We Beat Other Apps by 10+ Minutes
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                While other apps wait for someone to report a crash, we&apos;re already alerting you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#7FB7FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-[#7FB7FF]" />
                </div>
                <div className="text-5xl font-bold text-[#0F172A] mb-2">1</div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">AI Watches Traffic Cameras</h3>
                <p className="text-gray-600">
                  Our computer vision monitors 40,000+ DOT cameras 24/7, analyzing every frame for incidents.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#C9A23A]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-[#C9A23A]" />
                </div>
                <div className="text-5xl font-bold text-[#0F172A] mb-2">2</div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Instant Detection</h3>
                <p className="text-gray-600">
                  When we spot a crash, slowdown, or hazard, we verify it in under 10 seconds—no human reports needed.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Navigation className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-5xl font-bold text-[#0F172A] mb-2">3</div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">You Get Rerouted First</h3>
                <p className="text-gray-600">
                  Before traffic builds up, before Waze knows, you&apos;re already on an alternate route.
                </p>
              </div>
            </div>

            {/* Comparison */}
            <div className="mt-16 bg-[#0F172A] rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Other Navigation Apps</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-400">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      Wait for users to report incidents
                    </li>
                    <li className="flex items-center gap-3 text-gray-400">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      10-15+ minute delay on crash alerts
                    </li>
                    <li className="flex items-center gap-3 text-gray-400">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      Built for cars, not trucks
                    </li>
                    <li className="flex items-center gap-3 text-gray-400">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      No clearance or weight awareness
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#C9A23A] mb-4">Argus Nav</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-white">
                      <Check className="w-5 h-5 text-[#C9A23A]" />
                      AI detects incidents from cameras
                    </li>
                    <li className="flex items-center gap-3 text-white">
                      <Check className="w-5 h-5 text-[#C9A23A]" />
                      Alerts in under 10 seconds
                    </li>
                    <li className="flex items-center gap-3 text-white">
                      <Check className="w-5 h-5 text-[#C9A23A]" />
                      Built specifically for commercial trucks
                    </li>
                    <li className="flex items-center gap-3 text-white">
                      <Check className="w-5 h-5 text-[#C9A23A]" />
                      Height, weight, HazMat routing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24 bg-[#F2F5F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                Everything a Trucker Needs
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                One app that actually understands what it&apos;s like behind the wheel of a big rig.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-[#7FB7FF]/20 rounded-xl flex items-center justify-center mb-4 text-[#7FB7FF]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                Simple, Fair Pricing
              </h2>
              <p className="text-xl text-gray-600">
                Try it free for 7 days. One avoided traffic jam pays for months.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border-2 border-[#7FB7FF] overflow-hidden">
              <div className="bg-[#7FB7FF] py-3 text-center">
                <span className="text-[#0F172A] font-semibold">MOST POPULAR</span>
              </div>
              <div className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-[#0F172A] mb-2">
                    $7<span className="text-2xl font-normal text-gray-500">/month</span>
                  </div>
                  <p className="text-gray-600">after 7-day free trial</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Real-time crash & slowdown alerts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Truck-specific routing (height, weight, HazMat)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Low bridge & clearance warnings</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Weigh station status info</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Nationwide coverage (50+ metros)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Cancel anytime—no contracts</span>
                  </li>
                </ul>

                <Link
                  href="#notify"
                  className="block w-full text-center px-8 py-4 bg-[#0F172A] text-white rounded-lg text-lg font-bold hover:bg-[#1e293b] transition-colors"
                >
                  Join Waiting List for Free Trial
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-[#F2F5F9]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                Questions? We&apos;ve Got Answers
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-[#0F172A] pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Email Capture */}
        <section id="notify" className="py-16 md:py-24 bg-[#0F172A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-[#C9A23A]/20 text-[#C9A23A] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Clock className="w-4 h-4" />
              Coming Soon
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join the Waiting List
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be the first to know when Argus Nav launches.
              Early access members get their first month free.
            </p>

            {/* Email signup box */}
            <div className="max-w-lg mx-auto bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20">
              <form
                action="https://formsubmit.co/hello@getargus.ai"
                method="POST"
                className="flex flex-col sm:flex-row gap-4"
              >
                <input type="hidden" name="_subject" value="Argus Nav Waitlist Signup" />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-lg bg-white text-[#0F172A] font-medium border-2 border-transparent focus:outline-none focus:border-[#C9A23A] placeholder-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#C9A23A] text-[#0F172A] rounded-lg font-bold hover:bg-[#E7C873] transition-colors whitespace-nowrap"
                >
                  Join Waiting List
                </button>
              </form>
            </div>

            <p className="text-gray-500 text-sm mt-4">
              No spam, ever. Just a notification when the app launches.
            </p>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-8 mt-12 pt-12 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">iOS</div>
                <div className="text-gray-500 text-sm">App Store</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Android</div>
                <div className="text-gray-500 text-sm">Google Play</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">USA</div>
                <div className="text-gray-500 text-sm">Nationwide</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

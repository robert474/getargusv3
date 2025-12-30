import Header from '../../components/header';
import Footer from '../../components/footer';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Traffic Intelligence Insights | Argus AI',
  description: 'Insights on traffic data, connected vehicles, AI video inference, and the future of roadway intelligence from the Argus AI team.',
  keywords: 'traffic data blog, connected vehicle insights, AI traffic detection, roadway data fragmentation, traffic intelligence',
  openGraph: {
    title: 'Argus AI Blog | Traffic Intelligence Insights',
    description: 'Expert insights on traffic data, connected vehicles, and the future of roadway intelligence.',
    type: 'website',
  },
};

// Blog posts data - in production this would come from a CMS or database
const blogPosts = [
  {
    slug: 'autonomous-vehicles-need-faster-traffic-data',
    title: 'Autonomous Vehicles Need Faster Traffic Data: Building the Neural Network for Roads',
    excerpt: 'The AV market is exploding toward $4.5 trillion. But vehicles can only be as smart as their data infrastructure. We need to build the data rail first.',
    date: '2024-12-20',
    readTime: '8 min read',
    category: 'Industry Perspective',
    featured: true,
    image: '/images/cars2.png',
  },
  {
    slug: 'how-engineers-solve-navigation-routing-challenges',
    title: 'How Engineers Solve Navigation and Routing Challenges with Traffic Data',
    excerpt: 'From slow rerouting to inaccurate ETAs, navigation applications face common challenges. Here\'s how engineering teams solve them with better traffic data integration.',
    date: '2024-12-17',
    readTime: '10 min read',
    category: 'Engineering',
    featured: false,
    image: '/images/incidentdashboard.png',
  },
  {
    slug: 'best-traffic-data-for-route-optimization',
    title: 'Best Traffic Data Sources for Route Optimization',
    excerpt: 'Not all traffic data is created equal. Compare latency, coverage, and accuracy of traffic data sources for improving navigation routing.',
    date: '2024-12-17',
    readTime: '8 min read',
    category: 'Technical Comparison',
    featured: false,
    image: '/images/lastmile1.png',
  },
  {
    slug: 'real-time-traffic-data-for-navigation-apps',
    title: 'Real-Time Traffic Data for Navigation Apps: What Engineers Need to Know',
    excerpt: 'Integrating real-time traffic data into navigation applications requires understanding latency requirements, data formats, and routing integration patterns.',
    date: '2024-12-17',
    readTime: '9 min read',
    category: 'Technical',
    featured: false,
    image: '/images/transportation.png',
  },
  {
    slug: 'comprehensive-traffic-data-guide-for-developers',
    title: 'Comprehensive Traffic Data Guide for Developers',
    excerpt: 'Everything you need to know about traffic data sources, integration patterns, and best practices for building routing applications with comprehensive incident coverage.',
    date: '2024-12-17',
    readTime: '12 min read',
    category: 'Developer Guide',
    featured: false,
    image: '/images/solutions.png',
  },
  {
    slug: 'new-traffic-data-sources-2024',
    title: 'New Traffic Data Sources Available in 2024-2025',
    excerpt: 'The traffic data landscape is evolving rapidly. Discover new data sources becoming available to navigation developers from edge AI to expanded sensor networks.',
    date: '2024-12-17',
    readTime: '7 min read',
    category: 'Industry Update',
    featured: false,
    image: '/images/dothero.png',
  },
  {
    slug: 'unique-traffic-data-sources-for-navigation',
    title: 'Unique Traffic Data Sources Most Navigation Apps Miss',
    excerpt: 'Most routing applications rely on GPS probes and crowdsourced reports. Here are the unique traffic data sources that provide faster detection and better accuracy.',
    date: '2024-12-17',
    readTime: '8 min read',
    category: 'Developer Guide',
    featured: false,
    image: '/images/priorityincidents.png',
  },
  {
    slug: 'siloed-traffic-data-integration-challenges',
    title: 'Siloed Traffic Data: Breaking Down Integration Barriers',
    excerpt: 'Traffic data silos create incomplete routing intelligence. Learn how data engineers can overcome telematics, DOT, and sensor data silos for comprehensive coverage.',
    date: '2024-12-17',
    readTime: '9 min read',
    category: 'Data Engineering',
    featured: false,
    image: '/images/incidentdashboard1.png',
  },
  {
    slug: 'traffic-cameras-untapped-potential-for-routing',
    title: 'Traffic Cameras: Untapped Potential for Navigation Routing',
    excerpt: 'Thousands of traffic cameras monitor roadways 24/7, yet most navigation applications ignore this visual data. Learn how AI video inference unlocks their potential.',
    date: '2024-12-17',
    readTime: '8 min read',
    category: 'Technology',
    featured: false,
    image: '/images/camera.png',
  },
  {
    slug: 'solving-fragmented-traffic-data-aggregation',
    title: 'Solving Fragmented Traffic Data Through Multi-Source Aggregation',
    excerpt: 'Why single-source traffic data fails, and how aggregating 911/PSAP, telematics, cameras, dashcams, and sensors creates comprehensive coverage.',
    date: '2024-12-17',
    readTime: '10 min read',
    category: 'Developer Guide',
    featured: false,
    image: '/images/sol.png',
  },
  {
    slug: 'untapped-dashcam-data-for-traffic-intelligence',
    title: 'Untapped Dashcam Data: The Missing Layer in Traffic Intelligence',
    excerpt: 'Millions of dashcams record roadway conditions every day, yet most of this visual data is never analyzed. Here\'s how AI is changing that equation.',
    date: '2024-12-17',
    readTime: '9 min read',
    category: 'Data Engineering',
    featured: false,
    image: '/images/cars.png',
  },
  {
    slug: 'why-connected-vehicles-wont-solve-traffic-data-fragmentation',
    title: 'Why Connected Vehicles Won\'t Solve Traffic Data Fragmentation',
    excerpt: 'Despite industry promises, connected vehicles face fundamental limitations that prevent them from providing comprehensive traffic intelligence.',
    date: '2024-12-15',
    readTime: '8 min read',
    category: 'Industry Analysis',
    featured: false,
    image: '/images/cars2.png',
  },
  {
    slug: 'hidden-cost-of-latency-in-traffic-alerts',
    title: 'The Hidden Cost of 30-Second Latency in Traffic Alerts',
    excerpt: 'When traditional traffic data sources take 30-60 seconds to detect incidents, the real cost isn\'t just inconvenience—it\'s measured in accidents and fuel waste.',
    date: '2024-12-10',
    readTime: '6 min read',
    category: 'Technical',
    featured: false,
    image: '/images/incidentdashboard.png',
  },
  {
    slug: 'how-ai-video-inference-changes-incident-detection',
    title: 'How AI Video Inference is Changing Incident Detection',
    excerpt: 'Video inference from traffic cameras and dashcams adds context that telematics cannot provide. Learn how computer vision is transforming traffic intelligence.',
    date: '2024-12-05',
    readTime: '7 min read',
    category: 'Technology',
    featured: false,
    image: '/images/camera.png',
  },
  {
    slug: 'five-sources-of-real-time-traffic-data',
    title: 'The 5 Sources of Real-Time Traffic Data (And Why You Need All of Them)',
    excerpt: 'Each traffic data source has strengths and blind spots. A developer\'s guide to why aggregating all five delivers comprehensive traffic intelligence.',
    date: '2024-12-01',
    readTime: '10 min read',
    category: 'Developer Guide',
    featured: false,
    image: '/images/traffic.png',
  },
  {
    slug: 'why-tomtom-here-apis-slow-development',
    title: 'Why Traditional Traffic APIs Slow Down Development',
    excerpt: 'Proprietary formats, complex XML schemas, and inconsistent data structures make traditional traffic APIs a developer nightmare. Learn why custom parsers waste months of engineering time.',
    date: '2024-12-30',
    readTime: '8 min read',
    category: 'Development',
    featured: false,
    image: '/images/incidentdashboard.png',
  },
  {
    slug: 'crowdsourced-traffic-data-15-minutes-late',
    title: 'Why Crowdsourced Traffic Data Is Always 15 Minutes Late',
    excerpt: 'Waze and Google Maps revolutionized navigation. But their crowdsourcing model has a fatal flaw: by the time enough users report an incident, you\'re already stuck in traffic.',
    date: '2024-12-26',
    readTime: '7 min read',
    category: 'Analysis',
    featured: false,
    image: '/images/cars.png',
  },
  {
    slug: 'hidden-cost-traffic-api-vendor-lock-in',
    title: 'The Hidden Cost of Traffic API Vendor Lock-In',
    excerpt: 'Your traffic API seems affordable today. But once you\'re integrated, switching costs make you a captive customer. Here\'s what vendor lock-in really costs.',
    date: '2024-12-22',
    readTime: '9 min read',
    category: 'Strategy',
    featured: false,
    image: '/images/sol.png',
  },
  {
    slug: 'traffic-integration-cant-keep-up-innovation',
    title: 'Why Your Traffic Integration Can\'t Keep Up With Innovation',
    excerpt: 'Dashcams, computer vision, connected vehicles, IoT sensors—new traffic data sources emerge constantly. But your architecture was designed for yesterday\'s data.',
    date: '2024-12-18',
    readTime: '8 min read',
    category: 'Architecture',
    featured: false,
    image: '/images/camera.png',
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-[#0F172A] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-4">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Traffic Intelligence Insights
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Expert analysis on traffic data, connected vehicles, AI-powered detection,
              and the future of roadway intelligence.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12 bg-[#F2F5F9]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link href={`/company/blog/${featuredPost.slug}`} className="group block">
                <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="bg-[#0F172A] p-8 md:p-12 flex flex-col justify-center">
                      <span className="inline-block bg-[#C9A23A]/20 text-[#C9A23A] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 w-fit">
                        Featured
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#C9A23A] transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-gray-300 mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Latest Articles</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, idx) => (
                <Link key={idx} href={`/company/blog/${post.slug}`} className="group">
                  <article className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                    <div className="h-40 relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs font-semibold text-[#C9A23A] uppercase tracking-wider mb-2">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-bold text-[#0F172A] mb-3 group-hover:text-[#C9A23A] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100">
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-[#0F172A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Stay Updated on Traffic Intelligence
            </h2>
            <p className="text-gray-300 mb-8">
              Get insights on traffic data, AI-powered detection, and industry trends delivered to your inbox.
            </p>
            <Link
              href="/company/contact"
              className="inline-flex items-center px-8 py-3 bg-[#C9A23A] text-white font-semibold rounded-lg hover:bg-[#E7C873] transition-colors"
            >
              Subscribe to Updates
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

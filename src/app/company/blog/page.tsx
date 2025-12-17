import Header from '../../components/header';
import Footer from '../../components/footer';
import Link from 'next/link';
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
    slug: 'why-connected-vehicles-wont-solve-traffic-data-fragmentation',
    title: 'Why Connected Vehicles Won\'t Solve Traffic Data Fragmentation',
    excerpt: 'Despite industry promises, connected vehicles face fundamental limitations that prevent them from providing comprehensive traffic intelligence. Here\'s what the data shows.',
    date: '2024-12-15',
    readTime: '8 min read',
    category: 'Industry Analysis',
    featured: true,
  },
  {
    slug: 'hidden-cost-of-latency-in-traffic-alerts',
    title: 'The Hidden Cost of 30-Second Latency in Traffic Alerts',
    excerpt: 'When traditional traffic data sources take 30-60 seconds to detect incidents, the real cost isn\'t just inconvenience—it\'s measured in accidents, fuel waste, and failed deliveries.',
    date: '2024-12-10',
    readTime: '6 min read',
    category: 'Technical',
    featured: false,
  },
  {
    slug: 'how-ai-video-inference-changes-incident-detection',
    title: 'How AI Video Inference is Changing Incident Detection',
    excerpt: 'Video inference from traffic cameras and dashcams adds context that telematics cannot provide. Learn how computer vision is transforming traffic intelligence.',
    date: '2024-12-05',
    readTime: '7 min read',
    category: 'Technology',
    featured: false,
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
                    <div className="bg-gradient-to-br from-[#C9A23A]/20 to-[#0F172A]/80 p-8 md:p-12 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-6xl md:text-8xl font-bold text-white/10">01</span>
                      </div>
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
                    <div className="h-40 bg-gradient-to-br from-[#F2F5F9] to-[#0F172A]/10 flex items-center justify-center">
                      <span className="text-4xl font-bold text-[#0F172A]/10">{String(idx + 2).padStart(2, '0')}</span>
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

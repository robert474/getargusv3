import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.getargus.ai';
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Developer section
    {
      url: `${baseUrl}/developer`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/developer/api`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/developer/data-sources`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    // Company section
    {
      url: `${baseUrl}/company/vision`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/company/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/company/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    // Performance (coming soon)
    {
      url: `${baseUrl}/performance`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    // Legal pages
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    // Industry landing pages
    {
      url: `${baseUrl}/for/fleets`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/for/rideshare-drivers`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/for/trucking`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  // Blog posts
  const blogPosts = [
    'how-engineers-solve-navigation-routing-challenges',
    'best-traffic-data-for-route-optimization',
    'real-time-traffic-data-for-navigation-apps',
    'comprehensive-traffic-data-guide-for-developers',
    'new-traffic-data-sources-2024',
    'unique-traffic-data-sources-for-navigation',
    'siloed-traffic-data-integration-challenges',
    'traffic-cameras-untapped-potential-for-routing',
    'solving-fragmented-traffic-data-aggregation',
    'untapped-dashcam-data-for-traffic-intelligence',
    'why-connected-vehicles-wont-solve-traffic-data-fragmentation',
    'hidden-cost-of-latency-in-traffic-alerts',
    'how-ai-video-inference-changes-incident-detection',
    'five-sources-of-real-time-traffic-data',
  ];

  const blogPages = blogPosts.map((slug) => ({
    url: `${baseUrl}/company/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}

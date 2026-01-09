import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Argus Nav | Fastest Traffic Navigation App for Truckers',
  description: 'Know about crashes and slowdowns 10+ minutes before Waze or Google Maps. Truck-safe routing with real-time AI-powered traffic alerts. Coming soon to iOS & Android.',
  keywords: 'trucker navigation app, truck GPS, commercial truck routing, traffic alerts for truckers, low bridge warnings, truck route planner, fleet navigation',
  openGraph: {
    title: 'Argus Nav | Fastest Traffic Navigation App for Truckers',
    description: 'Know about crashes and slowdowns 10+ minutes before Waze or Google Maps. Truck-safe routing with real-time AI-powered traffic alerts.',
    type: 'website',
    url: 'https://www.getargus.ai/solutions/app',
    images: [
      {
        url: 'https://www.getargus.ai/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Argus Nav - Fastest Traffic Navigation App for Truckers',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Argus Nav | Fastest Traffic Navigation App for Truckers',
    description: 'Know about crashes 10+ minutes before other apps. Truck-safe routing with AI-powered alerts.',
    images: ['https://www.getargus.ai/images/og-image.png'],
  },
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

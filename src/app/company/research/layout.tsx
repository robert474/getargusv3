import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research | Traffic Detection Speed Comparison | Argus AI',
  description: 'See how Argus AI detects traffic incidents in under 10 seconds vs competitors like INRIX, TomTom, Waze, and Google Maps.',
  openGraph: {
    title: 'Research | Traffic Detection Speed Comparison',
    description: 'Argus AI detects incidents in <10 sec vs 6-16 min for competitors.',
    type: 'website',
  },
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Argus AI',
  description: 'Get in touch with Argus AI. Contact us about the Argus Nav App, API integration, or partnership opportunities.',
  openGraph: {
    title: 'Contact Us | Argus AI',
    description: 'Get in touch with Argus AI for app, API, or partnership inquiries.',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

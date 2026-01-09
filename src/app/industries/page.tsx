import Industries from '@/main/industries';
import Header from '../components/header';
import Footer from '../components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries | Fleet, Rideshare & Navigation Solutions | Argus AI',
  description: 'Argus AI serves fleets, rideshare drivers, and navigation apps with real-time traffic intelligence. Get the Argus Nav App or integrate our API.',
  openGraph: {
    title: 'Industries | Fleet, Rideshare & Navigation Solutions',
    description: 'Real-time traffic intelligence for fleets, rideshare, and navigation platforms.',
    type: 'website',
  },
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <Industries />
      <Footer />
    </>
  );
}
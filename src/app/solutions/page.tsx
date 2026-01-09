import SolutionsPage from '@/main/routes/solutions';
import Header from '../components/header';
import Footer from '../components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions | Argus Nav App & Traffic API | Argus AI',
  description: 'Argus AI solutions: Get the Argus Nav App for truckers and drivers, or integrate our real-time Traffic API for your platform.',
  openGraph: {
    title: 'Solutions | Argus Nav App & Traffic API',
    description: 'Argus Nav App for drivers. Argus API for developers. Real-time traffic intelligence.',
    type: 'website',
  },
};

export default function Solutions() {
  return (
    <>
      <Header />
      <SolutionsPage />
      <Footer />
    </>
  );
}
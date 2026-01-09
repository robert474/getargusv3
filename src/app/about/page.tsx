import About from '../components/about';
import Header from '../components/header';
import Footer from '../components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Argus AI | Traffic Intelligence Company',
  description: 'Argus AI builds real-time traffic intelligence using computer vision and AI. Learn about our mission to make roads safer and navigation smarter.',
  openGraph: {
    title: 'About Argus AI | Traffic Intelligence Company',
    description: 'Argus AI builds real-time traffic intelligence using computer vision and AI.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <About />
      <Footer />
    </>
  );
}
import CorporateInfoPage from '../components/corporateinfo';
import Header from '../components/header';
import Footer from '../components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Information | Traffic Data Group, Inc.',
  description: 'Traffic Data Group, Inc. corporate information. Parent company of Argus AI, providing real-time traffic intelligence solutions.',
  openGraph: {
    title: 'Corporate Information | Traffic Data Group, Inc.',
    description: 'Traffic Data Group, Inc. corporate information and legal details.',
    type: 'website',
  },
};

export default function CorporateInfoPagePage() {
  return (
    <>
      <Header />
      <CorporateInfoPage/>
      <Footer />
    </>
  );
}
import Terms from '../components/terms';
import Header from '../components/header';
import Footer from '../components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Argus AI',
  description: 'Argus AI terms of service. Read our terms and conditions for using Argus Nav App and Argus API services.',
  openGraph: {
    title: 'Terms of Service | Argus AI',
    description: 'Terms and conditions for Argus AI services.',
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <Terms />
      <Footer />
    </>
  );
}
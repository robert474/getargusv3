import PrivacyPolicy from '../components/privacypolicy';
import Header from '../components/header';
import Footer from '../components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Argus AI',
  description: 'Argus AI privacy policy. Learn how we collect, use, and protect your data when using our traffic intelligence services.',
  openGraph: {
    title: 'Privacy Policy | Argus AI',
    description: 'How Argus AI collects, uses, and protects your data.',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}
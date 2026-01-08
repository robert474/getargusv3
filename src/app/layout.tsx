import type { Metadata } from "next";
import { Libre_Franklin, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.getargus.ai'),
  title: "Argus AI | Fastest Traffic Incident Detection API | Sub-10-Second Alerts",
  description: "Computer vision API detecting traffic incidents 5-15 minutes faster than Google Maps and Waze. Real-time crash and slowdown alerts for fleets, navigation apps, and rideshare drivers. Sub-10 second detection.",
  keywords: "traffic incident detection, fleet alerts, real-time traffic API, crash detection, slowdown alerts, navigation API, fleet telematics, rideshare traffic, computer vision traffic, incident detection API, traffic intelligence, route optimization, ETA accuracy",
  authors: [{ name: "Argus AI" }, { name: "Traffic Data Group, Inc." }],
  creator: "Traffic Data Group, Inc.",
  publisher: "Traffic Data Group, Inc.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: './', // Dynamic canonical based on current page
  },
  openGraph: {
    type: "website",
    url: "https://www.getargus.ai/",
    title: "Argus AI | Fastest Traffic Incident Detection API",
    description: "Computer vision API detecting traffic incidents 5-15 minutes faster than Google Maps. Real-time crash and slowdown alerts for fleets and navigation apps. Sub-10 second detection.",
    siteName: "Argus AI",
    locale: "en_US",
    images: [
      {
        url: "https://www.getargus.ai/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Argus AI - Real-Time Route Optimization Platform",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Argus AI | Fastest Traffic Incident Detection API",
    description: "Computer vision API detecting traffic incidents 5-15 minutes faster than Google Maps. Sub-10 second alerts for fleets and navigation apps.",
    images: ["https://www.getargus.ai/images/og-image.png"],
  },
  other: {
    "theme-color": "#C9A23A",
    "geo.region": "US-NE",
    "geo.placename": "Lincoln, Nebraska",
    "geo.position": "40.8136;-96.7026",
    "ICBM": "40.8136, -96.7026",
    "contact": "info@getargus.ai",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Argus AI",
              "legalName": "Traffic Data Group, Inc.",
              "alternateName": ["Argus Artificial Intelligence", "Traffic Data Group"],
              "url": "https://www.getargus.ai",
              "logo": "https://www.getargus.ai/images/logo-square.png",
              "image": "https://www.getargus.ai/images/logo-square.png",
              "description": "AI-powered route optimization and real-time traffic intelligence platform for ride-sharing, food delivery, and last-mile logistics. Argus AI is a product of Traffic Data Group, Inc.",
              "email": "info@getargus.ai",
              "telephone": "+1-402-205-7814",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lincoln",
                "addressRegion": "NE",
                "addressCountry": "US"
              },
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "foundingLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Lincoln",
                  "addressRegion": "NE",
                  "addressCountry": "US"
                }
              },
              "knowsAbout": [
                "Route Optimization",
                "Geospatial Analytics",
                "Machine Learning for Logistics",
                "Real-Time Mapping APIs",
                "Predictive Routing Models",
                "ETA Accuracy",
                "Last-Mile Efficiency"
              ],
              "sameAs": [
                "https://www.linkedin.com/company/getargus"
              ]
            })
          }}
        />

        {/* Software Application Schema */}
        <Script
          id="schema-software"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Argus AI Route Optimization Platform",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web-based, API",
              "description": "Real-time route optimization and traffic intelligence API for mobility platforms, food delivery services, and last-mile logistics. A product of Traffic Data Group, Inc.",
              "author": {
                "@type": "Organization",
                "name": "Traffic Data Group, Inc.",
                "alternateName": "Argus AI"
              },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "url": "https://www.getargus.ai"
              },
              "featureList": [
                "Sub-10-second incident detection",
                "Dynamic route optimization",
                "Predictive ETA accuracy",
                "Real-time traffic intelligence",
                "Machine learning routing algorithms"
              ]
            })
          }}
        />

        {/* FAQ Schema */}
        <Script
          id="schema-faq"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How does Argus AI improve route optimization for delivery fleets?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Argus AI uses computer vision and machine learning to detect traffic incidents in under 10 seconds, enabling dynamic route adjustments before congestion forms. This results in 5-15% more deliveries per hour and 20-30% fuel cost reduction."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What industries benefit most from Argus AI's technology?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our platform is optimized for ride-sharing and mobility platforms, on-demand food and grocery delivery services, and last-mile parcel logistics providers."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How accurate are Argus AI's ETA predictions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our predictive routing models use real-time traffic intelligence and machine learning to provide industry-leading ETA accuracy. We detect incidents and traffic anomalies in under 10 seconds."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the relationship between Argus AI and Traffic Data Group?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Argus AI is a product developed and operated by Traffic Data Group, Inc., a company based in Lincoln, Nebraska specializing in AI-powered traffic intelligence and route optimization solutions."
                  }
                }
              ]
            })
          }}
        />

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ENRC19VSL7"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ENRC19VSL7');
            `
          }}
        />

        {/* Reb2b Tracking Script */}
        <Script
          id="reb2b-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(key) {
                if (window.reb2b) return;
                window.reb2b = {loaded: true};
                var s = document.createElement("script");
                s.async = true;
                s.src = "https://b2bjsstore.s3.us-west-2.amazonaws.com/b/" + key + "/" + key + ".js.gz";
                document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);
              }("R6G5YHZ2Q765");
            `
          }}
        />

        {/* Apollo Tracking Script */}
        <Script
          id="apollo-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function initApollo(){
                var n=Math.random().toString(36).substring(7),
                o=document.createElement("script");
                o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n;
                o.async=true;
                o.defer=true;
                o.onload=function(){window.trackingFunctions.onLoad({appId:"69275f400db6e200156ea813"})};
                document.head.appendChild(o);
              }
              initApollo();
            `
          }}
        />

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2629488034095006');
              fbq('track', 'PageView');
            `
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2629488034095006&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

      </head>
      <body
        className={`${libreFranklin.variable} ${ibmPlexSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
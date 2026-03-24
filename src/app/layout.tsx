import type { Metadata } from "next";
import { Sora, DM_Sans, Readex_Pro } from 'next/font/google';
import "./globals.css";

const SITE_URL = 'https://abodebaz99-production.up.railway.app'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const readexPro = Readex_Pro({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700'],
  variable: '--font-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'عبدالرحمن | مهندس أنظمة وبناء أعمال',
    template: '%s | عبدالرحمن',
  },
  description: 'أحوّل الأفكار إلى أنظمة حقيقية تنمو بها الشركات. متخصص في التحول الرقمي، أتمتة العمليات، وبناء الأنظمة التقنية. +8 سنوات خبرة في +4 قطاعات.',
  keywords: [
    'عبدالرحمن',
    'مهندس أنظمة',
    'تحول رقمي',
    'أتمتة',
    'بناء أعمال',
    'مطور ويب',
    'CRM',
    'السعودية',
    'Systems Architect',
    'Digital Transformation',
    'AI Automation',
    'Business Development',
  ],
  authors: [{ name: 'عبدالرحمن' }],
  creator: 'عبدالرحمن',
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: SITE_URL,
    siteName: 'عبدالرحمن | مهندس أنظمة',
    title: 'عبدالرحمن | مهندس أنظمة وبناء أعمال',
    description: 'أحوّل الأفكار إلى أنظمة حقيقية تنمو بها الشركات. +8 سنوات خبرة في التحول الرقمي وبناء الأنظمة.',
    images: [
      {
        url: '/images/profile.jpg',
        width: 800,
        height: 600,
        alt: 'عبدالرحمن - مهندس أنظمة',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'عبدالرحمن | مهندس أنظمة وبناء أعمال',
    description: 'أحوّل الأفكار إلى أنظمة حقيقية تنمو بها الشركات.',
    images: ['/images/profile.jpg'],
  },
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
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'عبدالرحمن',
    jobTitle: 'مهندس أنظمة وبناء أعمال',
    description: 'أحوّل الأفكار إلى أنظمة حقيقية تنمو بها الشركات',
    url: SITE_URL,
    image: `${SITE_URL}/images/profile.jpg`,
    sameAs: [
      'https://www.linkedin.com/in/abdulrhman-bazarah/',
    ],
    knowsAbout: ['Digital Transformation', 'CRM Systems', 'AI Automation', 'Web Development'],
  }

  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${sora.variable} ${dmSans.variable} ${readexPro.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

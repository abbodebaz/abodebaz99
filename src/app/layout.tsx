import type { Metadata } from "next";
import { Sora, DM_Sans } from 'next/font/google';
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

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

export const metadata: Metadata = {
  title: 'Abdulrahman Bazarah — Systems Architect & Business Builder',
  description: 'I build systems that grow businesses. Specializing in digital transformation, AI automation, and operational excellence.',
  keywords: ['Systems Architect', 'Digital Transformation', 'AI Automation', 'Business Development', 'Abdulrahman Bazarah'],
  openGraph: {
    title: 'Abdulrahman Bazarah — Systems Architect',
    description: 'Building systems that grow businesses.',
    url: 'https://bazarah.dev',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${dmSans.variable} font-sans antialiased`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

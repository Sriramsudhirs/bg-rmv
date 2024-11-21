import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "sonner";
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://backgroundbegone.com'),
  title: {
    default: 'Free Background Remover | AI-Powered Image Background Removal Tool',
    template: '%s | BackgroundBegone'
  },
  description: 'Remove image backgrounds instantly with our free AI tool. Perfect for product photos, portraits, and design work. No signup required. Try our magic background eraser now!',
  keywords: ['background remover', 'remove background', 'free background removal', 'AI background eraser', 'transparent background maker', 'photo editor', 'image background remover', 'picture background remover', 'online background removal', 'free photo editor'],
  authors: [{ name: 'BackgroundBegone' }],
  creator: 'BackgroundBegone',
  publisher: 'BackgroundBegone',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Free Background Remover | AI-Powered Image Background Removal Tool',
    description: 'Remove image backgrounds instantly with our free AI tool. Perfect for product photos, portraits, and design work. No signup required.',
    url: 'https://backgroundbegone.com',
    siteName: 'BackgroundBegone',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BackgroundBegone - Free Background Removal Tool',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Background Remover | AI-Powered Image Background Removal Tool',
    description: 'Remove image backgrounds instantly with our free AI tool. Perfect for product photos, portraits, and design work. No signup required.',
    images: ['/twitter-image.jpg'],
    creator: '@backgroundbegone',
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
    canonical: 'https://backgroundbegone.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="canonical" href="https://backgroundbegone.com" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID" crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
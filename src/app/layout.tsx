import type { Metadata } from 'next';
import { Cinzel, Inter } from 'next/font/google';
import './globals.css';
import 'leaflet/dist/leaflet.css';

const cinzel = Cinzel({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HellmouthCon',
  description: 'The fan convention schedule and venue map for HellmouthCon 2026 — Torrance High School, June 13–14.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
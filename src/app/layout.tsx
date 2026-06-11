import type { Metadata } from 'next';
import { Cinzel, Inter } from 'next/font/google';
import Link from 'next/link';
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
        <footer className="border-t border-[rgba(232,48,80,0.12)] bg-[rgba(13,0,8,0.92)] px-6 py-4 text-center text-sm text-[var(--color-hellmouth-200)]">
          Copyright Hellmouth Events and{' '}
          <Link
            href="https://emscapeforge.com"
            className="text-current no-underline hover:text-current visited:text-current"
            target="_blank"
            rel="noreferrer"
          >
            Emscape Forge
          </Link>{' '}
          2026
        </footer>
      </body>
    </html>
  );
}
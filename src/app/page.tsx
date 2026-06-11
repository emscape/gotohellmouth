'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import HeaderBar from '@/components/site/HeaderBar';
import virtualProgramCover from '../../guidance/Virtual Program Cover Book - 2.jpg';

const eventStart = new Date('2026-06-13T10:00:00-07:00');

function getTimeLeft() {
  const totalMs = Math.max(0, eventStart.getTime() - Date.now());
  const totalSeconds = Math.floor(totalMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(91,0,18,0.2),transparent_28%),linear-gradient(180deg,#120008_0%,#0d0008_45%,#090006_100%)] text-[var(--color-hellmouth-50)]">
      <HeaderBar />

      <main className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl flex-col items-center justify-center px-6 py-14 text-center">
        <p className="mb-6 font-display text-xs tracking-[0.5em] text-[var(--color-crimson-400)]">
          FANDOM CHARITIES PRESENTS
        </p>

        <h1 className="mx-auto w-full max-w-xs sm:max-w-md md:max-w-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={virtualProgramCover.src}
            alt="HellmouthCon 2026 virtual program cover"
            className="h-auto w-full"
          />
        </h1>

        <p className="mt-8 text-lg text-[var(--color-hellmouth-100)] sm:text-xl">
          A Buffy the Vampire Slayer Fan Convention
        </p>

        <p className="mt-4 text-sm text-[var(--color-moon-100)] sm:text-base">
          June 13–14, 2026 · Torrance High School · Torrance, CA
        </p>

        <div className="mt-12 grid grid-cols-4 gap-4 sm:gap-8">
          {[
            ['days', timeLeft.days],
            ['hours', timeLeft.hours],
            ['minutes', timeLeft.minutes],
            ['seconds', timeLeft.seconds],
          ].map(([label, value]) => (
            <div key={label as string} className="min-w-0">
              <div className="font-display text-4xl text-[var(--color-crimson-400)] sm:text-5xl">
                {String(value).padStart(2, '0')}
              </div>
              <div className="mt-1 text-[0.65rem] uppercase tracking-[0.35em] text-[var(--color-moon-400)] sm:text-xs">
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          <Link
          href="https://www.eventeny.com/events/ticket/?id=20508"
          target="_blank"
          rel="noreferrer"
            className="rounded-xl border border-transparent bg-[var(--color-crimson-500)] px-8 py-3 text-base font-semibold text-white shadow-[0_0_24px_rgba(232,48,80,0.25)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--color-crimson-400)]"
          >
            Buy Tickets
          </Link>
          <Link
            href="/schedule"
            className="rounded-xl border border-[rgba(232,48,80,0.35)] bg-transparent px-8 py-3 text-base font-semibold text-[var(--color-hellmouth-50)] transition-colors hover:border-[var(--color-crimson-300)] hover:text-[var(--color-crimson-300)]"
          >
            View Schedule
          </Link>
        </div>
      </main>
    </div>
  );
}
"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function HeaderBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/schedule', label: 'Schedule' },
    { href: '/map', label: 'Map' },
    { href: '/my-schedule', label: 'My Schedule' },
    { href: '/', label: 'Home' },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-[rgba(232,48,80,0.12)] bg-[rgba(13,0,8,0.92)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg tracking-[0.22em] text-[var(--color-crimson-400)] transition-colors hover:text-[var(--color-crimson-300)]"
          onClick={() => setIsMenuOpen(false)}
        >
          HELLMOUTHCON
        </Link>

        <nav className="hidden flex-wrap items-center gap-6 text-sm text-[var(--color-hellmouth-200)] md:flex">
          {navItems.map(item => (
            <Link
              key={item.href + item.label}
              className="transition-colors hover:text-[var(--color-hellmouth-50)]"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
          <a
            className="rounded-full border border-[rgba(232,48,80,0.24)] px-3 py-1 text-xs text-[var(--color-hellmouth-100)] transition-colors hover:border-[var(--color-crimson-400)] hover:text-[var(--color-crimson-300)]"
            href="https://www.fandomcharities.org/hellmouthcon"
            target="_blank"
            rel="noreferrer"
          >
            Official Page
          </a>
        </nav>

        <div className="relative md:hidden">
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-site-menu"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMenuOpen(open => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(232,48,80,0.24)] text-[var(--color-hellmouth-100)] transition-colors hover:border-[var(--color-crimson-400)] hover:text-[var(--color-crimson-300)]"
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${
                  isMenuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-opacity duration-200 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${
                  isMenuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </span>
          </button>

          {isMenuOpen ? (
            <div
              id="mobile-site-menu"
              className="absolute right-0 top-[calc(100%+0.75rem)] z-30 w-60 rounded-2xl border border-[rgba(232,48,80,0.16)] bg-[rgba(23,0,16,0.98)] p-4 shadow-[0_18px_48px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            >
              <nav className="flex flex-col gap-2 text-sm text-[var(--color-hellmouth-100)]">
                {navItems.map(item => (
                  <Link
                    key={item.href + item.label + '-mobile'}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-xl px-3 py-2 transition-colors hover:bg-[rgba(232,48,80,0.08)] hover:text-[var(--color-hellmouth-50)]"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  className="mt-2 rounded-full border border-[rgba(232,48,80,0.24)] px-3 py-2 text-center text-xs text-[var(--color-hellmouth-100)] transition-colors hover:border-[var(--color-crimson-400)] hover:text-[var(--color-crimson-300)]"
                  href="https://www.fandomcharities.org/hellmouthcon"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Official Page
                </a>
              </nav>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
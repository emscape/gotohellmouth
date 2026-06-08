import Link from 'next/link';

export default function HeaderBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-[rgba(232,48,80,0.12)] bg-[rgba(13,0,8,0.92)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg tracking-[0.22em] text-[var(--color-crimson-400)] transition-colors hover:text-[var(--color-crimson-300)]"
        >
          HELLMOUTHCON
        </Link>

        <nav className="flex flex-wrap items-center gap-6 text-sm text-[var(--color-hellmouth-200)]">
          <Link className="transition-colors hover:text-[var(--color-hellmouth-50)]" href="/schedule">
            Schedule
          </Link>
          <Link className="transition-colors hover:text-[var(--color-hellmouth-50)]" href="/map">
            Map
          </Link>
          <Link className="transition-colors hover:text-[var(--color-hellmouth-50)]" href="/my-schedule">
            My Schedule
          </Link>
          <Link className="transition-colors hover:text-[var(--color-hellmouth-50)]" href="/">
            Home
          </Link>
          <a
            className="rounded-full border border-[rgba(232,48,80,0.24)] px-3 py-1 text-xs text-[var(--color-hellmouth-100)] transition-colors hover:border-[var(--color-crimson-400)] hover:text-[var(--color-crimson-300)]"
            href="https://www.fandomcharities.org/hellmouthcon"
            target="_blank"
            rel="noreferrer"
          >
            Official Page
          </a>
        </nav>
      </div>
    </header>
  );
}
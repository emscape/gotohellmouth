const albumUrl = 'https://photos.app.goo.gl/5u4QT5LoYGcqU6Cr7';
const instagramUrl = 'https://www.instagram.com/hellmouthevents';
const facebookUrl = 'https://www.facebook.com/HellmouthEvents';

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.8" className="fill-current stroke-none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M13.5 20.5v-7h2.4l.4-2.9h-2.8V8.8c0-.8.2-1.4 1.5-1.4h1.5V4.8c-.3 0-1.1-.1-2.1-.1-2 0-3.4 1.2-3.4 3.6v2h-2.3v2.9H11v7h2.5Z" />
    </svg>
  );
}

export default function CommunityLinks() {
  return (
    <section className="mt-14 border-t border-[rgba(232,48,80,0.12)] pt-6 text-center">
      <p className="mb-4 text-[0.65rem] uppercase tracking-[0.32em] text-[var(--color-moon-500)] sm:text-xs">
        Share your HellmouthCon memories
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href={albumUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[rgba(232,48,80,0.24)] px-4 py-2 text-xs font-semibold text-[var(--color-hellmouth-100)] transition-colors hover:border-[var(--color-crimson-400)] hover:text-[var(--color-crimson-300)]"
        >
          Add Photos
        </a>
        <a
          href={albumUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[rgba(232,48,80,0.24)] px-4 py-2 text-xs font-semibold text-[var(--color-hellmouth-100)] transition-colors hover:border-[var(--color-crimson-400)] hover:text-[var(--color-crimson-300)]"
        >
          View Album
        </a>
        <div className="ml-1 flex items-center gap-2">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Hellmouth Events on Instagram"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(232,48,80,0.24)] text-[var(--color-hellmouth-100)] transition-colors hover:border-[var(--color-crimson-400)] hover:text-[var(--color-crimson-300)]"
          >
            <InstagramIcon />
          </a>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Hellmouth Events on Facebook"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(232,48,80,0.24)] text-[var(--color-hellmouth-100)] transition-colors hover:border-[var(--color-crimson-400)] hover:text-[var(--color-crimson-300)]"
          >
            <FacebookIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
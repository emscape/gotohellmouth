import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, MapPin, Ticket, Crown } from 'lucide-react';
import { events } from '@/data/events';
import { rooms, guests as allGuests } from '@/data';
import { categoryLabel, categoryColors, formatEventTime, hasAdvanceTicketRequirement, cn } from '@/lib/utils';
import SaveButton from '@/components/schedule/SaveButton';

export function generateStaticParams() {
  return events
    .filter(event => event.category !== 'autograph' && !event.hidden)
    .map(e => ({ eventId: e.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ eventId: string }>;
}): Promise<Metadata> {
  const { eventId } = await params;
  const event = events.find(e => e.id === eventId);
  if (event?.category === 'autograph') {
    return {
      title: 'Event — HellmouthCon 2026',
    };
  }
  return {
    title: event ? `${event.title} — HellmouthCon 2026` : 'Event — HellmouthCon 2026',
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;
  const event = events.find(e => e.id === eventId);
  if (!event || event.category === 'autograph' || event.hidden) notFound();

  const room = rooms.find(r => r.id === event.roomId);
  const eventGuests = (event.guestIds ?? [])
    .map(id => allGuests.find(g => g.id === id))
    .filter(Boolean);
  const needsAdvanceTicket = hasAdvanceTicketRequirement(event);
  const description = event.description.trim();

  const dayLabel = event.day === 'saturday' ? 'Saturday, June 13' : 'Sunday, June 14';

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Link
        href={`/schedule?day=${event.day}`}
        className="flex items-center gap-1.5 text-sm text-[var(--color-moon-400)] hover:text-[var(--color-crimson-300)] transition-colors mb-8"
      >
        <ArrowLeft size={15} /> Back to Schedule
      </Link>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className={cn('text-xs px-2 py-0.5 rounded-full font-medium', categoryColors[event.category])}>
          {categoryLabel[event.category]}
        </span>
        {event.vipOnly && (
          <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-[var(--color-gold-700)] text-[var(--color-gold-100)]">
            <Crown size={10} /> VIP Only
          </span>
        )}
        {needsAdvanceTicket && (
          <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border border-[rgba(232,48,80,0.3)] bg-[rgba(232,48,80,0.08)] text-[var(--color-crimson-300)]">
            <Ticket size={10} /> Advance Ticket Required
          </span>
        )}
      </div>

      <h1 className="font-display text-3xl text-[var(--color-hellmouth-50)] mb-6 leading-tight">
        {event.title}
      </h1>

      {event.heroImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={event.heroImage}
          alt={event.title}
          className="w-full h-auto rounded-lg border border-[var(--border)] mb-6"
        />
      )}

      <div className="flex flex-col gap-3 mb-6 text-sm text-[var(--color-moon-200)]">
        <div className="flex items-center gap-2">
          <Clock size={15} className="text-[var(--color-moon-400)] shrink-0" />
          {dayLabel} · {formatEventTime(event)}
        </div>
        {room && (
          <div className="flex items-center gap-2">
            <MapPin size={15} className="text-[var(--color-moon-400)] shrink-0" />
            <Link
              href={`/map?room=${room.id}`}
              className="hover:text-[var(--color-crimson-300)] underline-offset-2 hover:underline transition-colors"
            >
              {event.displayLocationLabel ?? room.name}
            </Link>
          </div>
        )}
      </div>

      {needsAdvanceTicket && (
        <div className="mb-6 flex items-start gap-3 rounded-lg border border-[rgba(232,48,80,0.3)] bg-[rgba(232,48,80,0.08)] px-4 py-3 text-sm text-[var(--color-crimson-100)]">
          <Ticket size={16} className="mt-0.5 shrink-0 text-[var(--color-crimson-300)]" />
          <p>Advance ticket required for this event.</p>
        </div>
      )}

      {description && (
        <div className="text-[var(--color-hellmouth-200)] leading-relaxed mb-8 flex flex-col gap-4">
          {description.split(/\n\s*\n/).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      )}

      <SaveButton eventId={event.id} eventTitle={event.title} />

      {eventGuests.length > 0 && (
        <div className="mt-10">
          <h2 className="font-display text-sm tracking-widest uppercase text-[var(--color-moon-200)] mb-4">
            Featuring
          </h2>
          <div className="flex flex-col gap-3">
            {eventGuests.map(guest => (
              guest && (
                <Link
                  key={guest.id}
                  href={`/guests/${guest.id}`}
                  className="flex items-center gap-3 p-3 rounded-lg border border-[var(--border)] bg-[var(--card)] hover:border-[var(--color-crimson-700)] transition-colors"
                >
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-hellmouth-50)]">{guest.name}</p>
                    <p className="text-xs text-[var(--color-moon-400)]">{guest.role}</p>
                  </div>
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

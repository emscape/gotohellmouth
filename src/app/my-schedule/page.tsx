'use client';

import Link from 'next/link';
import HeaderBar from '@/components/site/HeaderBar';
import EventCard from '@/components/schedule/EventCard';
import { events } from '@/data/events';
import { rooms } from '@/data/rooms';
import { useMySchedule } from '@/hooks/useMySchedule';
import type { ConventionDay, ScheduleEvent } from '@/types';

const dayMeta: Record<ConventionDay, { label: string; date: string }> = {
  saturday: { label: 'Saturday', date: 'June 13, 2026' },
  sunday: { label: 'Sunday', date: 'June 14, 2026' },
};

const dayOrder: ConventionDay[] = ['saturday', 'sunday'];

function sortEvents(a: ScheduleEvent, b: ScheduleEvent) {
  const dayRank = dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day);
  return dayRank !== 0 ? dayRank : a.startTime.localeCompare(b.startTime);
}

export default function MySchedulePage() {
  const { savedIds, clearAll, isHydrated } = useMySchedule();

  const savedEvents = events
    .filter(event => savedIds.has(event.id))
    .sort(sortEvents);

  const hasSavedEvents = savedEvents.length > 0;

  return (
    <div className="min-h-screen bg-[var(--color-hellmouth-950)]">
      <HeaderBar />

      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
          <div>
            <h1 className="font-display text-3xl text-[var(--color-hellmouth-50)] mb-2">
              My Schedule
            </h1>
            <p className="text-sm text-[var(--color-moon-200)]">
              Saved events stay on this device. Add sessions from the schedule or event pages, then come back here to review your lineup.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/schedule"
              className="rounded border border-[var(--border)] px-4 py-2 text-sm text-[var(--color-hellmouth-100)] transition-colors hover:border-[var(--color-crimson-600)] hover:text-[var(--color-crimson-300)]"
            >
              Browse schedule
            </Link>
            <button
              onClick={clearAll}
              disabled={!hasSavedEvents || !isHydrated}
              className="rounded border border-[rgba(232,48,80,0.24)] px-4 py-2 text-sm text-[var(--color-crimson-300)] transition-colors hover:border-[var(--color-crimson-500)] hover:text-[var(--color-crimson-200)] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Clear all
            </button>
          </div>
        </div>

        {!isHydrated ? (
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-8 text-center text-sm text-[var(--color-moon-400)]">
            Loading your saved events…
          </div>
        ) : !hasSavedEvents ? (
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-6 py-10 text-center">
            <p className="font-display text-lg text-[var(--color-hellmouth-50)] mb-2">
              No saved events yet
            </p>
            <p className="text-sm text-[var(--color-moon-200)] mb-6 max-w-xl mx-auto">
              Use the bookmark button on event cards or event details to add sessions to your personal schedule on this device.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/schedule"
                className="rounded-xl bg-[var(--color-crimson-500)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-crimson-400)]"
              >
                Browse schedule
              </Link>
              <Link
                href="/map"
                className="rounded-xl border border-[rgba(232,48,80,0.3)] px-5 py-2.5 text-sm font-semibold text-[var(--color-hellmouth-50)] transition-colors hover:border-[var(--color-crimson-300)] hover:text-[var(--color-crimson-300)]"
              >
                View map
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {dayOrder.map(day => {
              const dayEvents = savedEvents.filter(event => event.day === day);
              if (dayEvents.length === 0) return null;

              return (
                <section key={day}>
                  <div className="flex items-end justify-between gap-3 mb-4">
                    <div>
                      <h2 className="font-display text-xl text-[var(--color-hellmouth-50)]">
                        {dayMeta[day].label}
                      </h2>
                      <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-moon-400)]">
                        {dayMeta[day].date}
                      </p>
                    </div>
                    <p className="text-xs text-[var(--color-moon-500)]">
                      {dayEvents.length} saved {dayEvents.length === 1 ? 'event' : 'events'}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    {dayEvents.map(event => (
                      <EventCard
                        key={event.id}
                        event={event}
                        room={rooms.find(room => room.id === event.roomId)}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
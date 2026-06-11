import type { Metadata } from 'next';
import { Suspense } from 'react';
import { events } from '@/data/events';
import { rooms } from '@/data/rooms';
import ScheduleView from '@/components/schedule/ScheduleView';
import HeaderBar from '@/components/site/HeaderBar';

export const metadata: Metadata = {
  title: 'Schedule — HellmouthCon 2026',
  description: 'Full programming schedule for HellmouthCon 2026.',
};

export default function SchedulePage() {
  const publicScheduleEvents = events.filter(event => !event.hidden);

  return (
    <div className="min-h-screen bg-[var(--color-hellmouth-950)]">
      <HeaderBar />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="font-display text-3xl text-[var(--color-hellmouth-50)] mb-2">
          Schedule
        </h1>
        <p className="text-[var(--color-moon-200)] mb-2 text-sm">
          June 13–14, 2026 · Torrance High School · All times Pacific
        </p>
        <Suspense fallback={null}>
          <ScheduleView events={publicScheduleEvents} rooms={rooms} />
        </Suspense>
      </div>
    </div>
  );
}

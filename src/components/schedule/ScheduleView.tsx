'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { ScheduleEvent, Room, ConventionDay, EventCategory } from '@/types';
import EventCard from './EventCard';
import { categoryLabel, cn } from '@/lib/utils';

const days: { value: ConventionDay; label: string; date: string }[] = [
  { value: 'saturday', label: 'Saturday', date: 'June 13' },
  { value: 'sunday', label: 'Sunday', date: 'June 14' },
];

const categoryOrder: EventCategory[] = [
  'panel',
  'fan-experience',
  'photo-op',
  'autograph',
  'workshop',
  'immersive-entertainment',
  'mixer',
  'contest',
  'vendor',
];

interface Props {
  events: ScheduleEvent[];
  rooms: Room[];
}

function parseDay(value: string | null): ConventionDay {
  return value === 'sunday' ? 'sunday' : 'saturday';
}

export default function ScheduleView({ events, rooms }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeDay, setActiveDay] = useState<ConventionDay>(() => parseDay(searchParams.get('day')));
  const [activeRoom, setActiveRoom] = useState<string>('all');
  const [activeType, setActiveType] = useState<EventCategory | 'all'>('all');

  useEffect(() => {
    const next = parseDay(searchParams.get('day'));
    setActiveDay(prev => (prev === next ? prev : next));
  }, [searchParams]);

  const handleDayChange = (day: ConventionDay) => {
    setActiveDay(day);
    const params = new URLSearchParams(searchParams.toString());
    params.set('day', day);
    router.replace(`/schedule?${params.toString()}`, { scroll: false });
  };

  const dayEvents = events.filter(e => e.day === activeDay);
  const availableCategories = categoryOrder.filter(category =>
    dayEvents.some(event => event.category === category),
  );

  useEffect(() => {
    if (activeType !== 'all' && !availableCategories.includes(activeType)) {
      setActiveType('all');
    }
  }, [activeType, availableCategories]);

  const filtered = dayEvents
    .filter(event => {
      const roomMatches = activeRoom === 'all' || event.roomId === activeRoom;
      const typeMatches = activeType === 'all' || event.category === activeType;

      return roomMatches && typeMatches;
    })
    .sort((a, b) => a.startTime.localeCompare(b.startTime) || a.title.localeCompare(b.title));

  const roomsWithEvents = rooms.filter(r =>
    events.some(e => e.roomId === r.id),
  );

  return (
    <div>
      {/* Day tabs */}
      <div className="flex gap-2 mb-6">
        {days.map(day => (
          <button
            key={day.value}
            onClick={() => handleDayChange(day.value)}
            className={cn(
              'px-5 py-2.5 rounded font-display text-xs tracking-widest uppercase transition-colors',
              activeDay === day.value
                ? 'bg-[var(--color-crimson-700)] text-white'
                : 'border border-[var(--border)] text-[var(--color-hellmouth-200)] hover:border-[var(--color-crimson-700)]',
            )}
          >
            {day.label}
            <span className="block text-[0.65rem] opacity-70 normal-case font-sans tracking-normal">
              {day.date}
            </span>
          </button>
        ))}
      </div>

      {/* Room filter */}
      <div className="flex flex-wrap gap-2 mb-3">
        <button
          onClick={() => setActiveRoom('all')}
          className={cn(
            'px-3 py-1 rounded text-xs transition-colors',
            activeRoom === 'all'
              ? 'bg-[var(--color-hellmouth-600)] text-white'
              : 'border border-[var(--border)] text-[var(--color-moon-200)] hover:border-[var(--color-hellmouth-600)]',
          )}
        >
          All Rooms
        </button>
        {roomsWithEvents.map(room => (
          <button
            key={room.id}
            onClick={() => setActiveRoom(room.id)}
            className={cn(
              'px-3 py-1 rounded text-xs transition-colors',
              activeRoom === room.id
                ? 'bg-[var(--color-hellmouth-600)] text-white'
                : 'border border-[var(--border)] text-[var(--color-moon-200)] hover:border-[var(--color-hellmouth-600)]',
            )}
          >
            {room.shortName}
          </button>
        ))}
      </div>

      {/* Type filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveType('all')}
          className={cn(
            'px-3 py-1 rounded text-xs transition-colors',
            activeType === 'all'
              ? 'bg-[var(--color-hellmouth-600)] text-white'
              : 'border border-[var(--border)] text-[var(--color-moon-200)] hover:border-[var(--color-hellmouth-600)]',
          )}
        >
          All Types
        </button>
        {availableCategories.map(category => (
          <button
            key={category}
            onClick={() => setActiveType(category)}
            className={cn(
              'px-3 py-1 rounded text-xs transition-colors',
              activeType === category
                ? 'bg-[var(--color-hellmouth-600)] text-white'
                : 'border border-[var(--border)] text-[var(--color-moon-200)] hover:border-[var(--color-hellmouth-600)]',
            )}
          >
            {categoryLabel[category]}
          </button>
        ))}
      </div>

      {/* Events */}
      {filtered.length === 0 ? (
        <p className="text-[var(--color-moon-400)] text-sm py-8 text-center">
          No events for this selection.
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map(event => (
            <EventCard
              key={event.id}
              event={event}
              room={rooms.find(r => r.id === event.roomId)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

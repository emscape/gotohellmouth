import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { EventCategory, ScheduleEvent } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'America/Los_Angeles',
  });
}

export function formatTimeRange(start: string, end: string): string {
  return `${formatTime(start)} – ${formatTime(end)}`;
}

export function formatEventTime(event: Pick<ScheduleEvent, 'category' | 'startTime' | 'endTime'>): string {
  return event.category === 'photo-op' || event.category === 'autograph'
    ? formatTime(event.startTime)
    : formatTimeRange(event.startTime, event.endTime);
}

export function hasAdvanceTicketRequirement(event: ScheduleEvent): boolean {
  return Boolean(
    event.requiresTicket
    || event.category === 'fan-experience'
    || event.heroImage?.includes('/images/specialty-tableaux/'),
  );
}

export const categoryLabel: Record<EventCategory, string> = {
  panel: 'Panel',
  workshop: 'Workshop',
  'photo-op': 'Photo Op',
  autograph: 'Autograph',
  'fan-experience': 'Fan Experience',
  contest: 'Contest',
  meetup: 'Meetup',
  vendor: 'Vendor Hall',
  mixer: 'Mixer',
};

export const categoryColors: Record<EventCategory, string> = {
  panel: 'bg-indigo-800 text-indigo-100',
  workshop: 'bg-violet-800 text-violet-100',
  'photo-op': 'bg-violet-700 text-violet-100',
  autograph: 'bg-rose-800 text-rose-100',
  'fan-experience': 'bg-indigo-900 text-indigo-100',
  contest: 'bg-amber-800 text-amber-100',
  meetup: 'bg-emerald-900 text-emerald-100',
  vendor: 'bg-amber-900 text-amber-100',
  mixer: 'bg-yellow-800 text-yellow-100',
};

export const roomAccentColors: Record<string, string> = {
  'main-auditorium': 'bg-cyan-400 text-slate-950',
  'sunnydale-mall': 'bg-amber-400 text-slate-950',
  'autograph-alley': 'bg-rose-500 text-white',
  'panel-room-a': 'bg-emerald-400 text-slate-950',
  'panel-room-b': 'bg-fuchsia-400 text-slate-950',
  'photo-op-room': 'bg-violet-400 text-white',
  'outside-photo-studio': 'bg-violet-300 text-slate-950',
  registration: 'bg-blue-400 text-slate-950',
  'school-courtyard': 'bg-lime-400 text-slate-950',
  'secondary-courtyard': 'bg-yellow-400 text-slate-950',
  'outdoor-courtyard': 'bg-green-400 text-slate-950',
  'outdoor-stage': 'bg-fuchsia-400 text-slate-950',
  'zone-b-party': 'bg-yellow-400 text-slate-950',
};

'use client';

import Link from 'next/link';
import type { Room } from '@/types';
import { cn } from '@/lib/utils';

interface Props {
  rooms: Room[];
  activeRoomId: string | null;
  onActiveRoomChange: (roomId: string | null) => void;
}

// Overlay paths traced via /calibrate over the official venue-map.png.
// If building overlays drift after the image is updated, re-run /calibrate.
const roomPaths: Record<string, string> = {
  // Building A — Little Theater / Photo Studio / Registration
  'room-panel-b':     'M 636 247 L 688 246 L 689 308 L 610 312 L 609 297 L 638 296 Z',
  'room-photo-op':    'M 636 247 L 688 246 L 689 308 L 610 312 L 609 297 L 638 296 Z',
  'room-registration':'M 636 247 L 688 246 L 689 308 L 610 312 L 609 297 L 638 296 Z',
  // Building D — Annex-Café
  'room-panel-a':     'M 159 147 L 134 169 L 246 264 L 290 218 L 275 204 L 245 232 Z',
  // Building B / Main Gym
  'room-vendor-hall': 'M 462 136 L 463 190 L 518 191 L 515 136 Z',
  'room-autograph':   'M 462 136 L 463 190 L 518 191 L 515 136 Z',
  // Zone B — Saturday Night Party
  'room-zone-b':      'M 461 189 L 447 188 L 448 230 L 502 222 L 499 188 Z',
  // Building C — Main Auditorium
  'room-auditorium':  'M 477 254 L 535 255 L 537 278 L 476 278 Z',
  // School courtyard (outdoor area near Bldg A)
  'room-school-courtyard': 'M 638 259 L 637 285 L 677 287 L 674 260 Z',
  // Zone A — Double Meat Palace (outdoor food trucks)
  'room-courtyard':   'M 519 129 L 518 170 L 607 167 L 604 127 Z',
};

// Active fill colors (shown at 50% opacity over the image)
const roomFillsActive: Record<string, string> = {
  'room-panel-b':     '#3730a3',
  'room-photo-op':    '#5b21b6',
  'room-registration':'#1e40af',
  'room-panel-a':     '#1e3a8a',
  'room-autograph':        '#9f1239',
  'room-vendor-hall':      '#92400e',
  'room-zone-b':           '#a21caf',
  'room-auditorium':       '#991b1b',
  'room-school-courtyard': '#065f46',
  'room-courtyard':        '#14532d',
};

export default function VenueMap({ rooms, activeRoomId, onActiveRoomChange }: Props) {
  const activeRoom = activeRoomId
    ? rooms.find(r => r.id === activeRoomId)
    : null;

  function toggleRoom(roomId: string) {
    onActiveRoomChange(activeRoomId === roomId ? null : roomId);
  }

  return (
    <div>
      <div className="relative rounded-lg border border-[var(--border)] overflow-hidden">
        <svg
          viewBox="0 0 890 500"
          className="w-full h-auto"
          role="img"
          aria-label="HellmouthCon venue map of Torrance High School"
        >
          {/* Official venue map as background */}
          <image
            href="/venue-map.png"
            x="0"
            y="0"
            width="890"
            height="500"
            preserveAspectRatio="xMidYMid meet"
          />

          {/* Clickable building overlays */}
          {rooms.map(room => {
            const path = roomPaths[room.svgPathId];
            if (!path) return null;

            const isActive = activeRoomId === room.id;

            return (
              <path
                key={room.id}
                d={path}
                fill={roomFillsActive[room.svgPathId] ?? '#7f1d1d'}
                fillOpacity={isActive ? 0.5 : 0.15}
                stroke={isActive ? '#e83050' : '#e8305080'}
                strokeWidth={isActive ? 2.5 : 1.5}
                strokeDasharray={isActive ? undefined : '5 3'}
                className="cursor-pointer transition-all duration-150"
                onClick={() => toggleRoom(room.id)}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleRoom(room.id);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={room.name}
                aria-pressed={isActive}
              />
            );
          })}
        </svg>
      </div>

      {/* Room detail card */}
      {activeRoom && (
        <div className="mt-4 p-5 rounded-lg border border-[var(--color-crimson-700)] bg-[var(--card)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-display text-lg text-[var(--color-hellmouth-50)] mb-1">
                {activeRoom.name}
              </h2>
              <p className="text-sm text-[var(--color-hellmouth-200)] mb-3">
                {activeRoom.description}
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-[var(--color-moon-400)]">
                {activeRoom.capacity && (
                  <span>Capacity: ~{activeRoom.capacity}</span>
                )}
                <span className="capitalize">{activeRoom.floor} floor</span>
              </div>
            </div>
            <Link
              href={`/schedule?room=${activeRoom.id}`}
              className="shrink-0 text-xs text-[var(--color-crimson-400)] hover:text-[var(--color-crimson-300)] transition-colors whitespace-nowrap"
            >
              View events →
            </Link>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="mt-6">
        <p className="text-xs text-[var(--color-moon-400)] mb-3 font-display tracking-widest uppercase">
          Rooms
        </p>
        <div className="flex flex-wrap gap-3">
          {rooms.map(room => (
            <button
              key={room.id}
              onClick={() => toggleRoom(room.id)}
              className={cn(
                'flex items-center gap-1.5 text-xs px-3 py-1.5 rounded border transition-colors',
                activeRoomId === room.id
                  ? 'border-[var(--color-crimson-600)] text-[var(--color-hellmouth-50)]'
                  : 'border-[var(--border)] text-[var(--color-moon-200)] hover:border-[var(--color-crimson-700)]',
              )}
            >
              <span className={cn('w-2 h-2 rounded-full', room.color)} />
              {room.shortName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

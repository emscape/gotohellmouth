'use client';

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'hellmouthcon-2026-my-schedule';
const SCHEDULE_CHANGE_EVENT = 'hellmouthcon-my-schedule-change';

function readSavedIds() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? new Set(JSON.parse(stored) as string[]) : new Set<string>();
  } catch {
    return new Set<string>();
  }
}

function syncSavedIds(setSavedIds: (value: Set<string>) => void) {
  setSavedIds(readSavedIds());
}

export function useMySchedule() {
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    syncSavedIds(setSavedIds);
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    const onScheduleChange = () => syncSavedIds(setSavedIds);
    window.addEventListener(SCHEDULE_CHANGE_EVENT, onScheduleChange);
    return () => window.removeEventListener(SCHEDULE_CHANGE_EVENT, onScheduleChange);
  }, []);

  // Cross-tab sync
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          setSavedIds(new Set(JSON.parse(e.newValue) as string[]));
        } catch {
          // ignore
        }
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const toggleSaved = useCallback((eventId: string) => {
    setSavedIds(prev => {
      const next = new Set(prev);
      if (next.has(eventId)) {
        next.delete(eventId);
      } else {
        next.add(eventId);
      }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      } catch {
        // ignore
      }
      window.dispatchEvent(new Event(SCHEDULE_CHANGE_EVENT));
      return next;
    });
  }, []);

  const isSaved = useCallback(
    (eventId: string) => savedIds.has(eventId),
    [savedIds],
  );

  const clearAll = useCallback(() => {
    setSavedIds(new Set());
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    window.dispatchEvent(new Event(SCHEDULE_CHANGE_EVENT));
  }, []);

  return { savedIds, toggleSaved, isSaved, isHydrated, clearAll };
}

import type { ScheduleEvent } from '@/types';
import { importedDescriptions } from './descriptions';

export function csvEvent(
  id: string,
  title: string,
  startTime: string,
  endTime: string,
  roomId: string,
  category: ScheduleEvent['category'],
  description = importedDescriptions[id] ?? '',
): ScheduleEvent {
  return { id, title, description, day: 'saturday', startTime, endTime, roomId, category };
}

export function sundayCsvEvent(
  id: string,
  title: string,
  startTime: string,
  endTime: string,
  roomId: string,
  category: ScheduleEvent['category'],
  description = importedDescriptions[id] ?? '',
): ScheduleEvent {
  return { id, title, description, day: 'sunday', startTime, endTime, roomId, category };
}
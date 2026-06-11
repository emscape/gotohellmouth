import type { ScheduleEvent } from '@/types';
import { saturdayCsvEvents } from './events/saturday';
import { sundayCsvEvents } from './events/sunday';

export const events: ScheduleEvent[] = [...saturdayCsvEvents, ...sundayCsvEvents];
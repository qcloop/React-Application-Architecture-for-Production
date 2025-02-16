import { Entity } from '@/types';

export type Job = Entity & {
  organizationId: string;
  position: string;
  info: string;
  location: string;
  department: string;
};

export type SaveJobData = Pick<
  Job,
  'position' | 'department' | 'location' | 'info'
>;

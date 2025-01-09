import { useMutation } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import { queryClient } from '@/lib/react-query';

import { Job, SaveJobData } from '../types';

type SaveJobOptions = {
  data: SaveJobData;
};

export const saveJob = ({
  data,
}: SaveJobOptions): Promise<Job> => {
  return apiClient.post(`/jobs`, data);
};

type UseSaveJobOptions = {
  onSuccess?: (job: Job) => void;
};

export const useSaveJob = ({
  onSuccess,
}: UseSaveJobOptions = {}) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: saveJob,
    onSuccess: (job) => {
      queryClient.invalidateQueries(['jobs']);
      onSuccess?.(job);
    },
  });

  return { submit, isLoading };
};

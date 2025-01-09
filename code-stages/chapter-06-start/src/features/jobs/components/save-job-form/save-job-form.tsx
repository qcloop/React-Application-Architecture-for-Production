import { Box, Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/button';
import { InputField } from '@/components/form';

import { useSaveJob } from '../../api/save-job';
import { Job, SaveJobData } from '../../types';
import React from 'react';

export type SaveJobFormProps = {
  job?: Job;
  onSuccess: () => void;
};

export const SaveJobForm = ({
  job,
  onSuccess,
}: SaveJobFormProps) => {
  const saveJob = useSaveJob({ onSuccess });

  const { register, handleSubmit, formState } =
    useForm<SaveJobData>();

  const onSubmit = (data: SaveJobData) => {
    saveJob.submit({ data });
  };

  return (
    <Box w="full">
      <Stack
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        w="full"
        spacing="8"
      >
        <InputField
          label="Position"
          defaultValue={job?.position}
          {...register('position', {
            required: 'Required',
          })}
          error={formState.errors['position']}
        />
        <InputField
          label="Department"
          defaultValue={job?.department}
          {...register('department', {
            required: 'Required',
          })}
          error={formState.errors['department']}
        />

        <InputField
          label="Location"
          defaultValue={job?.location}
          {...register('location', {
            required: 'Required',
          })}
          error={formState.errors['location']}
        />

        <InputField
          type="textarea"
          label="Info"
          defaultValue={job?.info}
          {...register('info', {
            required: 'Required',
          })}
          error={formState.errors['info']}
        />

        <Button
          isDisabled={saveJob.isLoading}
          isLoading={saveJob.isLoading}
          type="submit"
        >
          Save
        </Button>
      </Stack>
    </Box>
  );
};

import { Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { Loading } from '@/components/loading';
import { NotFound } from '@/components/not-found';
import { Seo } from '@/components/seo';
import { SaveJobForm, useJob } from '@/features/jobs';
import { DashboardLayout } from '@/layouts/dashboard-layout';
import React from 'react';

const DashboardSaveJobPage = () => {
  const router = useRouter();

  const onSuccess = () => {
    router.push(`/dashboard/jobs`);
  };

  const jobId = router.query.jobId as string;

  const job = useJob({ jobId });

  if (job.isLoading) {
    return <Loading />;
  }

  if (!job.data) {
    return <NotFound />;
  }

  return (
    <>
      <Seo title="Save Job" />
      <Heading mb="8">Save Job</Heading>
      <SaveJobForm job={job.data} onSuccess={onSuccess} />
    </>
  );
};

DashboardSaveJobPage.getLayout = function getLayout(
  page: ReactElement
) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardSaveJobPage;

import {
  Heading,
  VStack,
  Text,
  HStack,
  Box,
} from '@chakra-ui/react';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { Content } from '@/components/content';
import { Link } from '@/components/link';
import { Job } from '../../types';

export const DashboardJobInfo = ({
  job,
}: {
  job: Job;
}) => {
  return (
    <VStack>
      <VStack pt="16" pb="4" spacing="8">
        <Heading size="2xl">{job.position}</Heading>
        <HStack spacing="12">
          <Text>{job.department}</Text>
          <Text>{job.location}</Text>
          <Link
            icon={<PlusSquareIcon />}
            variant="solid"
            href={`/dashboard/jobs/save/${job.id}`}
          >
            Edit Job
          </Link>
        </HStack>
      </VStack>
      <Box w="full">
        <Content>{job.info}</Content>
      </Box>
    </VStack>
  );
};

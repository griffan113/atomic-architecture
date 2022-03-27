import React from 'react';
import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  theme,
  useColorMode,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

import { Header, Sidebar } from '@/components/ui/organisms';

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2022-03-26T15:23:00.000Z',
      '2022-03-27T15:23:00.000Z',
      '2022-03-28T15:23:00.000Z',
      '2022-03-29T15:23:00.000Z',
      '2022-03-30T15:23:00.000Z',
      '2022-03-31T15:23:00.000Z',
      '2022-04-01T15:23:00.000Z',
      '2022-04-02T15:23:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [
  {
    name: 'Series One',
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
];

export const DashboardTemplate: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box
            pb="4"
            p="8"
            bg={colorMode === 'dark' ? 'gray.800' : 'gray.50'}
            borderRadius={8}
          >
            <Text fontSize="large" mb="4">
              Inscritos da Semana
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box
            p="8"
            bg={colorMode === 'dark' ? 'gray.800' : 'gray.50'}
            borderRadius={8}
          >
            <Text fontSize="large" mb="4">
              Taxa de Abertura
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

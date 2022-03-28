import type { NextPage } from 'next';
import Head from 'next/head';

import { DashboardTemplate } from '@/components/templates';

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard | dashgo.</title>
      </Head>
      <DashboardTemplate />
    </>
  );
};

export default Dashboard;

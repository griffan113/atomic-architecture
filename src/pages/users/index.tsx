import type { NextPage } from 'next';
import Head from 'next/head';

import { UsersTemplate } from '@/components/templates';

const Users: NextPage = () => {
  return (
    <>
      <Head>
        <title>Users | dashgo.</title>
      </Head>
      <UsersTemplate />
    </>
  );
};

export default Users;

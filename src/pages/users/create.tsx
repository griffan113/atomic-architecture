import type { NextPage } from 'next';
import Head from 'next/head';

import { CreateUserTemplate } from '@/components/templates';

const CreateUser: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create user | dashgo.</title>
      </Head>
      <CreateUserTemplate />
    </>
  );
};

export default CreateUser;

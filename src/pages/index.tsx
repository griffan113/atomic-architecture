import type { NextPage } from 'next';
import Head from 'next/head';

import { LoginTemplate } from '@/src/components/templates';

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign In | dashgo.</title>
      </Head>
      <LoginTemplate />
    </>
  );
};

export default Login;

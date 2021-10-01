import Head from 'next/head';
import Layout from 'src/components/Layout';
import Profile from 'src/components/Profile';
import { Divider } from '@chakra-ui/layout';
import Jobs from 'src/components/Jobs';

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Nascimento</title>
      </Head>
      <Layout>
        <Profile />
        <Divider orientation="horizontal" />
        <Jobs/>
      </Layout>
    </>
  )
}

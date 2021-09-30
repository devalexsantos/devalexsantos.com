import Head from 'next/head';
import Layout from 'src/components/Layout';
import Profile from 'src/components/Profile';

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Nascimento</title>
      </Head>
      <Layout>
        <Profile />
      </Layout>
    </>
  )
}

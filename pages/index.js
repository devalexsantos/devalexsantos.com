import Head from "next/head";
import Layout from "src/components/Layout";
import Profile from "src/components/Profile";
import { Divider } from "@chakra-ui/layout";
import Jobs from "src/components/Jobs";
import { motion } from "framer-motion";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Nascimento</title>
      </Head>
      <Layout>
        <Profile />
        <Divider orientation="horizontal" />
        <Jobs />
      </Layout>
    </>
  );
}

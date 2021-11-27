import Link from "next/link";
import Head from "next/head";

import { getSortedPostsData } from "../lib/posts";
import { Header, P1 } from "../components/index";
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div style={{ width: "100%", height: "100%", padding: 0 }}>
      <Head>
        <title> Shawn's Homepage </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <P1 />
    </div>
  );
}

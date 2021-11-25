import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";

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
    <div className="container">
      <Link href="/posts/first-post">
        <h3>Go to post</h3>
      </Link>
    </div>
  );
}

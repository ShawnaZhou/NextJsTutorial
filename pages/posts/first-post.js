import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from '../../components/layout';

const FirstPost = ({allPostsData}) => {
  return (
    <Layout home>
      <h1>First Post</h1>
      <Image src="/images/home.jpg" height={150} width={150} alt="bg" />
      <Link href="/"> Back To Home</Link>
      <style jsx>
        {`
          h1 {
            font-size: 42px;
            color:#fff;
          }
          div{
            background-color:#353535;
          }
        `}
      </style>
      
    </Layout>
  );
};

export default FirstPost;

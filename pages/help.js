import { Fragment } from "react";
import PostContent from "../components/help/post-content";
import { getPostData } from "../lib/post-util";
import HeaderResults from "../components/results/header-results";
import Head from "next/head";

export default function HelpPage({post}) {

  return <Fragment>
    <Head>
      <title>README of Tax Calculator</title>
      <meta name="description" content={`Essential information on the Tax Calculator project.`}/>
    </Head>
    <HeaderResults />
    <PostContent {...post}/>
  </Fragment>;
}

export async function getStaticProps() {
  const postData = getPostData('README');
  
  return {
    props: {
      post: postData
    },
    revalidate: 600
  }
}

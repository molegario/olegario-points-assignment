import { Fragment } from "react";
import PostContent from "../components/help/post-content";
import { getPostData } from "../lib/post-util";
import HeaderResults from "../components/results/header-results";

export default function HelpPage({post}) {

  return <Fragment>
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

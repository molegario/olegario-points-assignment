import Head from 'next/head';
import { Fragment } from 'react';
import NotFoundPanel from '../components/notfound/404panel';

export default function NotFoundPage() {
  return <Fragment>
    <Head>
      <title>404 - unsupported route</title>
      <meta name="description" content={`All that is gold does not glitter, Not all those who wander are lost`}/>
    </Head>
    <NotFoundPanel />
  </Fragment>;
}

import Head from 'next/head';
import classes from './404.module.css';
import Link from "next/link";

export default function NotFoundPage() {
  return <div className={classes.alert}>
    <Head>
      <title>404 - unsupported route</title>
      <meta name="description" content={`All that is gold does not glitter, Not all those who wander are lost`}/>
    </Head>
    <h1>404</h1>
    <p>
      “All that is gold does not glitter,
      Not all those who wander are lost;
      The old that is strong does not wither,
      Deep roots are not reached by the frost.”
    </p>
    <Link href='/'>another time?</Link>
  </div>;
}

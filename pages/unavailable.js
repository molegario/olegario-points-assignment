import { Fragment } from "react";
import Head from 'next/head'
import UnavailablePanel from "../components/unavailable/unavailable-panel";

export default function UnavailablePage() {
  return <Fragment>
    <Head>
      <title>503 - rates service unavailable</title>
      <meta name="description" content={`Rates service is currently unreachable`}/>
    </Head>
    <UnavailablePanel />
  </Fragment>;
}
import { useRouter } from "next/router";
import { Fragment } from "react";
import Hero from "../components/home/Hero";
import YearSelector from "../components/home/year-selector";
import Head from "next/head";

export default function AppRoot() {
  const router = useRouter()

  function navigateClick(destination) {
    return evt => {
      router.push(`calculate/${destination}`)
    }
  }

  return <Fragment>
    <Head>
        <title>Tax Calculator</title>
        <meta name='description' content="Calulate how your income was taxed in a given year.  Now supporting 2019 - 2022." />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Hero />
    <YearSelector navigateClick={navigateClick}/>
  </Fragment>;
}
import { useRouter } from "next/router";
import { Fragment } from "react";
import Hero from "../components/home/Hero";
import YearSelector from "../components/home/year-selector";

export default function AppRoot() {
  const router = useRouter()

  function navigateClick(destination) {
    return evt => {
      router.push(`calculate/${destination}`)
    }
  }

  return <Fragment>
    <Hero />
    <YearSelector navigateClick={navigateClick}/>
  </Fragment>;
}
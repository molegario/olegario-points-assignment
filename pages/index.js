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

    {/* <ul>
      {
        ['2019', '2020', '2021', '2022'].map(
          tt=><li key={`year_${tt}`}>
            <button onClick={navigateClick(tt)}>{tt}</button>
          </li>
        )
      }
    </ul> */}
    <YearSelector navigateClick={navigateClick}/>

  </Fragment>;
}
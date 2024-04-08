import { Fragment, useEffect, useState } from "react";
import useSWR from "swr";
import HeaderResults from "../../../components/results/header-results";
import IncomeForm from "../../../components/results/income-form";
import ResultsGrid from "../../../components/results/results-grid";
import { getSupportedYears } from "../../../lib/supported-years";
import Head from "next/head";
import 'primereact/resources/themes/lara-light-cyan/theme.css'

export default function CalculateResultsPage({ year, yearTaxBrackets }) {
  const [taxBrackets, setTaxBrackets] = useState(yearTaxBrackets)
  const [bracketResults, setBracketResults] = useState();

  //hook used for post render data
  //using mutate function as a total failure recovery for
  //no pre-rendered or post rendered (double pull fail)
  const {
    data, error, mutate, isValidating
  } = useSWR(
    `http://localhost:5001/tax-calculator/tax-year/${year}`,
    (url) => fetch(url).then(res => res.json()),
    {
      dedupingInterval: 0
    }
  );

  useEffect(
    ()=>{
      //stomps data only if post render pull has valid data
      if(data?.tax_brackets && taxBrackets?.length === 0) {
        //stomp pre-rendered data with new rates data for year
        setTaxBrackets(data.tax_brackets);
      }
    },
    [data]
  );

  //process data for breakdown calculation
  function processFormData(totalincome) {
    const bracketResults = taxBrackets.reduce(
      (acc, itm) => {
        const taxable_income = itm.max - itm.min;
        if(totalincome === 0) {
          return acc.concat({
            taxable_income: 0,
            rate: itm.rate,
            min: itm.min,
            max: itm.max,
          });
        }
        if(totalincome > taxable_income) {
          totalincome = totalincome - taxable_income;
          return acc.concat([{
            taxable_income, 
            rate: itm.rate,
            min: itm.min,
            max: itm.max,
          }])
        } else {
          const taxable_income = totalincome;
          totalincome = 0;
          return acc.concat([{
            taxable_income,
            rate: itm.rate,
            min: itm.min,
            max: itm.max,
          }])
        }
      },
      []
    );
    return bracketResults;
  }

  function onSubmitHandler(slidervalue) {
    const results = processFormData(slidervalue);
    setBracketResults(results);
  }

  return <Fragment>
    <Head>
      <title>Your tax assessment for {year}</title>
      <meta name="description" content={`The breakdown of a given salary for the year ${year}`}/>
    </Head>
    <HeaderResults year={year}/>
    <main>
      <IncomeForm
        onFormSubmitHandler={onSubmitHandler}
        taxBrackets={taxBrackets}
        error={error}
        isValidating={isValidating}
        mutate={mutate}
      />
      <div>
        {
          bracketResults?.length > 0 && 
            <ResultsGrid bracketResults={bracketResults}/>
        }
      </div>
    </main>
  </Fragment>
}

//generates pre-rendered data on navigation
export async function getServerSideProps(context) {
  const { params, req, res } = context;
  const { year } = params;

  //check if supported year otherwise use 404 to warn of 
  //unsupported path
  const supportedYears = getSupportedYears();

  if(!supportedYears.includes(year)) {
    return {
      notFound: true
    };
  }

  //otherwise attempt pre-rendered pull
  let resp;
  try {
    resp = await fetch(`http://localhost:5001/tax-calculator/tax-year/${year}`);
    const respJson = await resp.json();
    const { tax_brackets=[] } = respJson;
    return {
      props: {
        yearTaxBrackets: tax_brackets, //pre-render data
        year, //post year argument for display
      }
    };
  } catch (err) {
      return {
        redirect: {
          destination: '/unavailable',
          peramanent: false,
        }
      };
    // return {
    //   notFound: true
    // }
    // res.status(500).json({
    //   message: 'Rates server is temporarily unreachable.'
    // })
    
  }
}
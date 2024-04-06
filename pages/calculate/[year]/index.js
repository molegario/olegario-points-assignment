import { useRouter } from "next/router";
import { Fragment, useEffect, useRef, useState } from "react";
import useSWR from "swr";

export default function CalculateResultsPage({ year, yearTaxBrackets }) {
  const router = useRouter();
  const incomeRef = useRef();
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
      if(data?.tax_brackets) {
        //stomp pre-rendered data with new rates data for year
        setTaxBrackets(data.tax_brackets);
      }
    },
    [data]
  );

  //process data for breakdown calculation
  function processFormData() {
    let totalincome = incomeRef.current.value;
    const bracketResults = taxBrackets.reduce(
      (acc, itm) => {
        const taxable_income = itm.max -itm.min;
        if(totalincome === 0) {
          return acc.concat({
            taxable_income: 0,
            rate: itm.rate
          });
        }
        if(totalincome > taxable_income) {
          totalincome = totalincome - taxable_income;
          return acc.concat([{taxable_income, rate: itm.rate}])
        } else {
          const taxable_income = totalincome;
          totalincome = 0;
          return acc.concat([{
            taxable_income,
            rate: itm.rate
          }])
        }
      },
      []
    );
    return bracketResults;
  }

  function onSubmitHandler(evt) {
    evt.preventDefault();
    const results = processFormData();
    setBracketResults(results);
  }

  function onBackNavigate() {
    router.push('/')
  }

  return <div>
    <button onClick={onBackNavigate}>Select Another Year</button>
    <h1>CALCULATE:: {year}</h1>
    <form onSubmit={onSubmitHandler} >
      {
        bracketResults?.length === 0 && isValidating && <p className="center">Loading...</p>
      }
      {
        (
          taxBrackets.length > 0
        ) && <Fragment>
          <input type="number" step='0.01' id='income' name='income' placeholder="please enter your income" ref={incomeRef} required />
          <button>Calculate</button>
        </Fragment>
      }
      {
        (
          error ||
          !isValidating &&
          taxBrackets.length === 0
        ) && <button type='button' onClick={()=>mutate()}>refresh</button>
      }
    </form>
    <div>
      <p className="center">{
        error ? <p style={{color:"red"}}>{error.message}</p> : null
      }</p>
      <ul>
      {
        bracketResults?.map((uu, idx)=><li key={idx}>{uu.taxable_income}---{uu.rate}</li>)
      }
      </ul>
    </div>
  </div>
}

//generates pre-rendered data on navigation
export async function getServerSideProps(context) {
  const { params, req, res } = context;
  const { year } = params;

  //check if supported year otherwise use 404 to warn of 
  //unsupported path
  if(!['2019', '2020', '2021', '2022'].includes(year)) {
    return {
      notFound: true
    };
  }

  //otherwise attempt pre-rendered pull
  const resp = await fetch(`http://localhost:5001/tax-calculator/tax-year/${year}`);
  const respJson = await resp.json();
  const { tax_brackets=[] } = respJson;

  return {
    props: {
      yearTaxBrackets: tax_brackets, //pre-render data
      year, //post year argument for display
    }
  };
}
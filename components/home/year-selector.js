const SUPPORTED_YEARS = [
  '2019', '2020', '2021', '2022'
];

import { Fragment } from 'react';
import classes from './year-selector.module.css';
import Link from 'next/link';

export default function YearSelector({navigateClick}) {
  return <Fragment>
    <p className={classes.note}>Currently supported years</p>
    <ul className={classes.list}>
      {
        SUPPORTED_YEARS.map(
          tt=><li key={`year_${tt}`}>
            <button onClick={navigateClick(tt)}>{tt}</button>
          </li>
        )
      }
      <li className={classes.questions}><Link href='/help'>questions?</Link></li>
    </ul>
  </Fragment>
}
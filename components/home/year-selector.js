import { Fragment } from 'react';
import classes from './year-selector.module.css';
import Link from 'next/link';
import { getSupportedYears } from '../../lib/supported-years';

export default function YearSelector({navigateClick}) {
  const supportedYears = getSupportedYears();
  return <Fragment>
    <p className={classes.note}>Currently supported years</p>
    <ul className={classes.list}>
      {
        supportedYears.map(
          tt=><li key={`year_${tt}`}>
            <button onClick={navigateClick(tt)}>{tt}</button>
          </li>
        )
      }
      <li className={classes.questions}><Link href='/help'>questions?</Link></li>
    </ul>
  </Fragment>
}
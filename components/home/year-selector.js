import { Fragment } from 'react';
import classes from './year-selector.module.css';
export default function YearSelector({navigateClick}) {
  return <Fragment>
    <p className={classes.note}>Currently supported years</p>
    <ul className={classes.list}>
    {
      ['2019', '2020', '2021', '2022'].map(
        tt=><li key={`year_${tt}`}>
          <button onClick={navigateClick(tt)}>{tt}</button>
        </li>
      )
    }
    </ul>
  </Fragment>
}
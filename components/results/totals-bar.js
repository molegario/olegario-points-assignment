import classes from './totals-bar.module.css';

export default function TotalsBar({
  totalincome,
  totaltaxes,
  effectivetaxrate,
}) {

  return <ul className={classes.totals}>
    <li className={classes.hdr}>
      <span>Total taxable income:</span>
      <span>Total tax:</span>
      <span>Effective taxrate:</span>
    </li>
    <li></li>
    <li>
      <span data-testid='total-income'>{totalincome.toLocaleString('en-CA', {
        style: 'currency',
        currency: 'CAD'
      })}</span>
      <span data-testid='total-taxes'>{totaltaxes.toLocaleString('en-CA', {
        style: 'currency',
        currency: 'CAD'
      })}</span>
      <span data-testid='effective-taxrate'>{effectivetaxrate.toFixed(2)}%</span>
    </li>
  </ul>;
}
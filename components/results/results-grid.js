import { DataTable } from 'primereact/datatable';
import classes from './results-grid.module.css';
import { Column } from 'primereact/column';

export default function ResultsGrid({bracketResults}) {
  const xformedResults = bracketResults.map(
    ttt=>({
      range: `${ttt.min}${ttt.max ? '-' : ''}${ttt.max ?? '+'}`,
      income: (+ttt.taxable_income).toFixed(2),
      rate: (+ttt.rate).toFixed(2),
      totaltax: (+ttt.taxable_income * +ttt.rate).toFixed(2),
    })
  );
  const totalincome = xformedResults.reduce(
    (acc, itm)=>{
      return acc + +itm.income
    },
    0
  );
  const totaltaxes = xformedResults.reduce(
    (acc, itm)=>{
      return acc + +itm.totaltax
    },
    0
  );
  const  effectivetaxrate = totalincome === 0 ? 0 : ((totaltaxes / totalincome) * 100.0); 

  return <article className={classes.content}>
    <DataTable value={xformedResults} tableStyle={{minWidth: '420px'}}>
      <Column field='range' header='Bracket Range'></Column>
      <Column field='income' header='Taxable Income'></Column>
      <Column field='rate' header='Tax Rate'></Column>
      <Column field='totaltax' header='Bracket Tax Total'></Column>
    </DataTable>
    <ul className={classes.totals}>
      <li className={classes.hdr}><span>Total taxable income:</span><span>Total tax:</span><span>Effective taxrate:</span></li>
      <li></li>
      <li><span>${totalincome.toFixed(2)}</span><span>${totaltaxes.toFixed(2)}</span><span>{effectivetaxrate.toFixed(2)}%</span></li>
    </ul>
  </article>
}
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ResultsGrid from '../../../components/results/results-grid';

describe(
  'Results Grid',
  () => {
    it(
      'renders a Results Grid',
      () => {

        const taxBracketResults = [
          {
            taxable_income: '1200',
            rate: '0.15',
            min: '0',
            max: '1200'
          }, {
            taxable_income: '1800',
            rate: '0.18',
            min: '1200',
            max: '3000'
          }, {
            taxable_income: '1700',
            rate: '0.20',
            min: '3000',
            max: '4700'
          }, {
            taxable_income: '2600',
            rate: '0.22',
            min: '4700',
            max: '7200'
          }, {
            taxable_income: '400',
            rate: '0.27',
            min: '7200',
          }
        ];

        render(<ResultsGrid bracketResults={taxBracketResults}/>);
        const totalincomevalue = screen.getByText('$7700.00');
        expect(totalincomevalue).toBeInTheDocument();
      }
    )
  }
);

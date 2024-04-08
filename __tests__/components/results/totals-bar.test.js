import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TotalsBar from '../../../components/results/totals-bar';


describe(
  'Totals Bar',
  () => {
    it(
      'renders a totals bar',
      () => {
        render(<TotalsBar totalincome={71543} totaltaxes={15739.46} effectivetaxrate={22} />);
        const totalincome = screen.getByTestId('total-income');
        const totaltaxes = screen.getByTestId('total-taxes');
        const effectiverate = screen.getByTestId('effective-taxrate');
        expect(totalincome).toHaveTextContent('$71543.00');
        expect(totaltaxes).toHaveTextContent('$15739.46');
        expect(effectiverate).toHaveTextContent('22.00%');
      }
    );
  }
);
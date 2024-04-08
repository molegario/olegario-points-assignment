import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Logo from '../../../components/results/logo';


describe(
  'Logo',
  ()=>{
    it(
      'renders a logo',
      ()=>{
        render(<Logo year={'1812'}/>);
        const logo = screen.getByTestId('main-logo');
        expect(logo).toHaveTextContent('Tax Calculator 1812');
      }
    );
  }
);
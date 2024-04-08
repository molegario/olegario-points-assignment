import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HeaderResults from '../../../components/results/header-results';

describe(
  'Header Results',
  () => {
    it(
      'renders a Header Results',
      () => {
        render(<HeaderResults year={'1985'}/>);
        const backLink = screen.getByText('another time?');
        expect(backLink).toBeInTheDocument();
      }
    )
  }
)
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import YearSelector from '../../../components/home/year-selector';


describe(
  'Year Selector',
  () => {
    it(
      'Renders a Year Selector',
      () => {
        const navigateClick = () => {};
        render(<YearSelector navigateClick={navigateClick} />);
        const button_2019 = screen.getByText('2019');
        expect(button_2019).toBeInTheDocument();
        const button_2020 = screen.getByText('2020');
        expect(button_2020).toBeInTheDocument();
      }
    )
  }
)
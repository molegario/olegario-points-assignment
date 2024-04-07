import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Hero from '../../../components/home/hero';

describe(
  'Hero',
  () => {
    it('renders a hero', () => {
      render(<Hero />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
    })
  }
)
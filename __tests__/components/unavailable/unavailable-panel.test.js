import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import UnavailablePanel from '../../../components/unavailable/unavailable-panel';

describe(
  'Unavailable Panel',
  () => {

    it(
      'renders an unavaiable panel',
      () => {
        render(<UnavailablePanel />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toHaveTextContent('503');
      }
    );
  }
);
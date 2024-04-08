import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NotFoundPanel from '../../../components/notfound/404panel';



describe(
  '404 Panel',
  () => {

    it(
      'renders a 404 Panel',
      ()=>{
        render(<NotFoundPanel />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toHaveTextContent('404');
      }
    );
  }
);
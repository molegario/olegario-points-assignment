import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PostHeader from '../../../components/help/post-header';

describe(
  'Post Header',
  () => {
    it(
      'renders a Post Header',
      () => {
        render(<PostHeader title={'TEST TITLE'}/>);
        const heading = screen.getByText('TEST TITLE');
        expect(heading).toBeInTheDocument();
      }
    )
  }
)
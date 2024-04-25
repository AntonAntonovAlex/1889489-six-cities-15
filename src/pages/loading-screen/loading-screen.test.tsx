import LoadingScreen from './loading-screen';
import { render, screen } from '@testing-library/react';

describe('Component: Loading screen', () => {
  it('should render correct', () => {
    const expectedText = /Loading/i;

    render(<LoadingScreen />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});

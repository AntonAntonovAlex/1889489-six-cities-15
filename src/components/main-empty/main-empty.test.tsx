import { render, screen } from '@testing-library/react';
import MainEmpty from './main-empty';
import { INITIAL_CITY } from '../../const';

describe('Component: MainEmpty screen', () => {
  it('should render correct', () => {
    const expectedText = /No places to stay available/i;
    const expectedSecondText = /We could not find any property available at the moment in/i;

    render(<MainEmpty selectedCity={INITIAL_CITY}/>);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByText(expectedSecondText)).toBeInTheDocument();
  });
});

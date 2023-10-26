import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderButton from './HeaderButton';

describe('<HeaderButton />', () => {
  test('it should mount', () => {
    render(<HeaderButton />);
    
    const headerButton = screen.getByTestId('HeaderButton');

    expect(headerButton).toBeInTheDocument();
  });
});
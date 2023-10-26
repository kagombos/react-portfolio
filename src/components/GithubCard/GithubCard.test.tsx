import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GithubCard from './GithubCard';

describe('<GithubCard />', () => {
  test('it should mount', () => {
    render(<GithubCard />);
    
    const githubCard = screen.getByTestId('GithubCard');

    expect(githubCard).toBeInTheDocument();
  });
});
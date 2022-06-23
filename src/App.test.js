import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App component', () => {
  afterEach(cleanup);

  it('renders with correct class name', () => {
    render(<App />);
    expect(screen.getByTestId('app')).toHaveClass('container');
  });
});

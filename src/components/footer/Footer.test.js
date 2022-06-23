import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Footer component', () => {
  afterEach(cleanup);

  it('renders', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('contains an element with the proper text', () => {
    render(<Footer />);
    expect(screen.getByText('Copyright © meuzishun 2022')).toBeTruthy();
  });
});

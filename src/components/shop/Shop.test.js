import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Shop from './Shop';

describe('Shop component', () => {
  afterEach(cleanup);

  const products = [
    {
      name: 'item 1',
      description: 'it is cool',
      price: 1.23,
      id: 0,
    },
    {
      name: 'item 2',
      description: 'it is also cool',
      price: 4.56,
      id: 1,
    },
    {
      name: 'item 3',
      description: 'it sucks',
      price: 7.89,
      id: 2,
    },
  ];

  it('renders without any products', () => {
    render(<Shop />);
    expect(screen.getByTestId('shop')).toBeEmptyDOMElement();
  });

  it('renders with the correct number of children', () => {
    render(<Shop products={products} />);
    expect(screen.getByTestId('shop').childNodes.length).toBe(3);
  });
});

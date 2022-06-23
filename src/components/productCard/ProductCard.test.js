import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from './ProductCard';

describe('ProductCard component', () => {
  afterEach(cleanup);

  const testProduct = {
    name: 'test',
    description: 'testing',
    price: 1.23,
  };

  it('contains an heading with the proper text', () => {
    render(<ProductCard product={testProduct} addProductClick={jest.fn()} />);

    expect(screen.getByRole('heading')).toHaveTextContent('test');
  });
});

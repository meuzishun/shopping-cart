import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from './ProductCard';

describe('ProductCard component', () => {
  afterEach(cleanup);

  it('contains an heading with the proper text', () => {
    const testProduct = {
      name: 'test',
      description: 'testing',
      price: 1.23,
    };

    render(<ProductCard product={testProduct} addProductClick={jest.fn()} />);

    expect(screen.getByRole('heading')).toHaveTextContent('test');
  });
});

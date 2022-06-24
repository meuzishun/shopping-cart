import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ProductCard from './ProductCard';

describe('ProductCard component', () => {
  afterEach(cleanup);

  const testProduct = {
    name: 'test',
    description: 'testing',
    price: 1.23,
  };

  const testFunc = jest.fn();

  it('contains an heading with the proper text', () => {
    render(<ProductCard product={testProduct} addProductClick={testFunc} />);

    expect(screen.getByRole('heading')).toHaveTextContent('test');
  });

  it('contains an paragraph with the description text', () => {
    render(<ProductCard product={testProduct} addProductClick={testFunc} />);

    expect(screen.getByTestId('productDescription')).toHaveTextContent(
      'testing'
    );
  });

  it('contains an paragraph with the price text', () => {
    render(<ProductCard product={testProduct} addProductClick={testFunc} />);

    expect(screen.getByTestId('productPrice')).toHaveTextContent('$1.23');
  });

  it('contains a button that has the text "add to cart"', () => {
    render(<ProductCard product={testProduct} addProductClick={testFunc} />);

    expect(screen.getByRole('button')).toHaveTextContent('Add to cart');
  });

  it('contains a button that handles adding to the cart', () => {
    render(<ProductCard product={testProduct} addProductClick={testFunc} />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(testFunc).toHaveBeenCalled();
  });
});

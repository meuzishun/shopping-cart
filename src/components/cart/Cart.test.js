import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Cart from './Cart';

describe('Cart component', () => {
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

  it('renders with a heading of "shopping cart"', () => {
    render(<Cart cartItems={products} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent(
      'shopping cart'
    );
  });

  it('renders with the last button acting as a checkout button', () => {
    const testCheckout = jest.fn();
    render(<Cart cartItems={products} checkout={testCheckout} />);
    const checkoutBtn = screen.getAllByRole('button')[products.length * 2];
    userEvent.click(checkoutBtn);
    expect(testCheckout).toHaveBeenCalled();
  });

  it('renders with the correct price total', () => {
    const totalPrice = products.reduce((acc, curr) => acc + curr.price, 0);
    render(<Cart cartItems={products} totalPrice={totalPrice} />);
    expect(screen.getByText(/total price/i)).toHaveTextContent('$13.68');
  });
});

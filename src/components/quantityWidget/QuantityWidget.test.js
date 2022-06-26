import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import QuantityWidget from './QuantityWidget';

describe('ProductCard component', () => {
  afterAll(cleanup);

  it('renders with a paragraph element displaying the quantity', () => {
    render(<QuantityWidget item={{ quantity: 1 }} />);
    expect(screen.getByText('1')).toBeTruthy();
  });

  it('renders with a minus button that calls the editItemQuantity function', () => {
    const mockFunc = jest.fn();
    render(
      <QuantityWidget item={{ quantity: 1 }} editItemQuantity={mockFunc} />
    );
    const minusBtn = screen.getByText('-');
    userEvent.click(minusBtn);
    expect(mockFunc).toHaveBeenCalled();
  });

  it('renders with a plus button that calls the editItemQuantity function', () => {
    const mockFunc = jest.fn();
    render(
      <QuantityWidget item={{ quantity: 1 }} editItemQuantity={mockFunc} />
    );
    const plusBtn = screen.getByText('+');
    userEvent.click(plusBtn);
    expect(mockFunc).toHaveBeenCalled();
  });
});

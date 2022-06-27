import React from 'react';
import { render, screen, cleanup, getByRole } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import CartItem from './CartItem';
import QuantityWidget from '../QuantityWidget/QuantityWidget';

describe('ProductCard component', () => {
  afterEach(cleanup);

  it('CartItem renders with correct name text', () => {
    const testItem = {
      name: 'testName',
      description: 'test description',
      price: 1.23,
    };
    const testFunction = jest.fn();
    render(<CartItem item={testItem} editItemQuantity={testFunction} />);
    expect(screen.getByText('testName')).toBeTruthy();
  });

  it('CartItem renders with correct description text', () => {
    const testItem = {
      name: 'testName',
      description: 'test description',
      price: 1.23,
    };
    const testFunction = jest.fn();
    render(<CartItem item={testItem} editItemQuantity={testFunction} />);
    expect(screen.getByText('test description')).toBeTruthy();
  });

  it('CartItem renders with correct price text', () => {
    const testItem = {
      name: 'testName',
      description: 'test description',
      price: 1.23,
    };
    const testFunction = jest.fn();
    render(<CartItem item={testItem} editItemQuantity={testFunction} />);
    expect(screen.getByText('$1.23')).toBeTruthy();
  });

  it('Child widget renders with a minus button', () => {
    const testItem = {
      name: 'testName',
      description: 'test description',
      price: 1.23,
    };
    const testFunction = jest.fn();
    render(<CartItem item={testItem} editItemQuantity={testFunction} />);
    expect(screen.getByText('-')).toBeTruthy();
  });

  it('Child widget renders with a plus button', () => {
    const testItem = {
      name: 'testName',
      description: 'test description',
      price: 1.23,
    };
    const testFunction = jest.fn();
    render(<CartItem item={testItem} editItemQuantity={testFunction} />);
    expect(screen.getByText('+')).toBeTruthy();
  });

  it('Child widget renders a minus button that calls the editItemQuantity function', () => {
    const testItem = {
      name: 'testName',
      description: 'test description',
      price: 1.23,
    };
    const testFunction = jest.fn();
    render(<CartItem item={testItem} editItemQuantity={testFunction} />);
    const minusBtn = screen.getByText('-');
    userEvent.click(minusBtn);
    expect(testFunction).toHaveBeenCalled();
  });

  it('Child widget renders a plus button that calls the editItemQuantity function', () => {
    const testItem = {
      name: 'testName',
      description: 'test description',
      price: 1.23,
    };
    const testFunction = jest.fn();
    render(<CartItem item={testItem} editItemQuantity={testFunction} />);
    const plusBtn = screen.getByText('+');
    userEvent.click(plusBtn);
    expect(testFunction).toHaveBeenCalled();
  });
});

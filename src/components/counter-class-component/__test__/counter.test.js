// counter.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Counter from '../counter';

afterEach(() => {
  window.localStorage.removeItem('count');
});

test('counter increments the count', () => {
  const { container } = render(<Counter />);
  const button = container.firstChild;

  expect(button.textContent).toBe('0');
  fireEvent.click(button);
  expect(button.textContent).toBe('1');
});

test('reads and updates localStorage', () => {
  window.localStorage.setItem('count', 3);

  const { container, rerender } = render(<Counter />);
  const button = container.firstChild;

  expect(button.textContent).toBe('3');
  
  fireEvent.click(button);
  expect(button.textContent).toBe('4');
  expect(window.localStorage.getItem('count')).toBe('4');
});

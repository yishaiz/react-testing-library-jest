import React from 'react';
import ReactDom from 'react-dom';

import { render, cleanup } from '@testing-library/react';
// import "jest-dom/extend-expect"

import Button from '../button';

afterEach(cleanup)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<Button></Button>, div);
});

it('renders button correctly', () => {
  const { getByTestId } = render(<Button label="click me please"></Button>);
  expect(getByTestId('button')).toHaveTextContent('click me please');
});

it('renders button correctly', () => {
  const { getByTestId } = render(<Button label="save"></Button>);
  expect(getByTestId('button')).toHaveTextContent('save');
});


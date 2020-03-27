import React from 'react';
import ReactDom from 'react-dom';

import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Button from '../button';

afterEach(cleanup);

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

it('matches snapshot', () => {
  const tree = renderer.create(<Button label="save"></Button>).toJSON();
    expect(tree).toMatchSnapshot()
});

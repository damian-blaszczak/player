import React from 'react';
import { render } from '@testing-library/react';
import Intro from './Intro';
import { MemoryRouter as Router } from 'react-router-dom';

it('renders correctly', () => {
  const { container } = render(
    <Router>
      <Intro />
    </Router>
  );
  expect(container).toMatchSnapshot();
});

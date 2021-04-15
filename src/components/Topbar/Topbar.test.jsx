import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Topbar from './Topbar';
import { MemoryRouter as Router } from 'react-router-dom';

it('renders correctly', () => {
  const { container } = render(
    <Router>
      <Topbar />
    </Router>
    );

  expect(container).toMatchSnapshot();
});

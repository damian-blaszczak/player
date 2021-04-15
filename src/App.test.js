import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders link to player', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/tutaj/);
  expect(linkElement).toBeInTheDocument();
});

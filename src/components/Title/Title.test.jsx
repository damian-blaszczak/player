import React from 'react';
import { render } from '@testing-library/react';
import Title from './Title';

describe('Title', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Title />
    );
    expect(container).toMatchSnapshot();
  });

  it('should have white color', () => {
    const { container } = render(
        <Title />
    );

    const titleElement = container.querySelector('h2');
    expect(titleElement).toHaveStyle('color: white');
});
});

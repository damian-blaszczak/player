import React from 'react';
import { render } from '@testing-library/react';
import SampleStyledParagraph from './SampleStyledParagraph';

describe('SampleStyledParagraph', () => {
  it('renders correctly', () => {
    const { container } = render(
      <SampleStyledParagraph />
    );
    expect(container).toMatchSnapshot();
  });

  it('should have font-size equal to 1.4rem', () => {
    const { container } = render(
      <SampleStyledParagraph />
    );

    const paragraphElement = container.querySelector('p');
    expect(paragraphElement).toHaveStyle('font-size: 1.4rem');
  });
});

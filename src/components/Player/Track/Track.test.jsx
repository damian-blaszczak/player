import React from 'react';
import { render } from '@testing-library/react';
import Track from './Track';

it('renders correctly', () => {
  const props = {
    trackImage: 'url',
    trackName: 'name',
    fastForward: jest.fn(),
    rewind: jest.fn(),
    playing: true,
    setPlaying: jest.fn(),
    nextTrack: jest.fn(),
    previousTrack: jest.fn(),
    preloadImages: jest.fn()
  };
  const { container } = render(
    <Track {...props} />
  );
  expect(container).toMatchSnapshot();
});

import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Player from './Player';
import sinon from 'sinon';
import * as reactQuery from 'react-query';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Player', () => {
  const sandbox = sinon.createSandbox();
  beforeAll(() => {
    sandbox.stub(reactQuery, 'useQuery').returns({
      data: [
        {
          id: 1,
          name: 'track1',
          image: 'imageUrl1',
          track: 'mp3track1'
        }, {
          id: 2,
          name: 'track2',
          image: 'imageUrl2',
          track: 'mp3track2'
        }, {
          id: 3,
          name: 'track3',
          image: 'imageUrl3',
          track: 'mp3track3'
        }
      ],
      isLoading: false,
      error: null
    });
    window.HTMLMediaElement.prototype.play = jest.fn();
    window.HTMLMediaElement.prototype.pause = jest.fn();
  });
  afterEach(() => {
    cleanup();
  });

  it('renders correctly', () => {
      const { container } = render(
        <Router>
          <Player />
        </Router>
      );

      expect(container).toMatchSnapshot();
  });

  it('should change state playing', () => {
    // Arrange
    const { queryByText } = render(
      <Router>
        <Player />
      </Router>
    );

    const playButton = queryByText('i_play.svg');
    const pauseButton = queryByText('i_pause.svg');

    // Assert
    expect(pauseButton).toBeNull();
    expect(playButton).toBeTruthy();

    // Act
    fireEvent.click(playButton);

    // Assert
    expect(queryByText('i_pause.svg')).toBeTruthy();
    expect(queryByText('i_play.svg')).toBeNull();
  });

  it('should change state trackIndex', () => {
    // Arrange
    const { queryByTestId, queryByAltText } = render(
      <Router>
        <Player />
      </Router>
    );

    // Assert
    expect(queryByAltText('track1-cover')).toBeTruthy();
    expect(queryByAltText('track2-cover')).toBeNull();

    // Act
    fireEvent.click(queryByTestId('nextTrack'));

    // Assert
    expect(queryByAltText('track1-cover')).toBeNull();
    expect(queryByAltText('track2-cover')).toBeTruthy();

    // Act
    fireEvent.click(queryByTestId('previousTrack'));

    // Assert
    expect(queryByAltText('track1-cover')).toBeTruthy();
    expect(queryByAltText('track2-cover')).toBeNull();
  });

  it('should change current tab', () => {
    // Arrange
    const { queryByText, queryByTestId, queryByAltText } = render(
      <Router>
        <Player />
      </Router>
    );

    // Assert
    expect(queryByAltText('track1-cover')).toBeTruthy();
    expect(queryByTestId('trackDescription')).toBeNull();

    // Act
    fireEvent.click(queryByText('OPIS'));

    // Assert
    expect(queryByAltText('track1-cover')).toBeNull();
    expect(queryByTestId('trackDescription')).toBeTruthy();
  });
});

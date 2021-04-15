import { renderHook, act } from '@testing-library/react-hooks'
import useAudioPlayer from './useAudioPlayer'
import { render } from '@testing-library/react';
import React from 'react';
import Player from '../../components/Player/Player';
import { MemoryRouter as Router } from 'react-router-dom';
import sinon from 'sinon';
import * as reactQuery from 'react-query';

window.HTMLMediaElement.prototype.play = jest.fn();
window.HTMLMediaElement.prototype.pause = jest.fn();

describe('useAudioPlayer', () => {
  it('should set playing to true', () => {
    const { result } = renderHook(() => useAudioPlayer())

    act(() => {
      result.current.setPlaying(true);
    })

    expect(result.current.playing).toBe(true);
  });

  it('should set audi currentTime to 1000', () => {
    const sandbox = sinon.createSandbox();
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
    const { result } = renderHook(() => useAudioPlayer())

    const { container } = render(
      <Router>
        <Player />
      </Router>
    );

    act(() => {
      result.current.setTime(1000);
    })

    expect(container.querySelector('audio').currentTime).toBe(1000);
  });
});

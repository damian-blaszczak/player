import React, { useState } from 'react';
import Topbar from '../Topbar/Topbar';
import styled from 'styled-components';
import useAudioPlayer from '../../lib/hooks/useAudioPlayer';
import Track from './Track/Track';
import { useQuery } from 'react-query';
import { getTracksOnce } from '../../lib/api/getTracks';
import Loader from '../Loader/Loader';
import TabsComponent from '../TabsComponent/TabsComponent';
import SampleStyledParagraph from '../SampleStyledParagraph/SampleStyledParagraph';

const PlayerContainer = styled.div`
  background: rgb(83,64,84);
  background: linear-gradient(180deg, rgba(83,64,84,1) 0%, rgba(41,29,60,1) 40%, rgba(41,29,60,1) 100%);
  min-height: 100vh;
  height: 100%;
  color: #fff;
`;

const Player = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const { curTime, playing, duration, setPlaying, setTime } = useAudioPlayer();
  const { status: tracksStatus, data: tracksList } = useQuery('tracks', getTracksOnce);
  const [trackIndex, setTrackIndex] = useState(1);

  const pageTitle = tracksList && tracksList.find(track => track.id === trackIndex)?.name;

  const handleChange = (_event, newValue) => {
    setTabIndex(newValue)
    if (playing) {
      setPlaying(false);
    }
  };

  const fastForward = () => {
    setTime(curTime + 30);
  }

  const rewind = () => {
    setTime(curTime - 15);
  }

  const nextTrack = () => {
    if (trackIndex < tracksList.length) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(1);
    }
    setPlaying(false);
  };

  const previousTrack = () => {
    if (trackIndex !== 1) {
      setTrackIndex(trackIndex - 1);
    } else {
      setTrackIndex(tracksList.length);
    }
    setPlaying(false);
  };

  const preloadImages = () => tracksList && tracksList.forEach(track => {
    new Image().src = track.image;
  });

  return (
    <PlayerContainer>
      {tracksStatus === 'loading'
        ? <Loader />
        : (
          <>
            <Topbar title={pageTitle} />
            {tracksList.map(track => trackIndex === track.id && (
              <TabsComponent
                key={track.id}
                tabIndex={tabIndex}
                handleChange={handleChange}
                tabs={['OPIS', 'SŁUCHAJ', 'ROZDZIAŁY']}
                tabPanels={[
                  <SampleStyledParagraph data-testid="trackDescription">Tutaj znajduje się opis utworu {track.name}.</SampleStyledParagraph>,
                    <React.Fragment>
                      <audio id="audio">
                        <source src={track.track} />
                        Your browser does not support the <code>audio</code> element.
                      </audio>
                      <Track
                        trackName={track.name}
                        trackImage={track.image}
                        fastForward={fastForward}
                        rewind={rewind}
                        playing={playing}
                        setPlaying={setPlaying}
                        nextTrack={nextTrack}
                        previousTrack={previousTrack}
                        curTime={curTime}
                        duration={duration}
                        preloadImages={preloadImages}
                      />
                    </React.Fragment>,
                  <SampleStyledParagraph>Tutaj znajdują się rozdziały utworu {track.name}.</SampleStyledParagraph>
                ]}
              />
            ))}
          </>
        )
      }
    </PlayerContainer>
  );
};

export default Player;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import RedoIcon from '@material-ui/icons/Redo';
import UndoIcon from '@material-ui/icons/Undo';
import { ReactComponent as PlayIcon } from '../../../assets/icons/i_play.svg';
import { ReactComponent as PauseIcon } from '../../../assets/icons/i_pause.svg';
import secToTimeFormat from '../../../lib/utils/secToTimeFormat';

const TrackContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;

const StyledImg = styled.img`
  max-width: 100%;
  min-width: 370px;
  min-height: 370px;
  max-height: 100%;
  border-radius: 5px;
`;

const StyledTrackName = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
`;

const MaterialIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TrackNameSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const TrackControlsSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const StyledTimeAmount = styled.span`
  font-size: 1.4rem;
`;

const playPauseIconStyles = {
  width: '100px',
  height: '100px'
};

const fontSizeStyle = { fontSize: '4rem' };

const Track = ({
  trackImage,
  trackName,
  fastForward,
  rewind,
  playing,
  setPlaying,
  nextTrack,
  previousTrack,
  curTime,
  duration,
  preloadImages
}) => {

  useEffect(() => {
    preloadImages()
  }, [preloadImages]);

  return (
    <TrackContainer>
      <StyledImg src={trackImage} alt={`${trackName}-cover`} />
      <TrackNameSection>
        <ChevronLeftIcon data-testid="previousTrack" fontSize="large" onClick={previousTrack} />
        <StyledTrackName>{trackName}</StyledTrackName>
        <ChevronRightIcon data-testid="nextTrack" fontSize="large" onClick={nextTrack} />
      </TrackNameSection>
      <TrackControlsSection>
        <MaterialIconContainer>
          <UndoIcon style={fontSizeStyle} onClick={rewind} />
          <StyledTimeAmount>15</StyledTimeAmount>
        </MaterialIconContainer>
        {playing
          ? <PauseIcon style={playPauseIconStyles} onClick={() => setPlaying(false)} />
          : <PlayIcon style={playPauseIconStyles} onClick={() => setPlaying(true)} />
        }
        <MaterialIconContainer>
          <RedoIcon style={fontSizeStyle} onClick={fastForward} />
          <StyledTimeAmount>30</StyledTimeAmount>
        </MaterialIconContainer>
      </TrackControlsSection>
      <StyledTimeAmount>{secToTimeFormat(curTime)} / {secToTimeFormat(duration)}</StyledTimeAmount>
    </TrackContainer>
  )
}

Track.propTypes = {
  trackImage: PropTypes.string,
  trackName: PropTypes.string,
  fastForward: PropTypes.func,
  rewind: PropTypes.func,
  playing: PropTypes.bool,
  setPlaying: PropTypes.func,
  nextTrack: PropTypes.func,
  previousTrack: PropTypes.func,
  preloadImages: PropTypes.func
};

export default Track;

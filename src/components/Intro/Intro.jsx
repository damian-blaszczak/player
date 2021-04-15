import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes.const';
import Title from '../Title/Title';
import styled from 'styled-components';

const IntroContainer = styled.div`
  background: linear-gradient(180deg, rgba(83,64,84,1) 0%, rgba(41,29,60,1) 40%, rgba(41,29,60,1) 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: 100vh
`;

const linkStyles = { margin: '0 5px', color: 'grey' };

const Intro = () => (
  <IntroContainer>
      <Title>
        Kliknij
        <Link to={routes.player} style={linkStyles}>
          tutaj
        </Link>
        aby przejść do odtwarzacza
    </Title>
  </IntroContainer>
);

export default Intro;

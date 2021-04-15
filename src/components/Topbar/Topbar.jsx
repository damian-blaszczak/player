import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routes from '../../routes.const';
import styled from 'styled-components';
import Title from '../Title/Title';
import CloseIcon from '@material-ui/icons/Close';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const TopbarContainer = styled.div`
  background-color: #534054;
  display: flex;
  align-items: center;
  padding: 15px 20px;
`;

const whiteColorStyle = { color: '#fff' };

const Topbar = ({ title }) => (
  <TopbarContainer>
    <Link to={routes.intro}>
      <CloseIcon
        fontSize="large"
        style={whiteColorStyle}
      />
    </Link>
    <Title>{title}</Title>
    <MoreVertIcon
      fontSize="large"
      style={whiteColorStyle}
    />
  </TopbarContainer>
);

Topbar.propTypes = {
  title: PropTypes.string
};

export default Topbar;

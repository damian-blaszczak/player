import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

const useStyles = makeStyles({
  customTabIndicator: {
    backgroundColor: '#fff',
    top: 0
  },
});

const TabLabel = styled.span`
  font-size: 1.5rem;
`;

const TabPanelContainer = styled.div`
  max-width: 810px;
  margin: auto;
`;

const TabPanel = (props) => {
  const { children, value, index } = props;
  return value === index && children
}

const TabsComponent = ({
  tabIndex,
  handleChange,
  tabs,
  tabPanels
}) => {
  const classes = useStyles();
  return (
    <>
      <Tabs
        variant="fullWidth"
        value={tabIndex}
        onChange={handleChange}
        classes={{ indicator: classes.customTabIndicator }}
      >
        {tabs.map(tab => (
          <Tab key={tab} label={<TabLabel>{tab}</TabLabel>} />
        ))}
      </Tabs>
      {tabPanels.map((tabPanel, index) => (
        <TabPanelContainer key={index} >
          <TabPanel value={tabIndex} index={index}>
            {tabPanel}
          </TabPanel>
        </TabPanelContainer>
      ))}
    </>
  );
}

TabsComponent.propTypes = {
  tabIndex: PropTypes.number,
  handleChange: PropTypes.func,
  tabs: PropTypes.arrayOf(PropTypes.string),
  tabPanels: PropTypes.arrayOf(PropTypes.node)
};

export default TabsComponent;

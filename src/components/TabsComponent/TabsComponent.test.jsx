import React from 'react';
import { render } from '@testing-library/react';
import TabsComponent from './TabsComponent';

it('renders correctly', () => {
  const props = {
    tabIndex: 1,
    handleChange: jest.fn(),
    handleChangeIndex: jest.fn(),
    tabs: ['tab1', 'tab2', 'tab3'],
    tabPanels: [
      <div>1</div>,
      <div>2</div>,
      <div>3</div>
    ]
  };
  const { container } = render(
    <TabsComponent {...props} />
  );
  expect(container).toMatchSnapshot();
});

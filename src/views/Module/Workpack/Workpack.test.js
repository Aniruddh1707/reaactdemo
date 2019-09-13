import React from 'react';
import Workpack from './Workpack';
import { mount } from 'enzyme'

it('renders without crashing', () => {
  mount(<Mcc />);
});

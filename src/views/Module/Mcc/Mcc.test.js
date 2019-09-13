import React from 'react';
import Mcc from './Mcc';
import { mount } from 'enzyme'

it('renders without crashing', () => {
  mount(<Mcc />);
});

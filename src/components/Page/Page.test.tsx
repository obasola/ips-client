import React from 'react';
import { shallow } from 'enzyme';
import Page from './Page';

describe('<Page />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Page />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});

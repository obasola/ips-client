import React from 'react';
import { shallow } from 'enzyme';
import Permission from './Permission';

describe('<Permission />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Permission />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Todo from './Todo';

describe('<Todo />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Todo />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});

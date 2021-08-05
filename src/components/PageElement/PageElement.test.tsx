import React from 'react';
import { shallow } from 'enzyme';
import PageElement from './PageElement';

describe('<PageElement />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<PageElement />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});

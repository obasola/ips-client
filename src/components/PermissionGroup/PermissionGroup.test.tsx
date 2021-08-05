import React from 'react';
import { shallow } from 'enzyme';
import PermissionGroup from './PermissionGroup';

describe('<PermissionGroup />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<PermissionGroup />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});

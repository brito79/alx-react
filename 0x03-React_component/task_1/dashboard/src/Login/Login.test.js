import React from 'react';
<<<<<<< HEAD
import Login from './Login';
import { shallow } from 'enzyme';

describe("testing the <Login /> component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it("Login component renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Login component renders 2 input tags", () => {
    expect(wrapper.find("input")).toHaveLength(2);
  });

  it("Login component renders 2 label tags", () => {
    expect(wrapper.find("label")).toHaveLength(2);
  });
=======
import { shallow } from 'enzyme';
import Login from './Login';

it('renders properly', () => {
  shallow(<Login />);
});

it('checking renders', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find('input')).toHaveLength(2);
  expect(wrapper.find('label')).toHaveLength(2);
>>>>>>> 3b7f4a80dcf88677b3eaaf4a7a76a9e7afc5ad6b
});

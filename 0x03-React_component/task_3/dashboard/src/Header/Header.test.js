import React from 'react';
<<<<<<< HEAD
import Header from './Header';
import { shallow } from 'enzyme';


describe('Testing <Header /> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("Renders with out crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Render an h1 tag", () => {
    expect(wrapper.find('h1')).toBeDefined();
  });

  it("Render an img tag", () => {
    expect(wrapper.find('img')).toBeDefined();
  });
=======
import { shallow } from 'enzyme';
import Header from './Header';

it('renders properly', () => {
  shallow(<Header />);
});

it('checking renders', () => {
  const wrapper = shallow(<Header />);

  const img = wrapper.find('img');
  const h1 = wrapper.find('h1');

  expect(img.exists()).toBe(true);
  expect(h1.exists()).toBe(true);
>>>>>>> 3b7f4a80dcf88677b3eaaf4a7a76a9e7afc5ad6b
});

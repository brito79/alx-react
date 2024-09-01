import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

<<<<<<< HEAD
describe("Testing <Footer /> component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it("Footer Component renders without crashing", () => {
    expect(wrapper.exists());
  });

  it("Footer compoenent render at the very least the text “Copyright”", () => {
    expect(wrapper.find("Copyright").at(0)).toBeDefined();
  });
=======
it('renders properly', () => {
  shallow(<Footer />);
});

it('checking renders', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.text()).toContain('Copyright');
>>>>>>> 3b7f4a80dcf88677b3eaaf4a7a76a9e7afc5ad6b
});

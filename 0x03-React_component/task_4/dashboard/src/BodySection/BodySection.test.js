<<<<<<< HEAD
import React from "react";
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe("Testing BodySection Component",() => {
  it(' checking that shallowing the component should render correctly the children and one h2 element', () => {
    const wrapper = shallow(<BodySection title="test title"><p>test children node</p></BodySection> );
    const h = wrapper.find('h2').text();
    const p = wrapper.find('p').text();
    expect(h).toEqual("test title");
    expect(p).toEqual("test children node");
    expect(wrapper.containsAllMatchingElements([h, p])).toEqual(true);
  });
});
=======
import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection tests', () => {
    it('renders properly', () => {
        shallow(<BodySection />);
    });
    it ('Correct rendering', () => {
       const children = <p>children of section</p>
       const wrapper = shallow(<BodySection title='example' children={children} />);

       const title = wrapper.find('h2');
       expect(title.text()).toEqual('example');
       expect(wrapper.prop('children')[1]).toEqual(children);
    })
})
>>>>>>> 3b7f4a80dcf88677b3eaaf4a7a76a9e7afc5ad6b

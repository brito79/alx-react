<<<<<<< HEAD
import React from "react";
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe("Testing BodySectionWithMarginBottom Component",() => {
  it('checking that shallowing the component should render correctly a BodySection component and that the props are passed correctly to the child component', () => {
    let wrapper = shallow(<BodySectionWithMarginBottom />);
		expect(wrapper.find("BodySection").exists()).toBe(true);
    wrapper = shallow(<BodySectionWithMarginBottom title="test title"><p>test children</p></BodySectionWithMarginBottom>)
		expect(wrapper.find("BodySection").props().title).toBe('test title');
  });
});
=======
import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom tests', () => {
    it('renders properly', () => {
        shallow(<BodySectionWithMarginBottom />);
    });
    it ('check content of component and rendering', () => {
        const children = <p>children of section</p>;
        const wrapper = shallow(<BodySectionWithMarginBottom title='test' children={children}/>);
        const section = wrapper.find(BodySection);
        expect(section.exists()).toBeTruthy();
        expect(section.prop('title')).toEqual('test');
        expect(section.prop('children')).toEqual(children); 
    })
})
>>>>>>> 3b7f4a80dcf88677b3eaaf4a7a76a9e7afc5ad6b

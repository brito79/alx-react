import React from 'react';
import { shallow } from 'enzyme';
<<<<<<< HEAD
import NotificationItem from './NotificationItem';

describe("Testing <NotificationItem />", () => {
  let  wrapper;

  it("<NotificationItem /> renders without crashing", () => {
    wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists());
  });

  it("<NotificationItem />  renders the correct html by passing dummy type and value props,", () => {
    wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find("li").text()).toBe("test");
    expect(wrapper.find("li").prop("data-notification-type")).toBe("default");
  });

  it("<NotificationItem />  renders the correct html by passing a dummy html prop,", () => {
    wrapper = shallow(<NotificationItem html={{__html:"<u>test</u>"}} />);
    expect(wrapper.find("li").html()).toBe("<li data-notification-type=\"default\"><u>test</u></li>");
  });
});
=======
import sinon from 'sinon';
import NotificationItems from './NotificationItem';

describe('Notification item tests', () => {
  it('test notification item on click', () => {
    const onclick = jest.fn();
    
    const wrapper = shallow(<NotificationItems markAsRead={onclick} id='1' />);
    wrapper.find('li').first().simulate('click');
    expect(onclick).toBeCalled();
  })
})
>>>>>>> 3b7f4a80dcf88677b3eaaf4a7a76a9e7afc5ad6b

import { expect, test } from '@jest/globals';
import { getFooterCopy, getFullYear,getLatestNotification } from './utils';


//check if getFullYear returns the correct year
test('getFullYear returns correct year', () => {
  expect(getFullYear()).toBe(new Date().getFullYear());
});

//test if getFooterCopy returns the correct string 
//if false
test('getFooterCopy returns the correct string if false', () =>{
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

//test getFooterCopy returns the correct string if
//input is true
test('getFooterCopy returns the correct string if true', () =>{
    expect(getFooterCopy(true)).toBe('Holberton School');
});

//test if getNotifications returns the correct html string

test('getLatestNotification returns the correct string', () =>{
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
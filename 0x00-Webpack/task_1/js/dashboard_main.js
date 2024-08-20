const $ = require('jquery');
const _ = require('lodash');

$('body').append(`
  <p>Holberton Dashboard</p>
  <p>Dashboard data for the students</p>
  <button>Click here to get started</button>
  <p id='count'></p>
  <p>Copyright - Holberton School</p>
    `);

let updateCounter = () => {
    let times = $('#count').html() || 0;
    $('button').on('click', () => {
        times++;
        $('#count').html(`${times} clicks on the button`);
    })
};

_.debounce(updateCounter, 500);
updateCounter();


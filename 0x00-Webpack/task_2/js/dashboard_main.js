import $ from "jquery";
import _ from 'lodash';

import '../css/main.css'; // Import your CSS file
// import logo from '../assets/holberton-logo'; // Import an image file

// Function to update the counter
let count = 0;
function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

// Debounced version of the updateCounter function
const debouncedUpdateCounter = _.debounce(updateCounter, 300);

// Document Ready Function
$(document).ready(() => {
  // add logo to the start of document
  $('body').prepend('<div id="logo"></div>');
  // Create and append elements
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="start-button">Click here to get started</button>');
  $('body').append("<p id='count'></p>");
  $('body').append('<p>Copyright - Holberton School</p>');

  // Bind the debounced function to the button click event
  $('#start-button').on('click', debouncedUpdateCounter);
});

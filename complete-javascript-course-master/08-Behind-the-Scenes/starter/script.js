'use strict';

const date = new Date();
let currentYear = date.getFullYear();

function calcAge(birthYear) {
  return currentYear - birthYear;
}

console.log(calcAge(1982));

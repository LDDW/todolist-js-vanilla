const moment = require('moment');

const number = document.querySelector('.number');
const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year');

number.innerHTML = moment.utc().format('DD');
day.innerHTML = moment.utc().format('dddd');
month.innerHTML = moment.utc().format('MMMM');
year.innerHTML = moment.utc().format('YYYY');
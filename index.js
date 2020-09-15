'use strict';

const signal = 'pink';

switch (signal) {
  case 'red':
    console.log('Stop');
    break;
  case 'yellow':
    console.log('Caution');
    break;
  case 'blue':
  case 'green':
    console.log('Go');
    break;
  default:
    console.log('Wrong signal');
    break;
}
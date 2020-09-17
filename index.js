'use strict';

{
  function update() {
    // document.querySelector('h1').textContent = 'Changed';
    // document.querySelector('#target').tectContent = 'Changed';
    document.getElementById('target').textContent = 'Changed';
  }

  setTimeout(update, 1000);
}
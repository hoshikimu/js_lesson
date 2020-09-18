'use strict';

{
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');

    // targetNode.classList.add('my-color')
    // if (targetNode.classList.contains('my-color')) {
    //   targetNode.classList.remove('my-color');
    // } else {
    //   targetNode.classList.add('my-color');
    // }
    targetNode.classList.toggle('my-color');
  });
}
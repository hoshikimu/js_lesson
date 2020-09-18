'use strict';

{
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target')

    targetNode.textContent = 'Changed';
    targetNode.title = 'This is Title';
    targetNode.style.color = 'red';
    targetNode.style.backgroundColor = 'skyblue';
  });
}
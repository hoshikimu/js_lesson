'use strict';

{
  const text = document.querySelector('textarea');

  // text.addEventListener('focus', () => {
  //   console.log('focus');
  // });

  // text.addEventListener('', () => {
  //   console.log('blur');
  // }); 

  text.addEventListener('input', () => {
    console.log(text.value.length);
  });

  text.addEventListener('change', () => {
    console.log('change');
  });
}
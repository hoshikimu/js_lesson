'use strict';

{
  const posts = [
    {
      text: 'aaaa',
      likeCount: 0,
      // show: function() {
      //   console.log(`${this.text} - ${this.likeCount}いいね`);
      // }
      show() {
        console.log(`${this.text} - ${this.likeCount}いいね`);
      }
    },
    {
      text: 'bbbb',
      likeCount: 0,
      show() {
        console.log(`${this.text} - ${this.likeCount}いいね`);
      }
    },
  ];

  posts[1].show();
}
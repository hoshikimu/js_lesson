'use strict';

{
  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount}いいね`);
    }

    static showInfo() {
      console.log('Post class version 1.0');
    }
  }

  const posts = [
    new Post('aaaa'),
    new Post('bbbb'),
  ];

  // posts[0].show();
  // posts[1].show();
  Post.showInfo();
}
'use strict';

{
  const posts = [
    {
      text: 'aaaa',
      likeCount: 0,
    },
    {
      text: 'bbbb',
      likeCount: 0,
    },
  ];

  function show(post) {
    console.log(`${post.text} - ${post.likeCount}いいね`)
  }

  show(posts[0]);
}
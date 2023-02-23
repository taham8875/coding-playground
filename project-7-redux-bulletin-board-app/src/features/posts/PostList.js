import { useSelector, useDispatch } from "react-redux";

import React from "react";

function PostList() {
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return (
    <section>
      <h2>Posts</h2>
      {posts.map((post) => {
        return (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </article>
        );
      })}
    </section>
  );
}

export default PostList;

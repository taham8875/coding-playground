import { useSelector, useDispatch } from "react-redux";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButtons from "./ReactionsButtons";

import React from "react";

function PostList() {
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return (
    <section className="m-3">
      <h2>Posts</h2>
      {posts.map((post) => {
        return (
          <article className="post border rounded p-3 mb-3" key={post.id}>
            <h3>{post.title}</h3>
            <p className="fs-4">{post.content}</p>
            <div className="mb-2">
              <PostAuthor userId={post.userId} />
              <TimeAgo timeStamp={post.date} />
            </div>
            <ReactionsButtons post={post} />
          </article>
        );
      })}
    </section>
  );
}

export default PostList;

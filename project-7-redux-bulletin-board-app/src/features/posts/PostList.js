import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButtons from "./ReactionsButtons";

import React from "react";
import { Link } from "react-router-dom";

function PostList() {
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  let content;

  if (status === "loading") {
    content = <div>Loading...</div>;
  } else if (status === "succeeded") {
    content = posts.map((post) => {
      return (
        <article className="post border rounded p-3 mb-3" key={post.id}>
          <h3>{post.title}</h3>
          <p className="fs-4">{post.body}</p>
          <Link to={`post/${post.id}`}>View Post</Link>
          <div className="mb-2">
            <PostAuthor userId={post.userId} />
            <Link
              className="text-reset text-decoration-none"
              to={`post/${post.id}`}
            >
              <TimeAgo timeStamp={post.date} />
            </Link>
          </div>
          <ReactionsButtons post={post} />
        </article>
      );
    });
  } else if (status === "rejected") {
    content = <div>{error}</div>;
  }

  return (
    <section className="m-3">
      <h2>Posts</h2>
      {content}
    </section>
  );
}

export default PostList;

import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButtons from "./ReactionsButtons";
import { fetchPosts } from "./postSlice";

import React from "react";

function PostList() {
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);
  let content;

  if (status === "loading") {
    content = <div>Loading...</div>;
  } else if (status === "succeeded") {
    content = posts.map((post) => {
      return (
        <article className="post border rounded p-3 mb-3" key={post.id}>
          <h3>{post.title}</h3>
          <p className="fs-4">{post.body}</p>
          <div className="mb-2">
            <PostAuthor userId={post.userId} />
            <TimeAgo timeStamp={post.date} />
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

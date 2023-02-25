import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import ReactionsButtons from "./ReactionsButtons";
import TimeAgo from "./TimeAgo";

export default function SinglePost() {
  let { postId } = useParams();
  postId = Number(postId);
  console.log(postId);

  const posts = useSelector((state) => state.posts.posts) || [];
  console.log(posts);

  const post = posts.find((post) => post.id == postId);

  // const post = useSelector((state) => state.posts.posts);
  console.log(post);
  if (!post) {
    return <h2>Post Not Found</h2>;
  }

  return (
    <article className="post border rounded p-3 mb-3" key={post.id}>
      <h3>
        {post.title}{" "}
        <span>
          <Link className="text-reset " to={`/post/update/${post.id}`}>
            {" "}
            🖊
          </Link>
        </span>{" "}
      </h3>
      <p className="fs-4">{post.body}</p>
      <div className="mb-2">
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
      </div>
      <ReactionsButtons post={post} />
    </article>
  );
}

import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Page404 from "../errors/Page404";
import PostAuthor from "../posts/PostAuthor";
import ReactionsButtons from "../posts/ReactionsButtons";
import TimeAgo from "../posts/TimeAgo";
export default function UsersList() {
  const { userId } = useParams();
  console.log("userid", userId);
  const users = useSelector((state) => state.users);
  console.log(users);
  const user = users.find((user) => user.id == userId);
  console.log(user);
  const posts = useSelector((state) => state.posts.posts);
  console.log(posts);
  const userPosts = posts?.filter((post) => userId == post.userId);
  console.log(userPosts);
  if (!user) {
    return <Page404 />;
  }

  let content = userPosts?.map((post) => {
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
  // console.log(content);
  return (
    <>
      <h3>
        Posts by {user.name} ({userPosts?.length})
      </h3>
      {content}
    </>
  );
}

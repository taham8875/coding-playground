import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postSlice";

export default function AddPostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onSavePostClick = () => {
    if (!title || !content) {
      window.alert("Empty title or content");
    } else {
      dispatch(postAdded(title, content));
      setTitle("");
      setContent("");
    }
  };

  return (
    <>
      <h2>Add New Post</h2>
      <form action="">
        <label className="d-block">
          <div>Title:</div>
          <input
            type="text"
            name="postTitle"
            id="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="d-block">
          <div>Content:</div>
          <textarea
            name="postContent"
            id="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <button type="button" onClick={onSavePostClick}>
          Save Post
        </button>
      </form>
    </>
  );
}

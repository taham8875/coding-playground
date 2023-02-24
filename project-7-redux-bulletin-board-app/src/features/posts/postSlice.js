import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "This is my first redux post",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      like: 0,
      love: 0,
      sad: 0,
    },
  },
  {
    id: "2",
    title: "Do you know",
    content: "Redux was created in facebook",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      like: 0,
      love: 0,
      sad: 0,
    },
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
      prepare(title, content, userId) {
        console.log(title);
        return {
          payload: {
            id: nanoid(),
            title: title,
            content: content,
            userId: userId,
            date: new Date().toISOString(),
            reactions: {
              like: 0,
              love: 0,
              sad: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export default postSlice.reducer;

export const { postAdded, reactionAdded } = postSlice.actions;

import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import axios from "axios";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  posts: null,
  status: "idle", // ['idle', 'loading', 'succeeded', 'failed']
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get(POSTS_URL);
    return response.data;
  } catch (error) {
    return error.message;
  }
});
export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (newPost) => {
    try {
      const response = await axios.past(POSTS_URL, newPost);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (updatedPost) => {
    const { id } = updatedPost;
    try {
      const response = await axios.put(`${POSTS_URL}/${id}`, updatedPost);
      console.log("response.data", response.data);
      return response.data;
    } catch (error) {
      return error.message; // for real apis
      // return updatedPost; // just for testing and working with jsonplaceholder fake api
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (deletedPost) => {
    const { id } = deletedPost;
    try {
      const response = await axios.delete(`${POSTS_URL}/${id}`);
      if (response?.status === 200) return deletedPost;
      return `${response?.status}, ${response?.statusText}`;
    } catch (error) {
      return error.message;
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";

        let min = 1;
        const loadedPosts = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString();
          post.reactions = {
            like: 0,
            love: 0,
            sad: 0,
          };
          return post;
        });
        state.posts = loadedPosts;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        action.meta.arg.id = nanoid();
        action.meta.arg.date = new Date().toISOString();
        action.meta.arg.reactions = {
          like: 0,
          love: 0,
          sad: 0,
        };
        state.posts.unshift(action.meta.arg);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        let id = action.meta.arg.id;
        id = Number(id);
        state.posts.forEach(function (post, i) {
          if (post.id == id) state.posts[i] = action.meta.arg;
        });
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        let id = action.meta.arg.id;
        id = Number(id);
        const posts = state.posts.filter((post) => post.id !== id);
        state.posts = posts;
      });
  },
});

export default postSlice.reducer;

export const { reactionAdded } = postSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "John Snow" },
  { id: "2", name: "Joe Doe" },
  { id: "3", name: "Tony Stark" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;

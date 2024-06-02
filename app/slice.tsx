import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
  name: "test",
  initialState: {
    value: [],
  },
  //   Storeを変更できる関数
  reducers: {
    addBook: (state, action) => {
      const payload = action.payload as never;
      state.value.push(payload);
    },
  },
});
export const { addBook } = testSlice.actions;
export default testSlice.reducer;

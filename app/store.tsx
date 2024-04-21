import { configureStore } from "@reduxjs/toolkit";
import { testSlice } from "./slice";

export default configureStore({
  reducer: {
    test: testSlice.reducer,
  },
});

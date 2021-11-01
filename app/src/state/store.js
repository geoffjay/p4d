import { configureStore } from "@reduxjs/toolkit";

import measurementReducer from "./features/measurement";

export default configureStore({
  reducer: {
    measurement: measurementReducer,
  },
});

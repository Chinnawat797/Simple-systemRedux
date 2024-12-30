import { configureStore } from "@reduxjs/toolkit";
import counterreducer from "./reducers"

const store = configureStore({
  reducer: {
    counter: counterreducer,
  },
})

export default store;
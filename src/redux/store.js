import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from './messages/reducer'

export const store = configureStore({
  reducer: {
    messages: messagesReducer
  }
})
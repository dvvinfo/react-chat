import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    messagesItem: []
  },
  reducers: {
    setMessages: (state, action) => {
      state.messagesItem.push(action.payload)
    }
  }
})

export const {setMessages} = messagesSlice.actions
export default messagesSlice.reducer
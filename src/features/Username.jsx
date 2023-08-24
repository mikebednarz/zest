import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "username",
  initialState: { value: window.localStorage.getItem('NAME') ? JSON.parse(window.localStorage.getItem('NAME')) : 'Stranger' },
  reducers: {
    changeUsername: (state, action) => {
      state.value = action.payload.username;
      window.localStorage.setItem('NAME', state.value);
    }
  }
});

export const { changeUsername } = userSlice.actions;
export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const tagsSlice = createSlice({
  name: "tags",
  initialState: { value: window.localStorage.getItem('TAGS') ? JSON.parse(window.localStorage.getItem('TAGS')) : {} },
  reducers: {
    addTags: (state, action) => {
      const splitTags = action.payload.tags.split(',');
      for (let i = 0; i < splitTags.length; i++) {
        if (splitTags[i].toUpperCase().trim() in state.value) {
          state.value[splitTags[i].toUpperCase().trim()] += 1;
        } else {
          state.value[splitTags[i].toUpperCase().trim()] = 1;
        }
      }
      window.localStorage.setItem('TAGS', JSON.stringify(state.value));
    },

    deleteTags: (state, action) => {
      const splitTags = action.payload.tags.split(',');
      for (let i = 0; i < splitTags.length; i++) {
        const trimmedTag = splitTags[i].trim().toUpperCase();
        state.value[trimmedTag] -= 1;
      }
      window.localStorage.setItem('TAGS', JSON.stringify(state.value));
    }
  }
});

export const { addTags, deleteTags } = tagsSlice.actions;
export default tagsSlice.reducer;
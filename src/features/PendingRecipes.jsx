import { createSlice } from "@reduxjs/toolkit";

const pendingRecipesSlice = createSlice({
  name: "pendingRecipes",
  initialState: { value: 0 },
  reducers: {
    addPendingRecipe: (state, action) => {
      console.log(state.value)
      state.value++;
      console.log(state.value)
    }
  }
});

export const { addPendingRecipe } = pendingRecipesSlice.actions;
export default pendingRecipesSlice.reducer;
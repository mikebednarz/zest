import { createSlice } from "@reduxjs/toolkit";

const pendingRecipesSlice = createSlice({
  name: "pendingRecipes",
  initialState: { value: 0 },
  reducers: {
    addPendingRecipe: (state) => {
      state.value++;
    }
  }
});

export const { addPendingRecipe } = pendingRecipesSlice.actions;
export default pendingRecipesSlice.reducer;
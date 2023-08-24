import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
  name: "recipes",
  initialState: { value: window.localStorage.getItem('RECIPE_STATE') ? JSON.parse(window.localStorage.getItem('RECIPE_STATE')) : [] },
  reducers: {
    addRecipe: (state, action) => {
      state.value.push(action.payload);
      window.localStorage.setItem('RECIPE_STATE', JSON.stringify(state.value));
    },

    deleteRecipe: (state, action) => {
      state.value = state.value.filter((recipe) => recipe.recipeName !== action.payload.recipeName);
      window.localStorage.setItem('RECIPE_STATE', JSON.stringify(state.value));
    },

    editRecipe: (state, action) => {
      state.value.forEach((recipe) => {
        if (recipe.id === action.payload.id) {
          recipe.recipeName = action.payload.recipeName;
          recipe.ingredients = action.payload.ingredients;
          recipe.instructions = action.payload.instructions;
        }
      });
      window.localStorage.setItem('RECIPE_STATE', JSON.stringify(state.value));
    }
  }
});

export const { addRecipe, deleteRecipe, editRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
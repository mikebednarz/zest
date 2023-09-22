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
          recipe.tags = action.payload.tags;
        }
      });
      window.localStorage.setItem('RECIPE_STATE', JSON.stringify(state.value));
    },

    updateRenderOrderByAdded: (state) => {
      state.value.sort((a, b) => {
        const IDA = a.id
        const IDB = b.id

        if (IDA < IDB) {
          return - 1;
        }
        if (IDA > IDB) {
          return 1;
        }
        return 0;
      });
    },

    updateRenderOrderByTitleA: (state) => {
      state.value.sort((a, b) => {
        const nameA = a.recipeName.toUpperCase();
        const nameB = b.recipeName.toUpperCase();

        if (nameA < nameB) {
          return - 1;
        }
        if (nameB > nameA) {
          return 1;
        }
        return 0;
      });
    },

    updateRenderOrderByTitleD: (state) => {
      state.value.sort((a, b) => {
        const nameA = a.recipeName.toUpperCase();
        const nameB = b.recipeName.toUpperCase();

        if (nameA > nameB) {
          return -1;
        }
        if (nameB < nameA) {
          return 1;
        }
        return 0;
      });
    },

    tagRenderChange: (state, action) => {
      if (action.payload.info === 'all') {
        state.value.forEach((recipe) => {
          recipe.display = true;
        });
      } else {
        state.value.forEach((recipe) => {
          recipe.display = false;
          const splitTags = recipe.tags.split(',');
          for (let i = 0; i < splitTags.length; i++) {
            const trimmedTag = splitTags[i].trim().toLowerCase();
            if (action.payload.info === trimmedTag) recipe.display = true;
          }
        });
      }
    }
  }
});

export const { addRecipe, deleteRecipe, editRecipe, updateRenderOrderByAdded, updateRenderOrderByTitleA, updateRenderOrderByTitleD, tagRenderChange } = recipeSlice.actions;
export default recipeSlice.reducer;
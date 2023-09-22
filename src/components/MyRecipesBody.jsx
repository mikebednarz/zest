import RecipeCard from "./RecipeCard";
import { useSelector } from "react-redux";
import { updateRenderOrderByAdded, updateRenderOrderByTitleA, updateRenderOrderByTitleD, tagRenderChange } from "../features/Recipes";
import { useDispatch } from "react-redux";

const MyRecipesBody = () => {
  const recipeList = useSelector(((state) => state.recipes.value));
  const tagsList = useSelector(((state) => state.tags.value));
  const dispatch = useDispatch();

  const handleOptionChange = () => {
    const dropdownBox = document.getElementById('dropdown');
    const selectedOption = dropdownBox.value;

    if (selectedOption === 'order-added') {
      dispatch(updateRenderOrderByAdded());
    } else if (selectedOption === 'titleA') {
      dispatch(updateRenderOrderByTitleA());
    } else {
      dispatch(updateRenderOrderByTitleD());
    }
  };

  const handleTagRenderChange = () => {
    const dropdownBox = document.getElementById('tags-dropdown');
    const selectedOption = dropdownBox.value;
    const selectedTag = selectedOption.slice(0, -3).trim().toLowerCase();
    if (selectedOption === 'all-recipes') {
      dispatch(tagRenderChange({ info: 'all' }));
    } else {
      dispatch(tagRenderChange({ info: selectedTag }));
    }
  }

  return (
    <div>
      <div className="dropdowns-container">
        <span className="sort-by">Sort By:</span>
          <select id='dropdown' onChange={() => handleOptionChange()} className="dropdown">
            <option value='order-added'>Order Added</option>
            <option value='titleA'>Recipe Name - Ascending</option>
            <option value='titleD'>Recipe Name - Descending</option>
          </select>
      </div>
      <div>
        {recipeList.map((recipe) => {
          return recipe.display === true && <RecipeCard key={recipe.id} uniqueID={recipe.id} recipeName={recipe.recipeName} ingredients={recipe.ingredients} instructions={recipe.instructions} tags={recipe.tags}/>
        })}
      </div>
      <div className="tags-container">
        <span className="tags-header">Tags:</span>
          <select id='tags-dropdown' className="tags-dropdown" onChange={() => handleTagRenderChange()}>
            <option id='tags-dropdown-option' className="tags-dropdown-option" value='all-recipes'>All Recipes</option>
              {Object.values(tagsList).map((value, i) => {
                return value > 0 && Object.keys(tagsList)[i] && <option id={`${Object.keys(tagsList)[i]}`}>{Object.keys(tagsList)[i]}{` (${value})`}</option>
              })}
          </select>
      </div>
    </div>
  )
};

export default MyRecipesBody;
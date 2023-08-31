import RecipeCard from "./RecipeCard";
import { useSelector } from "react-redux";
import { updateRenderOrderByAdded, updateRenderOrderByTitleA, updateRenderOrderByTitleD } from "../features/Recipes";
import { useDispatch } from "react-redux";

const MyRecipesBody = () => {
  const recipeList = useSelector(((state) => state.recipes.value));
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
          return <RecipeCard key={recipe.id} uniqueID={recipe.id} recipeName={recipe.recipeName} ingredients={recipe.ingredients} instructions={recipe.instructions} tags={recipe.tags}/>
        })}
      </div>
    </div>
  )
};

export default MyRecipesBody;
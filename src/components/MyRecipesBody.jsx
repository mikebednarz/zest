import RecipeCard from "./RecipeCard";
import { useSelector } from "react-redux";

const MyRecipesBody = () => {
  const recipeList = useSelector(((state) => state.recipes.value));

  return (
    <div>
      {recipeList.map((recipe) => {
        return <RecipeCard key={recipe.id} uniqueID={recipe.id} recipeName={recipe.recipeName} ingredients={recipe.ingredients} instructions={recipe.instructions}/>
      })}
    </div>
  )
};

export default MyRecipesBody;
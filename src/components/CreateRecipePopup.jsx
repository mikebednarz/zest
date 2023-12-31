import { addRecipe } from '../features/Recipes';
import { useDispatch, useSelector } from 'react-redux';
import { addPendingRecipe } from '../features/PendingRecipes';
import { addTags } from '../features/Tags';

const CreateRecipePopup = (props) => {
  const dispatch = useDispatch();
  const recipeList = useSelector((state) => state.recipes.value);

  const handleNewRecipe = (recipeName, ingredients, instructions, tags) => {
      dispatch(addRecipe({
        id: recipeList.length > 0 ? recipeList[recipeList.length - 1].id + 1 : 0,
        display: true,
        recipeName,
        ingredients,
        instructions,
        tags
      }));
      props.setTrigger(false);
      dispatch((addPendingRecipe()));
      dispatch(addTags({tags}));
  }

  return (props.trigger) ? (
    <div className="createRecipePopup">
      <div className="createRecipePopup-inner">
        <p className="cardSubtitle">Recipe Name:</p>
        <p className="cardInfo">{document.querySelector(".recipeName").value}</p>
        <p className="cardSubtitle">Ingredients:</p>
        <p className="cardInfo">{document.querySelector(".ingredients").value}</p>
        <p className="cardSubtitle">Instructions:</p>
        <p className="cardInfo">{document.querySelector(".instructions").value}</p>
        {document.querySelector(".tags").value && <p className='cardSubtitle'>Tags:</p>}
        {document.querySelector(".tags").value && <p className='cardInfo'>{document.querySelector(".tags").value}</p>}
        { props.children }
        <span className="popupButton" onClick={() => handleNewRecipe(document.querySelector(".recipeName").value, document.querySelector(".ingredients").value, document.querySelector(".instructions").value, document.querySelector(".tags").value)}>
          Save Recipe
        </span>
        <span className="popupButton" onClick={() => props.setTrigger(false)}>
          Close Without Saving Recipe
        </span>
      </div>
    </div>
  ) : "";
};

export default CreateRecipePopup;
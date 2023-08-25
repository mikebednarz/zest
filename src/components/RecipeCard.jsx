import { useDispatch } from "react-redux";
import { deleteRecipe } from "../features/Recipes";
import { AiFillDelete } from 'react-icons/ai';
import { FaPencilAlt } from 'react-icons/fa';

const RecipeCard = ({uniqueID, recipeName, ingredients, instructions}) => {
  const ingredientsArray = ingredients.split(',');
  const dispatch = useDispatch();

  const handleDeleteRecipe = (recipeName) => {
    dispatch(deleteRecipe({ recipeName }));
  };

  const handleRecipeEdit = (id, recipeName, ingredients, instructions, uniqueID) => {
    let ingredientsToArray = '';

    for (let i = 1; i < ingredients.split(`>- `).length; i++) {
      let string = '';
      if (i === 1) {
        for (let j = 0; j < ingredients.split(`>- `)[i].length; j++) {
          if (ingredients.split(`>- `)[i][j] === '<') {
            break;
          } else {
            string += ingredients.split(`>- `)[i][j];
          }
        }
        ingredientsToArray += `${string},`;
      } else {
        for (let j = 0; j < ingredients.split(`>- `)[i].length; j++) {
          if (ingredients.split(`>- `)[i][j] === '<') {
            break;
          } else {
            string += ingredients.split(`>- `)[i][j];
          }
        }
        ingredientsToArray += `${string},`;
      }
    };
    const finalIngredients = ingredientsToArray.substring(0, ingredientsToArray.length - 1);
    const data = {
      id: uniqueID,
      recipeName,
      ingredients: finalIngredients,
      instructions
    };
    window.localStorage.setItem('EDIT_RECIPE', JSON.stringify(data));
  }

  return (
    <div className="recipe-card-container">
      <div id={`recipeCard${recipeName}`} className="recipe-card" contentEditable='false'>
        <p  value={`recipeName${recipeName}`} className="recipe-card-subtitles"><strong>Recipe Name:</strong> </p>
        <p id={`recipeName${recipeName}`} className="instructions-box">
          {recipeName}
        </p>
        <div>
          <p className="recipe-card-subtitles"><strong>Ingredients:</strong></p>
          <ul id={`ingredients${recipeName}`}>
            {ingredientsArray.map((ingredient) => {
              return <li id={`ingredient${recipeName}`} className="ingredients-list">{`- ${ingredient}`}</li>
            })}
          </ul>
        </div>
        <br></br>
        <p className="recipe-card-subtitles"><strong>Instructions:</strong></p>
        <div className="instructions-box">
        <p id={`instructions${recipeName}`}>{instructions}</p>
        </div>
        <div className="edit-and-delete-card">
          <a href="/editcard"><FaPencilAlt className="edit-card" onClick={() => handleRecipeEdit(document.getElementById(`recipeCard${recipeName}`).innerHTML, document.getElementById(`recipeName${recipeName}`).innerHTML, document.getElementById(`ingredients${recipeName}`).innerHTML, document.getElementById(`instructions${recipeName}`).innerHTML, uniqueID)}/></a>

          <AiFillDelete className="delete-card" onClick={() => handleDeleteRecipe(document.getElementById(`recipeName${recipeName}`).innerHTML)}/>
        </div>
      </div>
    </div>

  )
};

export default RecipeCard;
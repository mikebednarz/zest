import { useDispatch } from "react-redux";
import { deleteRecipe, editRecipe } from "../features/Recipes";
import { AiFillDelete } from 'react-icons/ai';
import { FaPencilAlt } from 'react-icons/fa';

const RecipeCard = ({uniqueID, recipeName, ingredients, instructions}) => {
  const ingredientsArray = ingredients.split(',');
  const dispatch = useDispatch();

  const handleDeleteRecipe = (recipeName) => {
    dispatch(deleteRecipe({ recipeName }));
  };

  const handleEdits = (editID, recipeName, ingredients, instructions, uniqueID) => {
    if (editID.contentEditable === 'false') {
      editID.contentEditable = 'true';
    } else {
      let ingredientsToArray = '';

      for (let i = 1; i < ingredients.innerHTML.split(`>- `).length; i++) {
        let string = '';
        if (i === 1) {
          for (let j = 0; j < ingredients.innerHTML.split(`>- `)[i].length; j++) {
            if (ingredients.innerHTML.split(`>- `)[i][j] === '<') {
              break;
            } else {
              string += ingredients.innerHTML.split(`>- `)[i][j];
            }
          }
          ingredientsToArray += `${string},`;
        } else {
          for (let j = 0; j < ingredients.innerHTML.split(`>- `)[i].length; j++) {
            if (ingredients.innerHTML.split(`>- `)[i][j] === '<') {
              break;
            } else {
              string += ingredients.innerHTML.split(`>- `)[i][j];
            }
          }
          ingredientsToArray += `${string},`;
        }
      };
      const finalIngredients = ingredientsToArray.substring(0, ingredientsToArray.length - 1);
      dispatch(editRecipe({ id: uniqueID, recipeName: recipeName.innerHTML, ingredients: finalIngredients, instructions: instructions.innerHTML }));
      editID.contentEditable = 'false';
    };
  };

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
        {/* <button className="delete-card-button" onClick={() => handleDeleteRecipe(document.getElementById(`recipeName${recipeName}`).innerHTML)}>X</button> */}
        <div className="edit-and-delete-card">
          <FaPencilAlt className="edit-card" onClick={() => handleEdits(document.getElementById(`recipeCard${recipeName}`), document.getElementById(`recipeName${recipeName}`), document.getElementById(`ingredients${recipeName}`), document.getElementById(`instructions${recipeName}`), uniqueID)}/>
          <AiFillDelete className="delete-card" onClick={() => handleDeleteRecipe(document.getElementById(`recipeName${recipeName}`).innerHTML)}/>
        </div>
      </div>
    </div>

  )
};

export default RecipeCard;
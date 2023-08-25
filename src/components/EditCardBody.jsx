import { AiFillCheckCircle } from 'react-icons/ai';
import { editRecipe } from '../features/Recipes';
import { useDispatch } from 'react-redux';

const EditCardBody = () => {
  const data = JSON.parse(window.localStorage.getItem('EDIT_RECIPE'));
  const dispatch = useDispatch();

  const handleEditSave = () => {
    const id = data.id;
    const recipeName = document.getElementById('edit-recipe-name').innerHTML;
    const ingredients = document.getElementById('edit-recipe-ingredients').innerHTML;
    const instructions = document.getElementById('edit-recipe-instructions').innerHTML;
    dispatch(editRecipe({id, recipeName, ingredients, instructions }));
    document.getElementById('save-edits').style.color === 'green' ? document.getElementById('save-edits').style.color = 'grey' : document.getElementById('save-edits').style.color = 'green';
  }

  return (
    <div>
      <div className="recipe-card-container">
        <div className="recipe-card">
            <p className="recipe-card-subtitles"><strong>Recipe Name:</strong> </p>
            <p className="instructions-box" id='edit-recipe-name' contentEditable='true'>
              {data.recipeName}
            </p>
          <div>
            <p className="recipe-card-subtitles"><strong>Ingredients:</strong></p>
            <p className="instructions-box" id='edit-recipe-ingredients' contentEditable='true'>{data.ingredients}</p>
          </div>
            <p className="recipe-card-subtitles"><strong>Instructions:</strong></p>
          <div className="instructions-box">
            <p id='edit-recipe-instructions' contentEditable='true'>{data.instructions}</p>
          </div>
          <div className="save-edits-container">
            <AiFillCheckCircle className='save-edits-button' id='save-edits' onClick={() => handleEditSave()} style={{ color: 'grey', cursor: 'pointer'}}/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default EditCardBody;
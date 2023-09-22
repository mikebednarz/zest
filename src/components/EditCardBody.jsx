import { AiFillCheckCircle } from 'react-icons/ai';
import { editRecipe } from '../features/Recipes';
import { addTags, removeTagsAfterEdit } from '../features/Tags';
import { useDispatch } from 'react-redux';

const EditCardBody = () => {
  const data = JSON.parse(window.localStorage.getItem('EDIT_RECIPE'));
  const originalTags = data.tags;
  const dispatch = useDispatch();

  const handleEditSave = () => {
    const id = data.id;
    const recipeName = document.getElementById('edit-recipe-name').innerHTML;
    const ingredients = document.getElementById('edit-recipe-ingredients').innerHTML;
    const instructions = document.getElementById('edit-recipe-instructions').innerHTML;
    const tags = document.getElementById('edit-recipe-tags').innerHTML;

    const splitTags = tags.split(',');
    let newTags = '';
    for (let i = 0; i < splitTags.length; i++) {
      if (!originalTags.includes(splitTags[i]) && splitTags[i].length > 0) newTags += `${splitTags[i]}, `;
    };

    dispatch(addTags({ tags: newTags }));

    const removeTags = [];

    for (let i = 0; i < originalTags.split(',').length; i++) {
      console.log('originalTags:', originalTags)
      console.log('splitTags:', splitTags)
      let deleteTag = true;
      for (let j = 0; j < splitTags.length; j++) {
        if (originalTags.split(',')[i] === splitTags[j]) {
          deleteTag = false;
        }
      }
      if (deleteTag === true) {
        removeTags.push(originalTags.split(',')[i].trim());
      }
    }
    console.log('removeTags:', removeTags)
    if (removeTags.length > 0) {
      dispatch(removeTagsAfterEdit({ removeTags }));
    }

    dispatch(editRecipe({ id, recipeName, ingredients, instructions, tags }));
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
          <div>
            <p className='recipe-card-subtitles'><strong>Tags:</strong></p>
            <p className='instructions-box' id='edit-recipe-tags' contentEditable='true'>{data.tags}</p>
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
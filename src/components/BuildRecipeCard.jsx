import { useState } from "react";
import CreateRecipePopup from "./CreateRecipePopup";

const BuildRecipeCard = () => {
  const [cardPopup, setCardPopup] = useState(false);

  const handleOptionChange = () => {
    const dropdownBox = document.getElementById('dropdown');
    const selectedOption = dropdownBox?.value;

    if (selectedOption === 'order-added') {
      // dispatch(updateRenderOrderByAdded())
    } else if (selectedOption === 'titleA') {
      // dispatch(updateRenderOrderByTitleA())
    } else {
      // dispatch(updateRenderOrderByTitleD())
    }
  }

  return (
    <div className="container">
      <div className="dropdowns-container">
          <span className="sort-by">Sort By</span>
          <select id='dropdown' onChange={handleOptionChange} className="dropdown">
            <option value='order-added'>Order Added</option>
            <option value='titleA'>Title - Ascending</option>
            <option value='titleD'>Title - Descending</option>
          </select>
      </div>
        <h3 className="createRecipe">Build Recipe Card:</h3>

      <div className="webflow-style-input">
        <input className="recipeName" type="text" placeholder="Recipe Name"></input>
        <button type="submit"><i className="icon ion-android-arrow-forward"></i></button>
      </div>

      <div className="webflow-style-input">
        <input className="ingredients" type="text" placeholder="Ingredients"></input>
        <button type="submit"><i className="icon ion-android-arrow-forward"></i></button>
      </div>
    
      <div className="webflow-style-input">
        <input className="instructions" type="text" placeholder="Instructions"></input>
        <button type="submit"><i className="icon ion-android-arrow-forward"></i></button>
      </div>

      <div className="buttondiv">
        <button className="button" onClick={() => setCardPopup(true)}>
          Create Recipe
        </button>
      </div>
      <CreateRecipePopup trigger={cardPopup} setTrigger={setCardPopup}/>
    </div>
  )
};

export default BuildRecipeCard
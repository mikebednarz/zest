import { useState } from "react";
import CreateRecipePopup from "./CreateRecipePopup";

//TODO: add tag sorting functionality

const BuildRecipeCard = () => {
  const [cardPopup, setCardPopup] = useState(false);

  return (
    <div className="container">
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

      <div className="webflow-style-input">
        <input className="tags" type="text" placeholder="Tags (optional)"></input>
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
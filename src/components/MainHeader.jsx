import { useState } from "react";
import { useSelector } from "react-redux";
import PendingRecipesDisplay from "./PendingRecipesDisplay";
import EditNamePopup from "./EditNamePopup";

//TODO: add delete tags functionality when removing a recipe && figure out bug in sorting recipes

const MainHeader = () => {
  const [editNamePopup, setEditNamePopup] = useState(false);
  const username = useSelector((state) => state.username.value);
  const pendingRecipeCount = useSelector((state) => state.pendingRecipes.value);

  return (
    <div className="header">
      <h1 className="heading">Zest</h1>
      <div className="main-header-subtext-div">
        <p className="main-header-subtext">{`Hello, ${username}!`}</p>
        <span className="main-header-subtext-3" onClick={() => setEditNamePopup(true)}>Edit Name</span>
        <span className="main-header-subtext-2">{` | `}</span>
        <a href="/myrecipes" className="main-header-subtext-2">My Recipes{pendingRecipeCount > 0 && <PendingRecipesDisplay count={pendingRecipeCount}/>}</a>
      </div>
      <EditNamePopup trigger={editNamePopup} setTrigger={setEditNamePopup}/>
    </div>
  )
};

export default MainHeader;
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeUsername } from "../features/Username";

const EditNamePopup = (props) => {
  const [newUsername, setNewUsername] = useState('');
  const dispatch = useDispatch();

  const handleNewUserInput = (event) => {
    setNewUsername(event.target.value);
  }

  const handleNewUsername = (newUsername) => {
    dispatch(changeUsername({ username: newUsername }));
    window.localStorage.setItem('NAME', JSON.stringify(newUsername));
    props.setTrigger(false);
  }

  return (props.trigger) ? (
    <div className="createRecipePopup">
      <div className="createRecipePopup-inner">
        <p className="what-is-your-name">What is your name?</p>
        <input placeholder="Enter name here!" className="enter-name" onChange={handleNewUserInput}></input>
        <span className="popupButton" onClick={() => handleNewUsername(newUsername)}>
          Save new name
        </span>
        <span className="popupButton" onClick={() => props.setTrigger(false)}>
          Nevermind I like my name
        </span>
      </div>
    </div>
  ) : "";
};

export default EditNamePopup;
import React, { useContext, useEffect } from "react";
import { GeneralContext } from "../Contexts/GeneralContext";
import "../Styles/ChooseMap.scss";
import Bureau1 from "../images/Bureau1.png";
import Bibliotheque from "../images/Bibliotheque.png";
import Foret from "../images/Foret.png";
import Jardin from "../images/Jardin.png";

function ChooseMap(props) {
  const handleBackHomeClick = () => {
    props.history.push("/");
  };
  const { worldID, setWorldID } = useContext(GeneralContext);

  const bureau = "bureau";
  const bibliotheque = "bibliotheque"
  const foret = "foret"
  const jardin = "jardin"

  const getWorldId = (id) => {
    setWorldID(id);
    console.log("console log de l'id: " + id);
    console.log("console log du state " + worldID);
  };

  return (
    <div className="choosemap-body">
      <div className="titleChoooseMapContainer">
        <h1 className="titleChooseMap">
          <span className="titleChooseMap1">Choose </span>Your Map !
        </h1>
      </div>

      <div className="ChoiceContainer">
        <div className="World1">
          <img src={Bureau1} alt="bureau" onClick={() => getWorldId(bureau)} />
        </div>
        <div className="World2">
          <img src={Bibliotheque} alt="bibliothèque" onClick={() => getWorldId(bibliotheque)}/>
        </div>
        <div className="World3">
          <img src={Foret} alt="foret" onClick={() => getWorldId(foret)}/>
        </div>
        <div className="World4">
          <img className="jardin" src={Jardin} alt="jardin"  onClick={() => getWorldId(jardin)}/>
        </div>
      </div>
      <form className="choosemap-form">
        <button onClick={handleBackHomeClick} className="button-back">
          back to menu
        </button>
      </form>
    </div>
  );
}

export default ChooseMap;

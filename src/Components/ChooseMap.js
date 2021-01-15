import React, { useContext } from "react";
import { GeneralContext } from "../Contexts/GeneralContext";
import "../Styles/ChooseMap.scss";
import Bureau1 from "../images/Bureau1.png";
import Bibliotheque from "../images/Bibliotheque.png";
import Foret from "../images/Foret.png";
import Jardin from "../images/Jardin.png";

export default function ChooseMap(props) {
  const handleBackHomeClick = () => {
    props.history.push("/");
  };

  const handleGoGame = () => {
    props.history.push("/Game/:iduser");
  };
  const { worldID, setWorldID } = useContext(GeneralContext);

  const bureau = "bureau";
  const bibliotheque = "bibliotheque";
  const foret = "foret";
  const jardin = "jardin";

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
          <img src={Bureau1} alt="bureau" onClick={handleGoGame} />
        </div>
        <div className="World2">
          <img onClick={handleGoGame} src={Bibliotheque} alt="bibliothèque" />
        </div>
        <div className="World3">
          <img onClick={handleGoGame} src={Foret} alt="foret" />
        </div>
        <div className="World4">
          <img
            onClick={handleGoGame}
            className="jardin"
            src={Jardin}
            alt="jardin"
          />
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

import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "../Styles/ChooseMap.scss";
import Bureau1 from "../images/Bureau1.png";
import Bibliotheque from "../images/Bibliotheque.png";
import Foret from "../images/Foret.png";
import Jardin from "../images/Jardin.png";
import Balcon from "../images/Balcon.png";
import Salle from "../images/Salle.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function ChooseMap() {
  return (
    <div className="choosemap-body">
      <div className="choosemap-title-container">
        {" "}
        <h1
          className="choosemap-title"
          style={{ textAlign: "center", padding: "20px" }}
        >
          Choose your map
        </h1>
      </div>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img style={{ width: "100%", height: "100%" }} src={Bureau1} />
          </Item>
          <Item>
            {" "}
            <img style={{ width: "100%", height: "100%" }} src={Bibliotheque} />
          </Item>
          <Item>
            <img style={{ width: "100%", height: "100%" }} src={Foret} />
          </Item>
          <Item>
            <img style={{ width: "100%", height: "100%" }} src={Jardin} />
          </Item>
          <Item>
            <img style={{ width: "100%", height: "100%" }} src={Balcon} />
          </Item>
          <Item>
            <img style={{ width: "100%", height: "100%" }} src={Salle} />
          </Item>
        </Carousel>
      </div>
    </div>
  );
}

export default ChooseMap;

import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "../Styles/ChooseMap.scss";
import Bureau1 from "../images/Bureau1.png";
import Bibliotheque from "../images/Bibliotheque.png";
import Foret from "../images/Foret.png";
import Jardin from "../images/Jardin.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function ChooseMap() {
  return (
    <div className="choosemap-body">
      <h1 style={{ textAlign: "center" }}>Choose your map</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img src={Bureau1} />
          </Item>
          <Item>
            {" "}
            <img src={Bibliotheque} />
          </Item>
          <Item>
            <img src={Foret} />
          </Item>
          <Item>
            <img src={Jardin} />
          </Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>
      </div>
    </div>
  );
}

export default ChooseMap;

import react from "react";
import herbicide from "../images/herbicide.png";
import fertilizer from "../images/fertilizer.png";
import groceries from "../images/groceries.png";
import pesticide from "../images/pesticide.png";
import pot from "../images/pot.png";
import seeds from "../images/seeds.png";
import sprinkler from "../images/sprinkler.png";
import tools from "../images/tools.png";

import styles from "./styles.css";

let x = 0;

export function Images() {
  return (
    <div className="images-con">
      <div className="categories">
        <h3>Categories.</h3>
      </div>

      <div className="imgArray-con">
        <div className="img-arr">
          <div className="icon">
            <div className="image">
              <img src={pesticide} />
            </div>
            <p>Pesticide & Herbicides</p>
          </div>

          <div className="icon">
            <div className="image">
              <img src={fertilizer} />
            </div>
            <p>Fertilizer</p>
          </div>
          <div className="icon">
            <div className="image">
              <img src={tools} />
            </div>
            <p>Tools</p>
          </div>
          <div className="icon">
            <div className="image">
              <img src={seeds} />
            </div>
            <p>Seeds</p>
          </div>
          <div className="icon">
            <div className="image">
              <img src={pot} />
            </div>

            <p>Nursery & Seedlings</p>
          </div>
        </div>
      </div>

      <div className="see-more-con-xl">
        <p className="see-more">see more</p>
      </div>
    </div>
  );
}

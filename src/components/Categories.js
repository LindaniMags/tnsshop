import React from "react";

import beekeep from "../images/Cat/apitherapy.png";
import feed from "../images/Cat/chicken-rice.png";
import pesticide from "../images/Cat/pesticide.png";
import suit from "../images/Cat/coverall.png";
import fertilizer from "../images/Cat/fertilizer.png";
import pack from "../images/Cat/groceries.png";
import seeds from "../images/Cat/seeds.png";
import sprinkler from "../images/Cat/sprinkler.png";
import tools from "../images/Cat/tools.png";
import vaccine from "../images/Cat/vaccine.png";

export const Categories = () => {
  return (
    <div className="categories-con">
      <div className="category-con">
        <h1>Categories</h1>
        <div className="cat-items">
          <div className="cat-icon">
            <div className="cat-image">
              <img src={sprinkler} alt="icons" />
            </div>
            <p>Irrigation</p>
          </div>
          <div className="cat-icon">
            <div className="cat-image">
              <img src={suit} alt="icons" />
            </div>
            <p>Protective Wear</p>
          </div>
          <div className="cat-icon">
            <div className="cat-image">
              <img src={tools} alt="icons" />
            </div>
            <p>Tools & Equipment</p>
          </div>
          <div className="cat-icon">
            <div className="cat-image">
              <img src={seeds} alt="icons" />
            </div>
            <p>Seeds</p>
          </div>
          <div className="cat-icon">
            <div className="cat-image">
              <img src={fertilizer} alt="icons" />
            </div>
            <p>Fertilizer</p>
          </div>
          <div className="cat-icon">
            <div className="cat-image">
              <img src={feed} alt="icons" />
            </div>
            <p>Animal Feed</p>
          </div>
          <div className="cat-icon">
            <div className="cat-image">
              <img src={pesticide} alt="icons" />
            </div>
            <p>Pesticides & Herbicides</p>
          </div>
          <div className="cat-icon">
            <div className="cat-image">
              <img src={beekeep} alt="icons" />
            </div>
            <p>BeeKeeping</p>
          </div>
          <div className="cat-icon">
            <div className="cat-image">
              <img src={pack} alt="icons" />
            </div>
            <p>Packaging Material</p>
          </div>
          <div className="cat-icon">
            <div className="cat-image">
              <img src={vaccine} alt="icons" />
            </div>
            <p>Animal Medication</p>
          </div>
        </div>
      </div>
      <div className="promo-con">
        <h2>Other Things You Might Be Interested In</h2>
        <div className="promo-items">
          <div className="promo-item promo1">
            <div className="promo"></div>
          </div>
          <div className="promo-item promo2">
            <div className="promo"></div>
          </div>
          <div className="promo-item promo3">
            <div className="promo"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

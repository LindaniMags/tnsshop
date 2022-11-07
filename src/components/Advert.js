import React from "react";
import book from "../images/ts-pp.png";

export const Advert = () => {
  return (
    <div>
      <div className="adSpace2">
        <div className="edu-pic">
          <img src={book} alt="ad img2" />
        </div>

        <div className="ad2">
          <h2>
            If It Has Anything To Do With Farming, It Has Everything To Do With
            Us.{" "}
          </h2>
          <button className="takeMe-btn">TAKE ME THERE</button>
        </div>
      </div>
    </div>
  );
};

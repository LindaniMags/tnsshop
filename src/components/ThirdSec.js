import React from "react";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import vet from "../images/services/vet-c.png";
import greenhouse from "../images/services/greenhouse-c.png";
import solar from "../images/services/solar-energy-c.png";
import layout from "../images/services/layout-c.png";
import ff from "../images/fast-forward.gif";

export const ThirdSec = () => {
  return (
    <div className="sec3-con">
      <div className="sec3-left">
        <h1>TAKE A LOOK AT SOME OF THE QUALITY SERVICES WE OFFER</h1>
      </div>
      <div className="sec3-right">
        <div className="products">
          <div className="product-con">
            <div className="product">
              <div className="con">
                <img src={greenhouse} />
              </div>
              <p>GreenHouse Solutions</p>
            </div>
            <div className="arrow-con">
              <img src={ff} />
            </div>
          </div>
          <div className="product-con">
            <div className="product">
              <div className="con">
                <img src={vet} />
              </div>
              <p>Vet Services</p>
            </div>
            <div className="arrow-con">
              <img src={ff} />
            </div>
          </div>
          <div className="product-con">
            <div className="product">
              <div className="con">
                <img src={layout} />
              </div>
              <p>Farm Layout and Design</p>
            </div>
            <div className="arrow-con">
              <img src={ff} />
            </div>
          </div>
          <div className="product-con">
            <div className="product">
              <div className="con">
                <img src={solar} />
              </div>
              <p>Solar Solutions</p>
            </div>
            <div className="arrow-con">
              <img src={ff} />
            </div>
          </div>
        </div>
        <div className="view-more">
          <a href="lindanimags.github.io">View more</a>
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
};

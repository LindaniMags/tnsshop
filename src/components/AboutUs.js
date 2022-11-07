import React from "react";
import food from "../images/feed.jpg";
import irrig from "../images/irrig.jpg";

export const AboutUs = () => {
  return (
    <div>
      <div className="about-us">
        <h1>About Us</h1>
      </div>
      <div className="about-con">
        <div className="pairs pair1">
          <div className="content">
            <div className="text">
              <h3>Mission</h3>
              <hr className="hr-title" />
              <p>
                We Aim To Supply High Quality Services And Products Manufactured
                According To International Standards And Effective Supply Chain
                Management. Our Vision Is To Offer Supply Solutions To Our
                Business Associates’ Requirements Through Innovation And
                Effective Sourcing Of Products.
              </p>
            </div>
          </div>
          <div className="view">
            <img src={food} />
          </div>
        </div>
        <div className="pairs pair2">
          <div className="view">
            <img src={irrig} />
          </div>
          <div className="content">
            <div className="goals">
              <h3>Goals</h3>
              <hr className="hr-title" />
              <div className="goal">
                <p>
                  Maintaining A High Degree Of Professional Business Conduct
                </p>
              </div>
              <div className="goal">
                <p>Supply High Quality Products</p>
              </div>
              <div className="goal">
                <p>Provide Conducive Working Environment For Our Employees</p>
              </div>
              <div className="goal">
                <p>Increase Sales And Keep Cost Of Supply Low</p>
              </div>
              <div className="goal">
                <p>Empower Our Employees </p>
              </div>
              <div className="goal">
                <p>
                  Play A Major Role In Social Responsibility Activities In The
                  Kingdom Of Eswatini
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import Maskgroup from "../images/Mask group.png";
import search from "../images/Group 149.png";
import phone from "../images/phone 1.png";
import tslogo from "../images/TS logo.png";
import { TiThMenuOutline } from "react-icons/ti";
import { GrClose } from "react-icons/gr";
import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { Hero } from "./Hero";
import { Footer } from "./Footer";

export function TopSec() {
  const [active, setActive] = React.useState(false);

  function menu() {
    setActive((prevState) => !prevState);
  }

  return (
    <div>
      <div className="header-con">
        <div className="b-menu">
          <TiThMenuOutline className="menu-icon" onClick={menu} />
          <div className={active ? "menu-icon-active" : "menu-icon-inactive"}>
            <ul className="nav-list-active">
              <li>
                <NavLink to="/home">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/categories">CATEGORIES</NavLink>
              </li>
              <li>
                <NavLink to="/services">SERVICES</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">ABOUT US</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us">CONTACT US</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="tslogo">
          <img src={tslogo} className="icon" alt="logo" />
        </div>

        <div className="cell-con">
          <img src={phone} alt="cell" />
          <p>+268 7612 3456</p>
        </div>
      </div>
      <div className="nav-con">
        <ul className="nav-list">
          <li>
            <NavLink to="tnsshop/home">HOME</NavLink>
          </li>
          <li>
            <NavLink to="tnsshop/categories">CATEGORIES</NavLink>
          </li>
          <li>
            <NavLink to="tnsshop/services">SERVICES</NavLink>
          </li>
          <li>
            <NavLink to="tnsshop/about-us">ABOUT US</NavLink>
          </li>
          <li>
            <NavLink to="tnsshop/contact-us">CONTACT US</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

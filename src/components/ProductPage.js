import React from 'react'

export const ProductPage = (props) => {
  return (
    <div>
      <div className="head-con">
        <h1>IRRIGATION</h1>
      </div>
      <div className="sec-con">
        <div className="types-con">
          <ul className="types-list">
            <li>
              <NavLink to="Irrigate">Fittings</NavLink>
            </li>
            <li>
              <NavLink to="SeedsCon">Valves</NavLink>
            </li>
            <li>Pipes</li>
          </ul>
        </div>
        <Outlet className="product-con" />
      </div>
    </div>
  );
}

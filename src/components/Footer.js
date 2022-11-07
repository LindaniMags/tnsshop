import { FaBahai } from "react-icons/fa";
import tslogo from "../images/TS logo.png";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-items">
        <p>About Us</p>
        <p>Visit Us</p>
        <p>Suppliers</p>
        <p>Buy</p>
      </div>
      <div className="footer-items">
        <p>Policies</p>
        <p>Returns</p>
        <p>Ts&Cs</p>
      </div>

      <div className="footer-banner">
        <img src={tslogo} />
        <p>FARM SHOP</p>
      </div>
    </div>
  );
}

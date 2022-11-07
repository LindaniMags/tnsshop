import "./App.css";
import { TopSec } from "./components/TopSec";
import { ThirdSec } from "./components/ThirdSec";
import { Footer } from "./components/Footer";
import { Images } from "./components/Images";
import { Advert } from "./components/Advert";
import { Link, Route, Routes } from "react-router-dom";
import { Products } from "./components/Products";
import { Services } from "./components/Services";
import { Suppliers } from "./components/Suppliers";

function App() {
  return (
    <div className="App">
      <Link to="products">Products</Link>
      <TopSec />
      <Images />
      <ThirdSec />
      <Advert />
      <Footer />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/suppliers" element={<Suppliers />} />
      </Routes>
    </div>
  );
}

export default App;

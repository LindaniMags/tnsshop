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
import { Home } from "./components/Home";
import { Categories } from "./components/Categories";
import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <TopSec />

      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />

        <Route path="top-sec/services" element={<Services />} />
        <Route path="services" element={<Services />} />
        <Route path="categories" element={<Categories />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Routes>

      <Footer />
    </div>
  );
}

/*
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="services" element={<Services />} />
        <Route path="suppliers" element={<Suppliers />} />
        <Route path="categories" element={<Categories />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<Products />} />
      </Routes>
*/

/*

<ContactUs />

*/

export default App;

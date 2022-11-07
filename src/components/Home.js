import React from "react";
import { Footer } from "./Footer";
import { TopSec } from "./TopSec";
import { ThirdSec } from "./ThirdSec";
import { Images } from "./Images";
import { Advert } from "./Advert";
import { Hero } from "./Hero";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Images />
      <ThirdSec />
      <Advert />
    </div>
  );
};
/*
      <TopSec />
      <Images />
      <ThirdSec />
      <Advert />
      <Footer />
*/

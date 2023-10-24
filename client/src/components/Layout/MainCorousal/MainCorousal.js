import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCorousalData } from "./MainCorousalData";

const items = MainCorousalData.map((item) => (
  <img className="corousal-img mt-3" src={item.image} alt="" />
));

const MainCorousal = () => (
  <AliceCarousel
    mouseTracking
    items={items} 
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
  />
);

export default MainCorousal;

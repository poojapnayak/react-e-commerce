import React from "react";
import "./Offers.css";

//Images
import exclusive_image from "../Assests/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BESTSELLER PRODUCT</p>
        <button>Check Now</button>
      </div>
      <div className="offer-right">
        <img src={exclusive_image} alt="exclusive-img" />
      </div>
    </div>
  );
};

export default Offers;

import React from "react";
import "./Breadcrum.css";

//Images
import arrow_icon from "../Assests/breadcrum_arrow.png";

const Breadcrums = (props) => {
  const { product } = props;

  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrums;

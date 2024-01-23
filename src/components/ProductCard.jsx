import React from "react";

const ProductCard = ({ name, surname, phone, img }) => {
  return (
    <div className="container">
      <img className="img" src={img} alt="" />
      <p>
        <span>{name} </span>
        <span>{surname}</span>
      </p>
      <p>{phone}</p>
    </div>
  );
};

export default ProductCard;

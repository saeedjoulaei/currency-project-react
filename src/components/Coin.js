import React from "react";

const Coin = ({ name, symbol, price, priceChange, marketCap, image }) => {
  return (
    <div>
      <img src={image} alt="coin" />
      <span>{name}</span>
      <span>{symbol.toUpperCase()}</span>
      <span>{price.toLocaleString()}</span>
      <span>{priceChange}</span>
      <span>{marketCap.toLocaleString()}</span>
    </div>
  );
};

export default Coin;

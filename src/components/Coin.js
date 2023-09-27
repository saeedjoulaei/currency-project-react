import React from "react";
//styles
import styles from "../components/Coin.module.css";
const Coin = ({ name, symbol, price, priceChange, marketCap, image }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="coin" />
      <span className={styles.name}>{name}</span>
      <span className={styles.symbol}>{symbol.toUpperCase()}</span>
      <span className={styles.currentPrice}>$ {price.toLocaleString()}</span>
      <span
        className={
          priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange
        }
      >
        {priceChange.toFixed(2)}
      </span>
      <span>$ {marketCap.toLocaleString()}</span>
    </div>
  );
};

export default Coin;

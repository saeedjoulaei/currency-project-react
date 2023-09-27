import React, { useEffect, useState } from "react";
import { getCoin } from "../services/api";
//components
import Loader from "./Loader";
import Coin from "./Coin";
//styles
import styles from "../components/Landing.module.css";
const Landing = () => {
  const [coins, setCoin] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCoin();
      console.log(data);
      setCoin(data);
    };
    fetchApi();
  }, []);
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const seachedCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        className={styles.input}
        type="text"
        placeholder="Search"
        value={search}
        onChange={searchHandler}
      />
      {coins.length ? (
        <div className={styles.coinContainer}>
          {seachedCoins.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              marketCap={coin.market_cap}
              priceChange={coin.price_change_percentage_24h}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Landing;

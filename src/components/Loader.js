import React from "react";

//gif
import gif from "../gif/spinner.gif";
const Loader = () => {
  return (
    <div>
      <img src={gif} alt="gif" />
      <h1>loading...</h1>
    </div>
  );
};

export default Loader;

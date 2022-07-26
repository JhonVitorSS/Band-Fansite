import React from "react";
import Leftside from "./Leftside";
import Rightside from "./Homerightside";
import { Routes, Route, Link } from "react-router-dom";

import "../sass/main.sass";


const Home = () => {
  return (
    <>
      <div class="wallpaper-hover"></div>
      <div class="wallpaper-mother"></div>

      <div class="mother">
        <Leftside />
        <Rightside />
      </div>
    </>
  );
};

export default Home;

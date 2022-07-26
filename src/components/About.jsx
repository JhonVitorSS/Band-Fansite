import React from "react";
import Leftside from "./Leftside";
import Aboutrightside from "./Aboutrightside";


const About = () => {
  return (
    <>
      <div class="wallpaaper-hover"></div>
      <div class="wallpaaper-mother"></div>

      <div class="mother">
        <Leftside />
        <Aboutrightside />
      </div>
    </>
  );
};

export default About;

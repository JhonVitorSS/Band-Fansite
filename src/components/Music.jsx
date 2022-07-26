import React from 'react'
import Musicright from "./Musicrightside"
import Leftside from "./Leftside";

const Music = () => {
  return (
    <>
      <div class="wallpaaper-hover"></div>
      <div class="wallpaaper-mother"></div>

      <div class="mother">
        <Leftside />
        <Musicright />
      </div>
    </>
  );
}

export default Music
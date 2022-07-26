import React from "react";
import ImageGallery from "react-image-gallery";
import imgSlide from "./imgSlide";

import "../sass/slideshow.sass";

const Slideshow = () => {
   
  return (
    <>
      <ImageGallery
        items={imgSlide}
        autoPlay={true}
        showPlayButton={false}
        showNav={false}
        showBullets={true}
        showThumbnails={false}
        showFullscreenButton={false}
      />
    </>
  );
};

export default Slideshow;

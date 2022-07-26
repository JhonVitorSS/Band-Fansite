import { Routes, Route, Link } from "react-router-dom";
import "../sass/Musicrightside.sass";

const Musicrightside = () => {
  return (
    <>
      <section class="right-side">
        <header>
          <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>

            <li>
              <Link to="/music"> Music</Link>
            </li>

            <li>
              <a href=""> Location</a>
            </li>
            <li>
              <Link to="/about"> About</Link>
            </li>
            <li>
              <a href="">
                <i class="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>
          </ul>
        </header>
     
        <div className="albums">
          <iframe
            src="https://open.spotify.com/embed/album/1UCftLQD0hJ5vRy7OMfbcF?utm_source=generator"
            width="40%"
            height="280"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed/album/4cTjPXaFkUyaHr29G1PiT9?utm_source=generator"
            width="40%"
            height="280"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed/album/34d5piioQWqO1vuqAHuFT1?utm_source=generator"
            width="40%"
            height="280"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Musicrightside;

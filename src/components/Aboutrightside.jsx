import { Routes, Route, Link } from "react-router-dom";
import "../sass/aboutrightside.sass";

const Aboutrightside = () => {
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

        <h1>teste</h1>
        <iframe
          src="https://open.spotify.com/embed/track/3BI1nr32dmrPTTMmywXZZp?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </section>
    </>
  );
};

export default Aboutrightside;

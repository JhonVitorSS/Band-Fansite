import "../sass/rightside.sass";
import Slideshow from "./Slideshow";
import { Routes, Route, Link } from "react-router-dom";

const Rightside = () => {
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

        <Slideshow />
      </section>
    </>
  );
};

export default Rightside;

import "../sass/leftside.sass";
import Logo from "../imagens/logo.png";

const teste = () => {
  return (
    <>
      <section class="left-side">
        <div class="logo">
          <img src={Logo} alt="" />
        </div>

        <ul class="redes">
          <li class="girar">
            <a href="https://www.youtube.com/watch?v=0t_I_ghmXIQ">
              {" "}
              <i class="fa-brands fa-youtube"></i>{" "}
            </a>
          </li>

          <li class="girar">
            <a href="https://www.instagram.com/jinjer_official/">
              {" "}
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>

          <li class="girar">
            <a href="https://twitter.com/jinjerofficial">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li class="girar">
            <a href="https://open.spotify.com/artist/7o6cOczXTB8ioTAAJTbESf?si=5bz3N1_pQh-UgQhGH8Cjqw">
              <i class="fa-brands fa-spotify"></i>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default teste;

import "../sass/leftside.sass";

const teste = () => {
  return (
    <>
      <section class="left-side">
        <div class="logo">
          <img src="imagens/logo.png" alt="" />
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
        </ul>
      </section>
    </>
  );
}

export default teste
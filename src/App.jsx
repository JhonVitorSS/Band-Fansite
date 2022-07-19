import logo from "./imagens/logo.png";
import "./sass/main.sass";
import Leftside from "./components/Leftside";
import Rightside from "./components/Rightside";

function App() {
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
}

export default App;

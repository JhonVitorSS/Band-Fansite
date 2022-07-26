import About from "./components/About";
import Home from "./components/Home";
import Music from "./components/Music"
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/music" element={<Music />}></Route>
      </Routes>
    </>
  );
}

export default App;

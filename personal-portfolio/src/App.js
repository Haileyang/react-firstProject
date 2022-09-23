import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { MainVisual } from "./components/MainVisual";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <MainVisual />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

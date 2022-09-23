import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { MainVisual } from "./components/MainVisual";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <MainVisual />
      <Skills />
      <Projects />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

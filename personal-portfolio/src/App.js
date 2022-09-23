import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { MainVisual } from "./components/MainVisual";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <MainVisual />
    </div>
  );
}

export default App;

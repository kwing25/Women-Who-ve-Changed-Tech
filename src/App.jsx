//import './App.css';
import "./App.scss"

import Nav from "./components/Nav";
import Home from "./pages/Home";
import MainContent from "./pages/Main";


export default function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <MainContent />
    </div>
  );
}

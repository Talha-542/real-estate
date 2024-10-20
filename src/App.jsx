import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/REsidencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Companies />
      <Residencies />
      <Value/>
      <Contact/>
    </div>
  );
}

export default App;

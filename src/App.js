import About from "./Components/About/About";
import Nav from "./Components/Navbar/Nav";
import "./index.css";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact1";
import Project from "./Components/Project/Project1";
import Skill from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

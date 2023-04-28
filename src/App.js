import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import "./index.css";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact1";
import Project from "./Components/Project/Project";
// import Skill from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      {/* <Skill /> */}
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

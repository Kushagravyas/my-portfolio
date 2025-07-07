import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience/>
      <Projects />
      <Technologies/>
      <Contact/>

      <SocialLinks />
    </div>
  );
}

export default App;

import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <SocialLinks></SocialLinks>
      <Home></Home>
      <About></About>
      <Gallery></Gallery>
      <Portfolio></Portfolio>
      <Skills></Skills>
      <Timeline></Timeline>
      <Contact></Contact>
    </div>
  );
}

export default App;

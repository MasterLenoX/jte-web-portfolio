import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <SocialLinks></SocialLinks>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;

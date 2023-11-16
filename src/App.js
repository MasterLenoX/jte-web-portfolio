import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      {/* <h1 className="text-4xl font-semibold font-signature">Hello World!</h1> */}
      <Navbar></Navbar>
      <SocialLinks></SocialLinks>
      <Home></Home>
      <About></About>
    </div>
  );
}

export default App;

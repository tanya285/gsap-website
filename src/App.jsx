import "./index.css"; // or './App.css' depending on your setup

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Cocktails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";
import Art from "./components/Art.jsx";
import Contact from "./components/Contact.jsx";
import Menu from "./components/Menu.jsx"
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails/>
      <About/>
      <Art/>
      <Menu/>
      <Contact/>
      <div className="h-dvh bg-black"></div>
    </main>
  );
};
export default App;

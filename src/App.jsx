import "./index.css"; // or './App.css' depending on your setup

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black"></div>
    </main>
  );
};
export default App;

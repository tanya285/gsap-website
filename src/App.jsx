import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger,SplitText } from 'gsap/all'
import './index.css'; // <== MUST be here

gsap.registerPlugin(ScrollTrigger,SplitText);
const App = () => {
  return (
    <div className={`flex justify-center items-center h-[100vh]`}>
      <h1 className="text-3xl text-indigo-300 background"> Hello world</h1>
    </div>
  );
}

export default App
import { BrowserRouter, Routes } from "react-router-dom";
import {
  About,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Contact,
  Works,
  StarsCanvas,
} from "./components";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <StarsCanvas />
          <Contact />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

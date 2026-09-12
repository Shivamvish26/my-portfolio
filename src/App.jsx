import { useState } from "react";
import Loader from "./components/Loader";
import Hero from "./sections/Hero";
import CustomCursor from "./components/CustomCursor";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Navbar from "./sections/Navbar";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />

      {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;

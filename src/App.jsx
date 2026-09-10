import { useState } from "react";
import Loader from "./components/Loader";
import Hero from "./sections/Hero";
import CustomCursor from "./components/CustomCursor";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />

      {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <Hero />
          <About />
          <Experience />
          <Projects />
        </>
      )}
    </>
  );
}

export default App;

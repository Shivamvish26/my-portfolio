import { useEffect, useRef } from "react";
import gsap from "gsap";

function HeroBackground() {
  const orbRef = useRef(null);

  useEffect(() => {
    const orb = orbRef.current;

    const handleMouseMove = (event) => {
      const x = (event.clientX - window.innerWidth / 2) * 0.3;
      const y = (event.clientY - window.innerHeight / 2) * 0.3;

      gsap.to(orb, {
        x: x,
        y: y,
        duration: 1,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="hero__grid"></div>

      <div className="hero__orb" ref={orbRef}></div>
    </>
  );
}

export default HeroBackground;

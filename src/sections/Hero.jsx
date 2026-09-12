import { useEffect, useRef } from "react";
import gsap from "gsap";
import MagneticButton from "../components/MagneticButton";
import HeroBackground from "../components/HeroBackground";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline
        .from(".hero__small-text", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          ".hero__title",
          {
            y: 150,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.4",
        )
        .from(
          ".hero__description",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".hero__button",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <HeroBackground />
      <div className="hero__content">
        <p className="hero__small-text">HELLO, I'M SHUBHAM VISHWAKARMA</p>

        <h1 className="hero__title">
          CRAFTING
          <br />
          SEAMLESS
          <br />
          INTERFACES.
        </h1>

        <p className="hero__description">Frontend Developer</p>

      <MagneticButton
  onClick={() => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
>
  VIEW MY WORK →
</MagneticButton>
      </div>

      <div className="hero__scroll">SCROLL TO EXPLORE ↓</div>
    </section>
  );
}

export default Hero;

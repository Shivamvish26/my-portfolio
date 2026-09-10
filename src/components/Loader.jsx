import { useEffect, useRef } from "react";
import gsap from "gsap";

function Loader({ onComplete }) {
  const loaderRef = useRef(null);
  const counterRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counter = { value: 0 };

      const timeline = gsap.timeline({
        onComplete: onComplete,
      });

      timeline.to(counter, {
        value: 100,
        duration: 2.5,
        ease: "power2.inOut",

        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent =
              `${Math.floor(counter.value)}%`;
          }
        },
      });

      timeline.to(
        lineRef.current,
        {
          scaleX: 1,
          duration: 2.5,
          ease: "power2.inOut",
        },
        "<"
      );

      timeline.to(loaderRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
      });
    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="loader" ref={loaderRef}>
      <div className="loader__top">
        <span>PORTFOLIO</span>
        <span>2026</span>
      </div>

      <div className="loader__center">
        <h2>SHUBHAM.DEV</h2>
        <p>INITIALIZING EXPERIENCE</p>
      </div>

      <div className="loader__bottom">
        <span ref={counterRef}>0%</span>

        <div className="loader__line">
          <div ref={lineRef}></div>
        </div>

        <span>PLEASE WAIT</span>
      </div>
    </div>
  );
}

export default Loader;
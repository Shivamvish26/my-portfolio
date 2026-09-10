import { useEffect, useRef } from "react";
import gsap from "gsap";

function MagneticButton({ children }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    const moveX = gsap.quickTo(button, "x", {
      duration: 0.4,
      ease: "power3.out",
    });

    const moveY = gsap.quickTo(button, "y", {
      duration: 0.4,
      ease: "power3.out",
    });

    const handleMouseMove = (event) => {
      const rect = button.getBoundingClientRect();

      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;

      const distanceX = event.clientX - buttonCenterX;
      const distanceY = event.clientY - buttonCenterY;

      moveX(distanceX * 0.2);
      moveY(distanceY * 0.2);
    };

    const handleMouseLeave = () => {
      moveX(0);
      moveY(0);
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <button ref={buttonRef} className="hero__button">
      {children}
    </button>
  );
}

export default MagneticButton;

import { useEffect, useRef } from "react";
import gsap from "gsap";

function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const moveCursor = (event) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(follower, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const enterButton = () => {
      gsap.to(follower, {
        scale: 2.5,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const leaveButton = () => {
      gsap.to(follower, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const buttons = document.querySelectorAll("button, a");

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", enterButton);
      button.addEventListener("mouseleave", leaveButton);
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", enterButton);
        button.removeEventListener("mouseleave", leaveButton);
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef}></div>

      <div className="custom-cursor-follower" ref={followerRef}></div>
    </>
  );
}

export default CustomCursor;

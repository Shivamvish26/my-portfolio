import gsap from "gsap";

export const heroAnimation = () => {
  const timeline = gsap.timeline();

  timeline.fromTo(
    ".portfolio h1",
    {
      y: 150,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
    }
  );

  timeline.fromTo(
    ".portfolio p",
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.5"
  );
};
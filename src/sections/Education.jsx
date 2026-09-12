import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Education() {
  const educationRef = useRef(null);

  const education = [
    {
      year: "2019 — 2021",
      degree: "Bachelor of Computer Applications",
      institute: "P. Jog College of Science & Commerce",
      location: "Pune, Maharashtra",
      description:
        "Bachelor's degree in Computer Applications with a focus on programming, web development, databases, and software development.",
      number: "01",
    },
    {
      year: "2021 — 2023",
      degree: "Master of Computer Application",
      institute:
        "Suryadatta Institute of Business Management & Technology (SIBMT)",
      location: "Pune, Maharashtra",
      description:
        "Master's degree focused on computer applications, programming, software development, database management, and computer science concepts.",
      number: "02",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".education__label",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".education",
            start: "top 85%",
            end: "top 55%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        ".education__item",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".education__list",
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        ".education__year",
        {
          x: -60,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".education__list",
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
        },
      );
    }, educationRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="education" id="education" ref={educationRef}>

      <div className="education__label">
        <span>05</span>
        <span>EDUCATION</span>
      </div>

      <div className="education__intro">
        <span>MY ACADEMIC JOURNEY</span>

        <h2>
          LEARNING
          <br />
          NEVER STOPS.
        </h2>
      </div>

      <div className="education__list">
        {education.map((item) => (
          <article className="education__item" key={item.number}>

            <div className="education__year">{item.year}</div>

            <div className="education__content">
              <span className="education__type">EDUCATION</span>

              <h3>{item.degree}</h3>

              <div className="education__institute">
                <span>{item.institute}</span>
                <span>{item.location}</span>
              </div>

              <p>{item.description}</p>

              <div className="education__line">
                <span></span>
              </div>
            </div>

            <div className="education__number">{item.number}</div>
          </article>
        ))}
      </div>

      <div className="education__bottom">
        <span>KNOWLEDGE</span>
        <span>EXPERIENCE</span>
        <span>GROWTH</span>
      </div>
    </section>
  );
}

export default Education;
